
export default function  DxCurrentPlan({
    set_field_text,
    field_text
})
{

    return(
        <div
            style={{                          
                height:'100%',
                
                }}
            > 
            <div
                style={{
                    textAlign:'center',
                    // marginBottom:'10px'
                }}>
                    Current Plan
            </div> 
            <div
                style={{
                    textAlign:'center',
                }}
                >
                <textarea 
                    defaultValue={field_text}
                    onChange={(e)=>set_field_text(e.target.value)}
                    rows='4'
                    // cols='50'
                    style = {{
                        font:'arial',
                        fontSize:'13px',
                        marginTop:'2%',
                        width:'100%'
                    }}></textarea>
            </div>            
        </div>

    )
}