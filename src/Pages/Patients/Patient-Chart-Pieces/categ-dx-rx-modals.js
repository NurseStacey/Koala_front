import CategNewModel from '../Components/modal-files/new-modals/new-categ-modal'
import CategEditModal from '../Components/modal-files/new-modals/new-categ-edit-modal'
import DxNewModel from '../Components/modal-files/new-modals/new-Dx-modal'
import RxNewModel from '../Components/modal-files/new-modals/new-Rx-modal'

export default function CategDxRxModals({
    ModelCategOpenSwitch,
    ModelCategCloseFx,
    ModelCategEditOpenSwitch,
    ModelCategEditCloseFx,    
    ModelRxOpenSwitch,
    ModelRxCloseFx,    
    ModelDxOpenSwitch,
    ModelDxCloseFx,
    ThisPatient, 
    ReloadPatient,
    CodeToEdit,
    setCodeToEdit,
    CategToEdit,
    ModelDxNewOpenFx,
    allMedications
})
{
    return(
        <>
            <CategNewModel
                    openSwitch={ModelCategOpenSwitch}
                    onClose={ModelCategCloseFx}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
            />

            <CategEditModal
                    openSwitch={ModelCategEditOpenSwitch}
                    onClose={ModelCategEditCloseFx}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CategToEdit={CategToEdit}
                    setOpenDx={ModelDxNewOpenFx}
            />

            <DxNewModel
                    openSwitch={ModelDxOpenSwitch}
                    onClose={ModelDxCloseFx}
                    ReloadPatient={ReloadPatient}
                    ThisPatient={ThisPatient}
                    CodeToEdit={CodeToEdit}
                    setCodeToEdit={setCodeToEdit}
                    CategToEdit={CategToEdit}
            />

            <RxNewModel
                    openSwitch={ModelRxOpenSwitch}
                    onClose={ModelRxCloseFx}
                    ReloadPatient={ReloadPatient}
                    allMedications={allMedications}
            />
        </>            

        
    )
}