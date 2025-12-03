import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'
import {useState, useEffect} from 'react'
import AxiosInstance from '../../../../../utils/Axios'
import ChangeBackgroundColor from '../../../../../Components/Change-Background-Color-for-List'

import ButtonsRow from './new-categ-pieces/buttons'
import AllCategories from './new-categ-pieces/all-categ'
import CategoriesToAdd from './new-categ-pieces/categ-to-add'
import CurrentCategories from './new-categ-pieces/current-categ'

export default function CategNewModel({
    openSwitch, 
    onClose, 
    ReloadPatient,
    ThisPatient
  }){

    const [CategToAdd, setCategToAdd]=useState([])
    const [PatientsCurrentCategs,setPatientsCurrentCategs] = useState([])

    useEffect(()=>{
            setPatientsCurrentCategs(ThisPatient.getCategNames())
    },[ThisPatient])

    const categAddedSelected = (this_categ) => {        
        ChangeBackgroundColor(this_categ, CategToAdd, setCategToAdd)
    }    

    const RemoveCateg = (this_categ) =>
    {
        setCategToAdd(CategToAdd.filter((one_categ)=>one_categ.name!==this_categ))
    }        
    const AddMedCategToPatient = (this_categ)=>{

        if (CategToAdd.find((dummyCateg)=>dummyCateg.id==this_categ.id)==undefined)
            if (PatientsCurrentCategs.find((dummyCateg)=>dummyCateg['name']==this_categ['name'])==undefined)
            {
            setCategToAdd([...CategToAdd,{
                name:this_categ.name,
                id:this_categ.id,
                backgroundColor:'white'
                }])
            }
    }

    const CloseBox = () =>{
        setCategToAdd([])
        ReloadPatient()
        onClose()
    }

    const AddCategToPatientDB = ()=>{
        let data_to_send={
            'patient_id':ThisPatient['basic_data'].id,
            'categories':[]
        }
        CategToAdd.map((one_categ)=>{
            data_to_send['categories'].push(one_categ.id)
        })
        try{
            AxiosInstance.post(`patients/add_medical_categories/`, data_to_send).then((res) =>{                
                CloseBox()            
            })
        } catch(error){console.log(error)}   
    }

    const test = () => {
        console.log(ThisPatient['medical_categories'])
    }

    if (!openSwitch) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div
                    style={{
                        display:'block',
                        width:'100%',
                        height:'100%',
                        border:'1px solid black',
                    }}
                    >
                    <div className='TITLE_STYLE_30'>Add New Medical Category</div>
                    <button onClick={test}>test</button>
                    <div
                        style={{
                            height:'80%',
                            display:'flex'
                        }}
                        >
                        <CategoriesToAdd
                            CategToAdd={CategToAdd}
                            categAddedSelected={categAddedSelected}
                            RemoveCateg={RemoveCateg}
                        />    

                        <AllCategories
                            AddMedCategToPatient={AddMedCategToPatient}
                        />    

                        <CurrentCategories
                            PatientsCurrentCategs={PatientsCurrentCategs}
                        />    
                    </div> 
               
                    <ButtonsRow
                        AddCategToPatient={AddCategToPatientDB}
                        CloseBox={CloseBox}
                    />
                 </div>
            </div>
        </div>
    )
}