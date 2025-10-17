import ModalDiagnosis from '../Components/modal-files/dx-problem-files/modal-diagnosis'
import CategNewModel from '../Components/modal-files/dx-problem-files/med-prob-modal'
import CategEditBox from '../Components/modal-files/dx-problem-files/problem-edit-box'
import ModalNewDiagnosis from '../Components/modal-files/dx-problem-files/modal-new-diagnosis'

export default function DxCategRxModals({
    openSwitch,
    onClose,
    onOpen,
    ProblemToEdit,
    setProblemToEdit,
    patientID,
    currentCodes,
    CodeToEdit,
    setCodeToEdit,
    ReloadPatient,
    medproblems,    
    selected_problem
})
{
    return (
        <div>
            <ModalDiagnosis
                openSwitch={openSwitch}
                onClose={()=>onClose('DxOpen')}
                patientID = {patientID}
                currentCodes = {currentCodes}
                CodeToEdit={CodeToEdit}
                setCodeToEdit = {setCodeToEdit}
                ReloadPatient ={ReloadPatient}
                selected_problem={selected_problem}
                medproblems={medproblems}       
            />

            <ModalNewDiagnosis
            openSwitch={openSwitch}
                onClose={()=>onClose('DxOpen')}
                patientID = {patientID}
                currentCodes = {currentCodes}
                CodeToEdit={CodeToEdit}
                setCodeToEdit = {setCodeToEdit}
                ReloadPatient ={ReloadPatient}
                selected_problem={selected_problem}
                medproblems={medproblems}       
            />            
            <CategEditBox
                ProblemToEdit={ProblemToEdit}
                setProblemToEdit={setProblemToEdit}
                Close = {()=>onClose('CategEditOpen')}
                openDx={() => onOpen('CategEditOpen')}
                openSwitch={openSwitch}
            />

            <CategNewModel
                openSwitch={openSwitch}
                ProblemToEdit={ProblemToEdit}
                setProblemToEdit={setProblemToEdit}
                onClose={()=>onClose('CategNewOpen')}
                patientID = {patientID}        
                ReloadPatient ={ReloadPatient}    
            />
        </div>
    )
}