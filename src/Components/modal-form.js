import {useState,useEffect} from 'react'
import My_Button from './My-Button'
import One_Form from './One-Form'
import AxiosInstance from '../utils/Axios'

export default function Modal_Form({
    open, 
    onClose,
    form, 
    title,
    this_patient, 
    UpdateMod, 
    AllFields,
    priorValues,
    setpriorValues,
    ReloadPatient})
{

    const [localForm, setlocalForm]=useState('')
    const [Editing, setEditing]=useState(false)
    const [TheData, setTheData]= useState('')
    const [FormTitle, setFormTitle]=useState('')


    const DataToSend = () =>{

        let datatosend = {}

        TheData.map(one_field =>{

            if (one_field.name !== undefined){
                if (one_field.value !== '') 
                    {console.log(one_field)
                    datatosend[one_field.name]=one_field.value}
                else
                    datatosend[one_field.name]=null
            }
        })
        
        datatosend['patient']=this_patient['basic_data'].id        

        return (datatosend)
    }

    const deleteRecord = ()=>{
        try{
            
            AxiosInstance.delete(`${AllFields[localForm].edit_url}${TheData[0]['id']}`).then((res) =>{

                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        UpdateMod('none','')
        ReloadPatient()
        onClose()
    }

    const updateRecord = ()=>{

        let datatosend = DataToSend()
        
        try{
            AxiosInstance.patch(`${AllFields[localForm].edit_url}${TheData[0]['id']}`, datatosend).then((res) =>{
                console.log(res)
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        setpriorValues({})
        UpdateMod('none','')
        ReloadPatient()
        onClose()        
    }

    const addRecord = () =>{
   
        let datatosend = DataToSend()
        
        try{
            AxiosInstance.post(`${AllFields[localForm].post_url}`, datatosend).then((res) =>{
                //console.log(res)
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        UpdateMod('none','')
       
        onClose()
    }
    
    const closeModalForm= () =>{

        setTheData([])
        setpriorValues({})
        UpdateMod('none','')
        onClose()
    }

    const set_value= (name, value)=>{

        let elementsToUpdate = TheData.find(one_element=>one_element.name == name)
        elementsToUpdate.value=value

        let keysToReplace = name
        if (name=='date') {
            try{
                let year = value.slice(0,4)
                let month = value.slice(5,7)
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'year'))
                elementsToUpdate[1].value=year
                keysToReplace.push('year')
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'month'))
                elementsToUpdate[2].value=month                
                keysToReplace.push('month')
            }catch {}
        }

        let data = TheData.filter(one_element=>(name !== one_element.name))
        let newArray = [...data,elementsToUpdate]
        
        newArray=newArray.sort((a,b)=>a.order-b.order)
        
        setTheData([...data,elementsToUpdate].sort((a,b)=>a.order-b.order))
    }

    const test=()=>{
        console.log(TheData)
        
    }

    const ResetForm = (thisform)=>{
   
        setFormTitle(AllFields[thisform].FormTitle)

    }

    //this is for editing records
    useEffect(() =>{
        try{
            
            ResetForm(priorValues['form'])
            setlocalForm(priorValues['form'])
            let editingdata=[{id:priorValues['id']}]

            AllFields[priorValues['form']].all_fields.map(oneField =>{

                    editingdata.push({...oneField,
                        'value':priorValues[oneField.name]
                    })
                })            

            setTheData(editingdata)        
            setEditing(true)
            
        } catch{}
    },[priorValues])

    //this is for new records
    useEffect(() => {
        let data=[]

        AllFields[form].all_fields.map(oneField =>{

                data.push({...oneField,
                    'value':''
                })
            })
        setTheData(data)
        setlocalForm(form)

        ResetForm(form)

        setEditing(false)
        
    },[form])

    if  (!open) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
            >

            <div
                    style={{
                        display:'block',
                        height:'100%'
                    }}
                >

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',                                      
                        width:'100%',    

                        font:'arial',
                        fontSize:'26px',
                        padding:'20px', 

                    }}
                    >
                    {title}
                </div>
                <div
                    style={{
                        marginRight:'2%',
                        marginLeft:'2%',
                        height:'75%',
                        overflowY:'scroll'
                    }}>
                    <One_Form
                        The_Fields={TheData}
                        set_value={set_value}
                        Button_Text={FormTitle}
                        showButton={false}
                    />
                </div>
           
                 <div
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Cancel'}
                                Width='90px'
                                Height='45px'
                                On_Click={closeModalForm}
                                FontSize='18px'
                            />

                            {(Editing) ?
                            <>
                                <div>
                                    <My_Button
                                        The_Text={'Update'}
                                        Width='90px'
                                        Height='45px'
                                        On_Click={updateRecord}
                                        FontSize='18px'
                                    />  
                                  </div> 
                                  <div>  
                                    <My_Button
                                        The_Text={'Delete'}
                                        Width='90px'
                                        Height='45px'
                                        On_Click={deleteRecord}
                                        FontSize='18px'
                                    />  
                                </div>  
                                </> :
                            
                            <My_Button
                                The_Text={'Save'}
                                Width='90px'
                                Height='45px'
                                On_Click={addRecord}
                                FontSize='18px'
                            />
                                  
                                     
                            }
                              
                                       
                                                         
                    </div> 
                </div> 
                
            
            </div>
        </div>
    )
}