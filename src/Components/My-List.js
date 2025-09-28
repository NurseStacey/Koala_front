
export default function My_List({
    The_Label,
    FontSize, 
    all_options,
    option_selected,
    totalHeight
})
{

    return (
        <div
            style={{
                height:totalHeight,
                display:'block',
                fontSize:FontSize,
                font:'arial',
                border:'1px solid black',                
            }}>
            <div
                style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                <label>
                        {The_Label}
                </label>
            </div>
            <div 
                style={{
                    display:'block',
                    border:'1px solid black',
                    marginTop:'23%',
                    marginLeft:'3px',
                    marginRight:'3px',
                    height:'80%',
                    overflowY: 'scroll'                          
                }}
                >
                {all_options.map((one_option)=>
                    <div
                        style={{
                            backgroundColor:one_option.backgroundColor,
                        }}
                        onClick={()=>option_selected(one_option.name)}
                        key={one_option.name}>
                        {one_option.name}
                    </div>
                    )}
            </div>
        </div>
    )
}