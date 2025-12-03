import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'
import PatientHeader from './Components/patient-header'
import PatientNavigationHeader from './Components/patient-navigation-header'
import PatientOperations from './Components/patient-operations'
import Patient_Charts_Histories from './Patient-Chart-Pieces/Histories'
import AllModals from './Patient-Chart-Pieces/all-models'
import AllListBoxes from './Patient-Chart-Pieces/all-list-boxes'
import loadPatient from './Components/import-patient'
import CategDxRxListBoxes from './Patient-Chart-Pieces/categ-dx-rx-listboxes'
import {DefaultModalSwitches} from './Patient-Chart-Pieces/all-models'
import {DefaultPatient,DefaultDxCode,DefaultRx,DefaultCateg} from  './Components/import-patient'
import '../../../src/CSS/general.css'

export default function Patient_Chart() {

    const [ModelSwitches, setModelSwitches]=useState(DefaultModalSwitches)

    const UpdateModelSwitches=(value,which)=>{

        const newModelSwitches = {...ModelSwitches}
        newModelSwitches[which]=value
        setModelSwitches(newModelSwitches)
    }

    const [DrugNames, setDrugNames]=useState([])
    const [CategToEdit, setCategToEdit] = useState(DefaultCateg())
    const [RxToEdit, setRxToEdit] = useState(null)
    const [ModalFormPriorValues,setModalFormPriorValues] = useState({})

    const [CodeToEdit, setCodeToEdit] = useState(DefaultDxCode())

    const [WhichForm, setWhichForm] = useState('none')
    const [FormTitle,setFormTitle]=useState('')

    const [single_modal_title,setsingle_modal_title ]=useState('')
    const [single_text_field_name,setsingle_text_field_name]=useState('first_name')
    const location = useLocation()
    
    //const [ThisPatient, setThisPatient]=useState(DefaultPatient)
    const [ThisPatient, setThisPatient]=useState(DefaultPatient())

    const EditModal = (form, Values) =>{        
        let newPriorValues = Values
        newPriorValues['form']=form
        setModalFormPriorValues(newPriorValues)
        UpdateModelSwitches(true,'modalForm')
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
        UpdateModelSwitches(true,'modalForm')
    }

    const Update_Single_Text_Mod = (field_name, title) =>
    {
        UpdateModelSwitches(true,'SingleModal')
        setsingle_text_field_name(field_name)
        setsingle_modal_title(title)
    }

    useEffect(() => {
        setDrugNames(location.state?.drug_names)
        loadPatient(setThisPatient,location.state?.patient_id)
        },[])

    useEffect(()=>{

        if (CategToEdit['id']>0) {
            try{
                setCategToEdit(ThisPatient.get_this_record(CategToEdit['id'],'medical_categories'))
            } catch{setCategToEdit(DefaultCateg())}
        }

        if (CodeToEdit['id']>0) {        
            try{
                setCodeToEdit(ThisPatient.get_this_record(CodeToEdit['id'],'dx_codes'))
            } catch{setCodeToEdit(DefaultDxCode)}
        }

    }, [ThisPatient])

    return (
        <div>
            {(ThisPatient == 0) ? (
            <div></div>
             ) :  (
                <div>
                    <PatientNavigationHeader/>

                    <PatientHeader
                        setIsOpen = {UpdateModelSwitches}
                        ThisPatient = {ThisPatient}
                    />
                    
                    <PatientOperations
                        ThisPatient = {ThisPatient}
                    />                    

                    <div
                        style={{
                            display:'flex',
                            border:'1px solid black'
                        }}
                    >
                        <AllModals
                            UpdateModelSwitches={UpdateModelSwitches}
                            ModelSwitches={ModelSwitches}
                            Update_Location={Update_Location}
                            ThisPatient={ThisPatient}
                            ReloadPatient={()=>loadPatient(setThisPatient,ThisPatient['basic_data'].id)}
                            CodeToEdit={CodeToEdit}
                            CategToEdit={CategToEdit}
                            RxToEdit={RxToEdit}
                            setCodeToEdit={setCodeToEdit}
                            setCategToEdit={setCategToEdit}
                            setRxToEdit={setRxToEdit}
                            DrugNames={DrugNames}
                            single_text_field_name={single_text_field_name}
                            single_modal_title={single_modal_title}
                            Update_Single_Text_Mod={Update_Single_Text_Mod}
                            WhichForm={WhichForm}
                            FormTitle={FormTitle}
                            UpdateMod={UpdateMod}
                            ModalFormPriorValues={ModalFormPriorValues}
                            setModalFormPriorValues={setModalFormPriorValues}
                        />  
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
                                EditModal = {EditModal}
                            /> 
                        </div>

                        <div
                            className='ONE_COLUMN_PATIENT_CHART_STYLE'
                            >
                    <CategDxRxListBoxes
                        UpdateModelSwitches={UpdateModelSwitches}
                        ThisPatient={ThisPatient}
                        setCodeToEdit={setCodeToEdit}
                        setCategToEdit={setCategToEdit}
                        setRxToEdit={setRxToEdit}
                    />
                        </div>                    
                    </div>
                </div>
            )}
        </div> 
        
    )
}
