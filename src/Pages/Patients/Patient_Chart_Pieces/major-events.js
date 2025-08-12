
import My_Button from '../../../Components/My_Button'

export default function PatientMajorEvents({Form_Open,This_Patient})
{

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }


    if (This_Patient==undefined)  return null    

    return (

    <div
            style={{
                marginLeft:'10px',
                // border:'4px blue solid',
                // display:'flex',
                // flexDirection:'column',
                flexWrap:'wrap',
            }}>
            <div 
                style={{
                    border:'1px solid black',
                    height:'300px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                
                >
                <div style={TITLE_STYLE}>Major Events</div>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                    >
                    <My_Button
                        The_Text={'New Major Event'}
                        Width='90px'
                        Height='45px'
                        On_Click={()=>Form_Open('major_event', 'Add a Major Event')}
                        FontSize='18px'
                    />
                </div>       
            </div>

        </div>
    )
}