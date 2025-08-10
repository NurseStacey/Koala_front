

export default function My_TextField(props) {
    const{The_Label,value,set_value,FontSize,Type,name}=props
    
    if (Type == "") {
        Type="text"
    }
    
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

            <input
                type={Type}
                style={{
                    flex:2,
                    fontSize:FontSize,
                    font:'arial',
                    marginRight:'50px',
                }}

                value={value}
                onChange={(e)=>set_value(name,e.target.value)}
            />
            
        </div>
    )
}