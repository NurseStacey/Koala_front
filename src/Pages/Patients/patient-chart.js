import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'
import PatientHeader from './Components/patient-header'
import PatientNavigationHeader from './Components/patient-navigation-header'
import PatientOperations from './Components/patient-operations'

import Patient_Location_Modals from './Patient-Chart-Pieces/Patient-Location-Modals'
import Modal_Single_Text_Box from './Components/modal-files/modal-single-text-box'
import Patient_Charts_Histories from './Patient-Chart-Pieces/Histories'

import {ALL_FIELDS} from './form-fields/combined-form-fields'


import Modal_Form from '../../Components/modal-form'

import AllListBoxes from './Patient-Chart-Pieces/all-list-boxes'
import loadPatient from './Components/import-patient'

import CategDxRxListBoxes from './Patient-Chart-Pieces/categ-dx-rx-listboxes'
import CategDxRxModals from './Patient-Chart-Pieces/categ-dx-rx-modals'
import '../../../src/CSS/general.css'

export default function Patient_Chart() {

    const [NewModelCategOpenSwitch,setNewModelCategOpenSwitch]=useState(false)
    const [NewModelCategEditOpenSwitch,setNewModelCategEditOpenSwitch]=useState(false)
    const [NewModelDxOpenSwitch,setNewModelDxOpenSwitch]=useState('')
    const [NewModelRxOpenSwitch,setNewModelRxOpenSwitch]=useState(false)

    const [DrugNames, setDrugNames]=useState([])
    const [CategToEdit, setCategToEdit] = useState(null)
    const [ModalFormPriorValues,setModalFormPriorValues] = useState({})

    const [CodeToEdit, setCodeToEdit] = useState(null)
    const [Patient_Location_Mod, setPatient_Location_Mod] = useState('None')
    const [Single_Text_Mod,setSingle_Text_Mod]=useState(false)

    const [Form_Mod,setForm_Mod]=useState(false)
    const [WhichForm, setWhichForm] = useState('none')
    const [FormTitle,setFormTitle]=useState('')

    const [single_modal_title,setsingle_modal_title ]=useState('')
    const [single_text_field_name,setsingle_text_field_name]=useState('first_name')
    const location = useLocation()
    
    const [ThisPatient, setThisPatient]=useState(0)

    const EditDxCode = (code) => {
        console.log('here')
    }

    const setPatient_Location_Modtest=(value) =>{
        setPatient_Location_Mod(value)
        console.log(value)
    }
    const EditModal = (form, Values) =>{
        //console.log(ModalFormPriorValues)
        
        let newPriorValues = Values
        newPriorValues['form']=form
        //console.log(newPriorValues)
        setModalFormPriorValues(newPriorValues)
        setForm_Mod(true)
    }

    const Update_Location = (New_Bed)=> {

        let newpatient = ThisPatient
        newpatient['patient_location']=New_Bed
        setThisPatient(newpatient)
    }

    const UpdateMod = (ThisForm, title) =>
    {
        setWhichForm(ThisForm)
        setFormTitle(title)
        setForm_Mod(true)
        
    }

    const Update_Single_Text_Mod = (field_name, title) =>
    {
        setSingle_Text_Mod(true)
        setsingle_text_field_name(field_name)
        setsingle_modal_title(title)
    }

    useEffect(() => {
        setDrugNames(location.state?.drug_names)
        loadPatient(setThisPatient,location.state?.patient_id)
            
        },[])

    const Test_This = ()=>{
        console.log(DrugNames)
        // let data_to_send ={
        //     patient:ThisPatient['basic_data'].id,
        //     facility:ThisPatient['patient_location'].facilityID,
        //     facilityID:'123'
        // }

        // try{
        //     AxiosInstance.post(`patients/temp/`, data_to_send).then((res) =>{
        //         console.log(res)

        //     })
        // } catch(error){console.log(error)}     
    }

    return (
        <div>
            {(ThisPatient == 0) ? (
            <div></div>
             ) :  (
            <div>
                <PatientNavigationHeader/>

                <PatientHeader
                    setIsOpen = {setPatient_Location_Mod}
                    ThisPatient = {ThisPatient}
                    Patient_Location = {ThisPatient['patient_location']}
                    Patient_Age = {ThisPatient['age']}
                    Date_Of_Birth = {ThisPatient['basic_data']['Date_Of_Birth'].slice(0,10)}
                    Facility_ID = {ThisPatient['facility_id']}
                />
                
                <PatientOperations
                />
                <button onClick={Test_This}>test</button>
                <Patient_Location_Modals
                        Open={Patient_Location_Mod}
                        setPatient_Location_Mod={setPatient_Location_Modtest}
                        Update_Location={Update_Location}                
                        this_patient={ThisPatient}
                />

                <CategDxRxModals
                    ModelCategOpenSwitch={NewModelCategOpenSwitch}
                    ModelCategCloseFx={()=>setNewModelCategOpenSwitch(false)}
                    ModelCategEditOpenSwitch={NewModelCategEditOpenSwitch}
                    ModelCategEditCloseFx={()=>setNewModelCategEditOpenSwitch(false)} 
                    ModelDxOpenSwitch={NewModelDxOpenSwitch}
                    ModelDxCloseFx={()=>setNewModelDxOpenSwitch('')}
                    ModelRxOpenSwitch={NewModelRxOpenSwitch}
                    ModelRxCloseFx={()=>setNewModelRxOpenSwitch(false)}      
                    ThisPatient={ThisPatient}
                    ReloadPatient={()=>loadPatient(setThisPatient,ThisPatient['basic_data'].id)}
                    CodeToEdit={CodeToEdit}      
                    CategToEdit={CategToEdit}
                    setCodeToEdit={setCodeToEdit}
                    ModelDxNewOpenFx={()=>setNewModelDxOpenSwitch('new')}
                    allMedications={DrugNames}
                />

                <Modal_Single_Text_Box
                        open={Single_Text_Mod}
                        onClose={()=>setSingle_Text_Mod(false)}
                        field_name={single_text_field_name}
                        title={single_modal_title}
                        this_patient={ThisPatient}
                        onUpdate = {Update_Single_Text_Mod}
                />
        
                <Modal_Form
                    open={Form_Mod}
                    onClose={()=>setForm_Mod(false)}
                    form={WhichForm}
                    title={FormTitle}
                    this_patient={ThisPatient}
                    UpdateMod={UpdateMod}
                    AllFields = {ALL_FIELDS}
                    priorValues={ModalFormPriorValues}
                    setpriorValues={setModalFormPriorValues}
                    ReloadPatient = {()=>loadPatient(setThisPatient,ThisPatient['basic_data'].id)}
                    />            

                <div
                    style={{
                        display:'flex',
                        border:'1px solid black'
                    }}
                >
                    <div
                        className='ONE_COLUMN_PATIENT_CHART_STYLE'
                        >
                        <Patient_Charts_Histories
                            Open={Update_Single_Text_Mod}
                            ThisPatient={ThisPatient}
                        />
                    </div> 

                    <div
                        className='ONE_COLUMN_PATIENT_CHART_STYLE'
                        >

                        <AllListBoxes                        
                            ThisPatient={ThisPatient}
                            UpdateMod={UpdateMod}
                            AllFields = {ALL_FIELDS}
                            EditModal = {EditModal}
                        />
                     

                    </div>

                    <div
                        className='ONE_COLUMN_PATIENT_CHART_STYLE'
                        >
                <CategDxRxListBoxes
                    ModelCategOpenFx={()=>setNewModelCategOpenSwitch(true)}
                    ModelCategEditOpenFx={()=>setNewModelCategEditOpenSwitch(true)}
                    ModelDxNewOpenFx={()=>setNewModelDxOpenSwitch('new')}
                    ModelDxEditOpenFx={()=>setNewModelDxOpenSwitch('edit')}
                    ModelRxOpenFx={()=>setNewModelRxOpenSwitch(true)}
                    ThisPatient={ThisPatient}
                    setCodeToEdit={setCodeToEdit}
                    setCategToEdit={setCategToEdit}
                />                            

                    </div>                    
                </div>
            </div>

)}
        </div> 
        
    )
}
