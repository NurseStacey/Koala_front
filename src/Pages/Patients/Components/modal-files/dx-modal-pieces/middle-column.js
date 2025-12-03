import SelectedCodeBox from './dx-selected'
import DxDetails from './dx-details'
import DxCurrentPlan from './dx-currentplan'
//import PrescriptionsBox from './dx-prescriptions'
import PrescriptionsBox from '../prescriptions-box'

export default function MiddleColumn({
    SelectedCodeText,
    detail_text,
    set_detail_text,
    current_plan, 
    set_current_plan,
    ReloadPatient,
    RxOpen,
    setRxToEdit,
    AllPrescriptions
})
{

    return(
        <div
            style={{
                display:'block',
                width:'30%',
                height:'97%',
                marginLeft:'1%',
                marginRight:'1%',
                marginTop:'3%',
                //border:'1px solid black',
            }}
        >

            <div
                style={{
                    border:'1px solid black',
                    marginBottom:'3%',
                    height:'15%',

                }}>                       
                 <SelectedCodeBox
                    SelectedCodeText={SelectedCodeText}
                /> 
            </div>
            <div
                style={{                          
                    //border:'1px solid black',                           
                    height:'15%',
                    marginBottom:'3%',
                }}>
                <DxDetails
                    set_field_text={set_detail_text}
                    field_text={detail_text}
                /> 
            </div>
            <div
                style={{                          
                   // border:'1px solid black',                           
                    height:'15%',
                    marginBottom:'3%',
                }}>
                <DxCurrentPlan
                    set_field_text={set_current_plan}
                    field_text={current_plan}
                />
            </div>
            <div
                style={{
                    height:'40%',
                    //border:'1px solid black',     
                }}
            >
                <PrescriptionsBox
                    openRx={RxOpen}
                    Prescriptions={AllPrescriptions}
                    ReloadPatient={ReloadPatient}         
                    setRxCodes={null} 
                    setRxToEdit={setRxToEdit}        
                />
            </div>

        </div>
    )
}