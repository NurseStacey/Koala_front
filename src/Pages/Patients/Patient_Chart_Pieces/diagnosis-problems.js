import DiagnosisListBox from '../Components/diagnosis-list-box'
import ProblemListBox from '../Components/problem-list-box'

export default function DiagnosisProblems({open,ThisPatient,setCodeToEdit})
{

return (
    <div>
        <DiagnosisListBox
            open={open}
            TheList={ThisPatient['dx_codes']}
            setCodeToEdit = {setCodeToEdit}
        />
        <ProblemListBox
            open={open}          

        />        
    </div>
)}