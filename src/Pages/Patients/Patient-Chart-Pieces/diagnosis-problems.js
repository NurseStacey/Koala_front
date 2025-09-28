import DiagnosisListBox from '../Components/diagnosis-list-box'
import ProblemListBox from '../Components/problem-list-box'

export default function DiagnosisProblems({
    openDx,
    openMedProb,
    ThisPatient,
    setCodeToEdit,
    setProblemToEdit})
{

return (
    <div>
        <DiagnosisListBox
            open={() => openDx('')}
            TheList={ThisPatient['dx_codes']}
            setCodeToEdit = {setCodeToEdit}

        />
        <ProblemListBox

            open={openMedProb}          
            medproblems = {ThisPatient.medical_problems}
            setProblemToEdit={setProblemToEdit}
        />        
    </div>
)}