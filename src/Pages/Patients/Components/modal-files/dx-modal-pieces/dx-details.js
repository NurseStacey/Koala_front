
export default function  DxDetails({
    set_field_text,
    field_text
})
{

    return(
        <div>
            <div
                style={{
                    textAlign:'center',
                    marginBottom:'10px'
                }}>
                    Details
            </div> 
            <div
                style={{
                    textAlign:'center',
                    marginRight:'20px',
                    marginLeft:'20px'
                }}
                >
                <textarea 
                    defaultValue={field_text}
                    onChange={(e)=>set_field_text(e.target.value)}
                    rows='7'
                    cols='50'
                    style = {{
                        font:'arial',
                        fontSize:'14px',
                        marginTop:'2%'
                    }}></textarea>
            </div>            
        </div>
    )
}