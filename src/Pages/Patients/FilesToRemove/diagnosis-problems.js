import DiagnosisListBox from '../Components/diagnosis-list-box'
import CategListBox from '../Components/problem-list-box'

export default function Dx_Categ_ListBoxesOLD({
    // openDx,
    // openMedProb,
    openDxCategRx,
    ThisPatient,
    setCodeToEdit,
    setProblemToEdit})
{

return (
    <div
        style={{
            height:'100%'
        }}>
        <DiagnosisListBox
            open={() => openDxCategRx('DxOpen')}
            opennew={()=>openDxCategRx('DxOpenNew')}
            TheList={ThisPatient['dx_codes']}
            setCodeToEdit = {setCodeToEdit}

        />
        <CategListBox
            openEdit={() => openDxCategRx('CategEditOpen')}  
            openNew={() => openDxCategRx('CategNewOpen')}          
            medproblems = {ThisPatient.medical_categories}
            setProblemToEdit={setProblemToEdit}
        />        
    </div>
)}