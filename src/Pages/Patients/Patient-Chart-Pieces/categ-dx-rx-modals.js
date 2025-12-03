import CategNewModel from '../Components/modal-files/categ-pieces/categ-modal'
import CategEditModal from '../Components/modal-files/categ-pieces/categ-edit-modal'
import DxModel from '../Components/modal-files/dx-modal-pieces/Dx-modal'
import RxModel from '../Components/modal-files/rx-modal-pieces/Rx-modal'

export default function CategDxRxModals({
    ModelSwitches,
    UpdateModelSwitches,
    ThisPatient, 
    ReloadPatient,
    CodeToEdit,
    RxToEdit,
    setCodeToEdit,
    setCategToEdit,
    CategToEdit,
    allMedications,
    setRxToEdit
})
{
    return(
        <>
            <CategNewModel
                    openSwitch={ModelSwitches['Categ']}
                    onClose={()=>UpdateModelSwitches(false,'Categ')}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
            />

            <CategEditModal
                    openSwitch={ModelSwitches['CategEdit']}
                    RxOpen={()=>UpdateModelSwitches(true,'Rx')}
                    onClose={()=>UpdateModelSwitches(false,'CategEdit')}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CategToEdit={CategToEdit}
                    setOpenDx={()=>UpdateModelSwitches(true,'Dx')}
                    setRxToEdit={setRxToEdit}
                    setCodeToEdit={setCodeToEdit}
                    setCategToEdit={setCategToEdit}
            />

            <DxModel
                    openSwitch={ModelSwitches['Dx']}
                    RxOpen={()=>UpdateModelSwitches(true,'Rx')}
                    onClose={()=>UpdateModelSwitches(false,'Dx')}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CodeToEdit={CodeToEdit}
                    setCodeToEdit={setCodeToEdit}
                    CategToEdit={CategToEdit}
                    setRxToEdit={setRxToEdit}
            />

            <RxModel
                    openSwitch={ModelSwitches['Rx']}
                    onClose={()=>UpdateModelSwitches(false,'Rx')}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    fullMedicationList={allMedications}
                    DxToEdit={CodeToEdit}
                    CategToEdit={CategToEdit}
                    RxToEdit={RxToEdit}
                    setRxToEdit={setRxToEdit}
            />
        </>            
    )
}