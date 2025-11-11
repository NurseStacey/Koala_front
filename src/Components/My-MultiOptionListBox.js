

export default function My_MultiOptionListBox({
    The_Label,
    FontSize, 
    all_options,
    selected_options,
    option_clicked,
    which
    }) {

    return(
        <div
             style={{
                display:'block',
                fontSize:FontSize,
                font:'arial',
                // border:'1px solid black',
                height:'100%'
            }}>
            <div
                style={{
                    display:'flex',
                    justifyContent:'center',
                    height:'10%'
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
                    marginTop:'2%',
                    height:'85%'
                }}>
                    <div
                        style={{
                            display:'block',
                            width:'45%',
                            height:'100%'
                        }}>

                            <div
                                style={{
                                    textAlign:'center',
                                    marginBottom:'2%'
                                }}>
                                All Options
                            </div>
                            
                            <div
                                style={{
                                    border:'1px solid black',
                                    height:'70%',
                                    overflowY: 'scroll'    
                                }}>
                            {all_options.map((one_option)=>
                                <div
                                    onClick={()=>option_clicked(one_option,'all')}
                                    key={(which=='') ?one_option :one_option[which]}
                                    
                                    >
                                    {(which=='') ? <>{one_option}</> : <>{one_option[which]}</>}
                                </div>
                                )} 
                                </div>
                            
                    </div>

                    <div
                        style={{
                            display:'block',
                            width:'45%',
                            height:'100%'
                        }}>

                        <div
                            style={{
                                textAlign:'center',
                                marginBottom:'2%'
                            }}>
                            Selected Options
                        </div>                            
                        
                        <div
                            style={{
                                display:'block',
                                border:'1px solid black',
                                height:'70%',
                                overflowY: 'scroll'                                    
                            }}>
                            {selected_options.map((one_option)=>
                                <div
                                    onClick={()=>option_clicked(one_option, 'selected')}
                                    key={(which=='') ?one_option :one_option[which]}
                                    
                                    >
                                    {(which=='') ? <>{one_option}</> : <>{one_option[which]}</>}
                                </div>
                                )}
                            </div>

                    </div>                    


            </div>
        </div>
    )
}