import Patient_Location_Modals from '../Patient-Chart-Pieces/Patient-Location-Modals'
import Modal_Single_Text_Box from '../Components/modal-files/modal-single-text-box'

import Modal_Form from '../../../Components/modal-form/modal-form'
import CategDxRxModals from '../Patient-Chart-Pieces/categ-dx-rx-modals'
import {ALL_FIELDS} from '../form-fields/combined-form-fields'

export const DefaultModalSwitches = {
    'Categ':false,
    'CategEdit':false,
    'Dx':'',
    'Rx':false,
    'SingleModal':false,
    'location':'None',
    'modalForm':false
}

export default function AllModals({
    UpdateModelSwitches,
    ModelSwitches,
    Update_Location,
    ThisPatient,
    ReloadPatient,
    CodeToEdit,
    CategToEdit,
    RxToEdit,
    setCodeToEdit,
    setCategToEdit,
    setRxToEdit,
    DrugNames,    
    single_text_field_name,
    single_modal_title,
    Update_Single_Text_Mod,
    WhichForm,
    FormTitle,
    UpdateMod,
    ModalFormPriorValues,
    setModalFormPriorValues
})
{
    return (
        <>
              <Patient_Location_Modals
                    Open={ModelSwitches}
                    UpdateModelSwitches={UpdateModelSwitches}
                    Update_Location={Update_Location}                
                    ThisPatient={ThisPatient}
                    ReloadPatient={ReloadPatient}
            />

            <CategDxRxModals
                ModelSwitches={ModelSwitches}
                UpdateModelSwitches={UpdateModelSwitches}
                ThisPatient={ThisPatient}
                ReloadPatient={ReloadPatient}
                CodeToEdit={CodeToEdit}      
                CategToEdit={CategToEdit}
                RxToEdit={RxToEdit}
                setCodeToEdit={setCodeToEdit}
                setCategToEdit={setCategToEdit}                  
                allMedications={DrugNames}
                setRxToEdit={setRxToEdit}
            />

           <Modal_Single_Text_Box
                    ModelSwitches={ModelSwitches}
                    onClose={()=>UpdateModelSwitches(false,'SingleModal')}
                    field_name={single_text_field_name}
                    title={single_modal_title}
                    this_patient={ThisPatient}
                    onUpdate = {Update_Single_Text_Mod}
                    ReloadPatient={ReloadPatient}
            />
   
            <Modal_Form
                open={ModelSwitches['modalForm']}
                onClose={()=>UpdateModelSwitches(false,'modalForm')}
                form={WhichForm}
                title={FormTitle}
                this_patient={ThisPatient}
                UpdateMod={UpdateMod}
                AllFields = {ALL_FIELDS}
                priorValues={ModalFormPriorValues}
                setpriorValues={setModalFormPriorValues}
                ReloadPatient = {ReloadPatient}
                />
        </> 
    )
}