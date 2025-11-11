import SelectedCodeBox from './dx-selected'
import DxDetails from './dx-details'
//import PrescriptionsBox from './dx-prescriptions'
import PrescriptionsBox from '../prescriptions-box'

export default function MiddleColumn({
    SelectedCodeText,
    field_text,
    set_field_text,
    ReloadPatient,
    RxOpen
})
{

    return(
        <>

            <div
                style={{
                    border:'1px solid black',
                    marginBottom:'5%',
                    height:'20%',

                }}>                       
                 <SelectedCodeBox
                    SelectedCodeText={SelectedCodeText}
                /> 
            </div>
            <div
                style={{                          
                    // border:'1px solid black',                           
                    height:'30%',
                }}>
                <DxDetails
                    set_field_text={set_field_text}
                    field_text={field_text}
                /> 
            </div>
            <div
                style={{                          
                    // border:'1px solid black',                                 
                    height:'40%',
                }}>
                <PrescriptionsBox
                    openRx={RxOpen}
                    Prescriptions={[]}
                    ReloadPatient={ReloadPatient}         
                    setRxCodes={null}                    
                />
            </div>

        </>
    )
}