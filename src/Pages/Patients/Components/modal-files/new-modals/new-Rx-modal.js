import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'
import Predictive_ListBox from '../../../../../../src/Components/predictive-listbox'

export default function RxNewModel({
    openSwitch, 
    onClose, 
    patientID,
    ReloadPatient,
    ProblemToEdit,
    allMedications
  }){

    if (!openSwitch) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div
                    style={{
                        height:'20%',
                        width:'15%',
                        paddingTop:'2%',
                        paddingLeft:'2%'
                    }}
                    >
                    <Predictive_ListBox
                        theList={allMedications}
                        />
                </div>
                <button
                    onClick={onClose}
                    >
                        Cancel
                    </button>
            </div>
        </div>
    )
}