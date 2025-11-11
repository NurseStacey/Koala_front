

export default function My_DropDownField({
    The_Label,
    value,
    name,
    set_value,
    FontSize, 
    all_options}) 
{

    return(
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                fontSize:FontSize,
                font:'arial',
                padding:'5px',

            }}>
            <div>{The_Label}</div>
            {/* <label
                style={{
                    flex:1,
                    marginRight:'50px',
                    marginLeft:'50px',
                }}>{The_Label}</label>                 */}
            <div>
                <select
                    onChange={(e)=>set_value(name,e.target.value)}
                    value={value}
                    style={{
                        flex:2,
                        fontSize:FontSize,
                        font:'arial',
                        marginRight:'50px',
                    }}                
                    >
            
                    
                    {all_options.map((one_option) =>

                        <option 
                            value={one_option}
                            key={one_option}

                        >
                            {one_option}
                        </option>
                        
                    )}
                </select>
            </div>
        </div>
    )
}