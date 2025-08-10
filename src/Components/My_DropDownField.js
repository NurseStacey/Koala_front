

export default function My_DropDownField(props) {
    const{The_Label,value,name,set_value,FontSize, all_options}=props
    // console.log(all_options)
    // consol.log(value)
    return(
        <div
            style={{
                display:'flex',
                fontSize:FontSize,
                font:'arial',
                padding:'5px',

            }}>
            <label
                style={{
                    flex:1,
                    marginRight:'50px',
                    marginLeft:'50px',
                }}>{The_Label}</label>                
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
    )
}