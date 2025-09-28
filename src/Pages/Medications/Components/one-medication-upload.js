import My_Button from '../../../Components/My-Button'


export default function OneMedicationUpload({
    one_order,
    match_medication,
    new_drug_match,
    DBdrug_search_match
}) {

    return (
        <>
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                width:'100%'
            }}
            >
            <div
                style={{
                    width:'30%',
                    paddingBottom:'5px',
                    border:'1px solid black'
                }}
                >
                <div
                    style={{
                        display:'block',
                        
                    }}
                >
                    <div
                        style={{
                            marginBottom:'5px',
                            wrap:'wrap',
                        }}
                        >
                            {one_order.the_order}
                    </div>
                    <div>Presumed Drug: {one_order.presumed_med_name}</div>
                </div>
            </div>
            <div
                style={{
                    width:'50%',
                    border:'1px solid black'
                }}>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'right'
                    }}>
                    <div
                        style={{
                            marginLeft:'20px',
                            display:'flex',
                            justifyContent:'center',
                            
                        }}
                        >
                            <My_Button
                                The_Text='Search for DB Drug and match to Order'
                                Width='90px'
                                Height='60px'                                    
                                FontSize='12px'
                                backgroundColor ='blue'
                                On_Click={()=>DBdrug_search_match(one_order.the_order)}
                            />
                            <My_Button
                                The_Text='Search for DB Drug and match to Drug'
                                Width='90px'
                                Height='60px'                                    
                                FontSize='12px'
                                backgroundColor ='blue'
                                On_Click={()=>DBdrug_search_match(one_order.presumed_med_name)}
                            />                                     
                            <My_Button
                                The_Text='Create New Drug and Match to Order'
                                Width='90px'
                                Height='60px'                                    
                                FontSize='12px'
                                On_Click={()=>new_drug_match(one_order.the_order)}
                            />
                            <My_Button
                                The_Text='Create New Drug and Match to Drug'
                                Width='90px'
                                Height='60px'                                    
                                FontSize='12px'
                                On_Click={()=>new_drug_match(one_order.presumed_med_name)}
                            />                                                         
                        </div>   
                    </div>                                     
                {one_order.medication_DBrecords.map((onemedrecord)=>
                <div
                    key={onemedrecord.id}
                    style={{
                        display:'flex',

                    }}>
                    <div
                        style={{
                            display:'block',
                            border:'1px red solid',
                            width:'80%',
                            backgroundColor:onemedrecord.backgroundColor
                        }}
                    >
                            <div
                                style={{
                                    marginLeft:'2px',
                                    
                                }}>
                                {onemedrecord.name}
                            </div>
                            <div
                                style={{
                                    marginLeft:'15px'
                                }}>
                                {onemedrecord.ingredients.map((one_ingredient)=>
                                    <div
                                        key={one_ingredient}>
                                        {one_ingredient}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div 
                            style={{
                                marginLeft:'10px',
                                display:'flex',
                                justifyContent:'center',
                                
                            }}
                            >
                            <My_Button
                                The_Text='Match To Order'
                                Width='90px'
                                Height='60px'
                                On_Click={()=>match_medication(one_order.the_order, one_order.order_id,onemedrecord.id, 'lightgreen')}
                                FontSize='12px'
                            />   
                            <My_Button
                                The_Text='Match To Drug'
                                Width='90px'
                                Height='60px'
                                On_Click={()=>match_medication(one_order.presumed_med_name, one_order.order_id,onemedrecord.id,'pink')}
                                FontSize='12px'
                            />                                               
                        </div> 

                </div>)}
            </div>
        </div>
        </>
    )}