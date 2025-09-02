import Page_Header from '../../Components/page_header'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'
// import AxiosInstance from '../../utils/Axios'
import PatientHeader from './Components/patient-header'

import Patient_Location_Modals from './Patient_Chart_Pieces/Patient_Location_Modals'
import Modal_Single_Text_Box from './Components/modal single_text_box'
import Patient_Charts_Histories from './Patient_Chart_Pieces/Histories'

import {ALL_FIELDS} from './form-fields/combined_form_fields'

import Modal_Form from '../../Components/modal_form'
import ModalDiagnosis from './Components/modal-diagnosis'
import AllListBoxes from './Patient_Chart_Pieces/all-list-boxes'
import DiagnosisProblems from './Patient_Chart_Pieces/diagnosis-problems'
import loadPatient from './Components/import-patient'

export default function Patient_Chart() {

    const [ModalFormPriorValues,setModalFormPriorValues] = useState({})
    const [DiagnosisMod, setDiagnosisMod] = useState(false)
    const [CodeToEdit, setCodeToEdit] = useState(0)
    const [Patient_Location_Mod, setPatient_Location_Mod] = useState('None')
    const [Single_Text_Mod,setSingle_Text_Mod]=useState(false)

    const [Form_Mod,setForm_Mod]=useState(false)
    const [WhichForm, setWhichForm] = useState('none')
    const [FormTitle,setFormTitle]=useState('')

   // const [oneDxCode,setoneDxCode] = useState({id:0})

    const [single_modal_title,setsingle_modal_title ]=useState('')
    const [single_text_field_name,setsingle_text_field_name]=useState('first_name')
    const location = useLocation()
    
    const [ThisPatient, setThisPatient]=useState(0)

    const EditDxCode = (code) => {
        console.log('here')
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
        
        loadPatient(setThisPatient,location.state?.patient_id)
            
        },[])

    const Test_This = ()=>{
        setDiagnosisMod(true)
        //setModalFormPriorValues({})
    }

    return (
        <div>
            {(ThisPatient == 0) ? (
            <div></div>
             ) :  (
            <div>
                <Page_Header
                    The_Header={ThisPatient['basic_data'].last_name + ', ' + ThisPatient['basic_data'].first_name}
                    
                />
                <button onClick={Test_This}>test</button>
                <PatientHeader
                    setIsOpen = {setPatient_Location_Mod}
                    ThisPatient = {ThisPatient}
                    Patient_Location = {ThisPatient['patient_location']}
                    Patient_Age = {ThisPatient['age']}
                    Date_Of_Birth = {ThisPatient['basic_data']['Date_Of_Birth'].slice(0,10)}
                />
                
                <Patient_Location_Modals
                        Open={Patient_Location_Mod}
                        setPatient_Location_Mod={setPatient_Location_Mod}
                        Update_Location={Update_Location}                
                        this_patient_id={ThisPatient['basic_data']['id']}
                />

                <ModalDiagnosis
                    open={DiagnosisMod}
                    onClose={()=>setDiagnosisMod(false)}
                    patientID={ThisPatient['basic_data']['id']}
                    currentCodes={ThisPatient['dx_codes']}
                    CodeToEdit = {CodeToEdit}
                    setCodeToEdit ={setCodeToEdit}
                    ReloadPatient = {()=>loadPatient(setThisPatient,ThisPatient['basic_data'].id)}
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
                        style={{
                            width:'30%',
                            border:'1px solid black'
                        }}>
                        <Patient_Charts_Histories
                            Open={Update_Single_Text_Mod}
                            ThisPatient={ThisPatient}
                        />
                    </div> 

                    <div
                        style={{
                            width:'50%',
                            border:'1px solid red',
                            display:'block',
                            marginLeft:'20px',
                            display:'flex',
                            flexDirection:'column',
                        }}
                        >

                        <AllListBoxes                        
                            ThisPatient={ThisPatient}
                            UpdateMod={UpdateMod}
                            AllFields = {ALL_FIELDS}
                            EditModal = {EditModal}
                        />
                     

                    </div>

                    <div
                        style={{
                            width:'30%',
                            border:'1px solid black',
                            display:'block',
                            marginLeft:'20px',
                            display:'flex',
                            flexDirection:'column',
                            justifContent:'top'
                        }}
                        >
                            <DiagnosisProblems
                                open={setDiagnosisMod}
                                ThisPatient={ThisPatient}
                                setCodeToEdit = {setCodeToEdit}
                                />
                    </div>                    
                </div>
            </div>

)}
        </div> 
        
    )
}

//         {
//         basic_data:{
//                 first_name:'',
//                 last_name:'',
//                 id:0,
//                 Date_Of_Birth:'1900-01-01',
//                 med_bio:''
//             },
//         age:0,
//         patient_location:{
//         bed:'',
//         unit:'',
//         facility:''},
//         surgical_history:[],
//         major_event:[],
//         outside_providers:[]
    
// }
//)

    // const [Patient_Location, set_Patient_Location] = useState({
    //     bed:'',
    //     unit:'',
    //     facility:''
    // })