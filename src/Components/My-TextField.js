

export default function My_TextField(props) {
    const{The_Label,value,set_value,FontSize,Type,name}=props
    
    if (Type == "") {
        Type="text"
    }
    
    const internalSetValue = (value) =>
    {
        if (name=='') { set_value(value)} else {set_value(name,value)}

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
                    width:'40%'

                }}>{The_Label}</label>

            <input
                type={Type}
                style={{
                    flex:2,
                    fontSize:FontSize,
                    font:'arial',
                    width:'40%',
                    marginLeft:'10px'
                }}

                value={value}
                onChange={(e)=>internalSetValue(e.target.value)}
            />
            
        </div>
    )
}