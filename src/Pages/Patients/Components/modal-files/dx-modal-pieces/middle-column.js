import SelectedCodeBox from './dx-selected'
import DxDetails from './dx-details'
import PrescriptionsBox from './dx-prescriptions'

export default function MiddleColumn({
    SelectedCodeText,
    field_text,
    set_field_text
})
{

    return(
        <div>
            <div
                style={{
                    display:'block',
                    width:'30%',
                    marginLeft:'3%',    
                    marginTop:'3%',
                    border:'1px solid black'
                }}
            >           
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
                                                    
                    height:'30%',
                }}>
                <DxDetails
                    set_field_text={set_field_text}
                    field_text={field_text}
                />
            </div>
            <div
                style={{                          
                    border:'1px solid black',                                 
                    height:'30%',
                }}>
                <PrescriptionsBox
                    PrescriptionsArray={[]}
                    
                />
            </div>
            </div> 
        </div>
    )
}