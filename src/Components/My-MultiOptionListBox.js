

export default function My_MultiOptionListBox({
    The_Label,
    FontSize, 
    all_options,
    selected_options,
    option_selected,
    totalHeight}) {
//    const{The_Label,value,name,set_value,FontSize, all_options,selected_options,option_selected}=props
    // console.log(all_options)
    // consol.log(value)
    return(
        <div
            style={{
                display:'block',
                fontSize:FontSize,
                font:'arial',
                border:'1px solid black',
                height:totalHeight
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
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginTop:'10px'
                }}>
                    <div
                        style={{
                            display:'block',
                            width:'100px',
                        }}>
                            <div
                                style={{
                                    height:'55px'
                                }}>
                                    All Options
                                </div>
                            
                            <div
                                style={{
                                    display:'block',
                                    border:'1px solid black',
                                    height:'150px',
                                    overflowY: 'scroll'                                    
                                }}>
                            {all_options.map((one_option)=>
                                <div
                                    onClick={()=>option_selected(one_option,'All')}
                                    key={one_option}>
                                    {one_option}
                                </div>
                                )}
                                </div>
                    </div>

                    <div
                        style={{
                            display:'block',
                            width:'100px',
                        }}>
                            <div
                                style={{
                                    height:'55px'
                                }}>
                                    Selected Options
                                </div>                            
                            
                            <div
                                style={{
                                    display:'block',
                                    border:'1px solid black',
                                    height:'150px',
                                    
                                    overflowY: 'scroll'                                    
                                }}>
                            {selected_options.map((one_option)=>
                                <div
                                    onClick={()=>option_selected(one_option,'NotAll')}
                                    key={one_option}>
                                    {one_option}
                                </div>
                                )}
                                </div>
                    </div>                    


            </div>
        </div>
    )
}