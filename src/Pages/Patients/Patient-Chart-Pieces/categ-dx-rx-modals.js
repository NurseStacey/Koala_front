import CategNewModel from '../Components/modal-files/categ-pieces/categ-modal'
import CategEditModal from '../Components/modal-files/categ-pieces/categ-edit-modal'
import DxModel from '../Components/modal-files/dx-modal-pieces/Dx-modal'
import RxModel from '../Components/modal-files/rx-modal-pieces/Rx-modal'

export default function CategDxRxModals({
    ModelCategOpenSwitch,
    ModelCategClose,
    ModelCategEditOpenSwitch,
    ModelCategEditClose,    
    ModelRxOpenSwitch,
    ModelRxOpen,
    ModelRxClose,    
    ModelDxOpenSwitch,
    ModelDxClose,
    ThisPatient, 
    ReloadPatient,
    CodeToEdit,
    RxToEdit,
    setCodeToEdit,
    CategToEdit,
    setDxToEdit,
    ModelDxOpen,
    allMedications,
    setRxToEdit
})
{
    return(
        <>
            <CategNewModel
                    openSwitch={ModelCategOpenSwitch}
                    onClose={ModelCategClose}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
            />

            <CategEditModal
                    openSwitch={ModelCategEditOpenSwitch}
                    RxOpen={ModelRxOpen}
                    onClose={ModelCategEditClose}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CategToEdit={CategToEdit}
                    setOpenDx={ModelDxOpen}
            />

            <DxModel
                    openSwitch={ModelDxOpenSwitch}
                    RxOpen={ModelRxOpen}
                    onClose={ModelDxClose}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CodeToEdit={CodeToEdit}
                    setCodeToEdit={setCodeToEdit}
                    CategToEdit={CategToEdit}
                    setDxToEdit={setDxToEdit}
            />

            <RxModel
                    openSwitch={ModelRxOpenSwitch}
                    onClose={ModelRxClose}
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