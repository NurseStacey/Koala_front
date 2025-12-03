import './new-categ.css'
import My_Button from '../../../../../../Components/My-Button'
import MyListBox from '../../../../../../Components/My-Listbox'

import AxiosInstance from '../../../../../../utils/Axios'
import ChangeBackgroundColor from '../../../../../../Components/Change-Background-Color-for-List'
import {useEffect, useState} from 'react'

export default function AllCategories({
    AddMedCategToPatient,
})
{

    const AddMedCateg = (categ_name) =>
    {
        let this_categ = AllPossibleCateg.find((one_element)=>one_element.name==categ_name)
        AddMedCategToPatient(this_categ)

    }

    const [NewCategText, setNewCategText]=useState('')
    const [AllPossibleCateg, setAllPossibleCateg]=useState([])



    const CreateAllPossibleCategs = (data) =>{

                let all_categ = []
                data.map((one_categ)=>all_categ.push({
                    name:one_categ['categ_name'],
                    id:one_categ['id'],
                    backgroundColor:'white'}
                ))
                
                setAllPossibleCateg(all_categ.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
    }


    useEffect(() => {
        
        try{

            AxiosInstance.get(`medical/medical_categories/`).then((res) =>{
                CreateAllPossibleCategs(res.data)
                
            })
        } catch(error){console.log(error)}        
    
        // getCurrentProblems()
            
        },[])  

    const NewCateg = ()=>{

        let CategText = NewCategText.trim()
        
        CategText = CategText[0].toUpperCase() + CategText.slice(1)
        if (AllPossibleCateg.includes(CategText) ) {
            alert('Category has already been added')
        } else {
            try{
                
                AxiosInstance.post(`medical/medical_categories/`, {categ_name:CategText}).then((res) =>{
                    
                    AxiosInstance.get(`medical/medical_categories/`).then((res) =>{
                    CreateAllPossibleCategs(res.data)
                })
                })
            } catch(error){console.log(error)}
        }
    }

    const CategSelected = (this_categ) => {
        
        ChangeBackgroundColor(this_categ, AllPossibleCateg, setAllPossibleCateg)
    }

    return(
        <div 
            className='ONE_COLUMN_STYLE'
        >
            <div
                style={{
                    display:'flex',
                    font:'arial',
                    fontSize:'20px',
                    marginLeft:'5px',
                    justifyContent:'center',
                    height:'15%'
                }}
                >                                    
                <div
                    style={{marginRight:'3px', width:'200px'}}>
                    <input
                        type="text"
                        value={NewCategText}
                        onChange={(e)=>setNewCategText(e.target.value)}
                    />
                </div>
        
                <div
                    style={{
                        marginLeft:'3px',
                        }}>
                    <My_Button
                        The_Text='Create New Category'
                        Width='90px'
                        Height='45px'
                        On_Click={NewCateg}
                        FontSize='18px'
                    />           
                </div>
            </div>

            <div
                style={{
                    height:'85%',
                    }}>                       
                                        
                <MyListBox
                    listArray={AllPossibleCateg}
                    whichValue='name'
                    clickedFunction={CategSelected}
                    doubleclickedFunction={AddMedCateg}
                    title='Medical Problem Available'
                />
            </div>
                      
        </div>            
    )
}