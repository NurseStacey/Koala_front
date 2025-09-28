import My_Button from '../../../Components/My-Button'

export default function DiagnosisListBox({
    open,
    TheList,
    setCodeToEdit})
{

    const LocalEditItem = (thisCode)=>{
        setCodeToEdit(thisCode)
        open(true)
    }

    const test_this =()=>{
        console.log(TheList)

    }

    const TITLE_STYLE = {
        fontSize:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }
return (
    <div>
        
        <div
            style={{
                border:'1px solid black',
                height:'300px',
                fontSize:'18px',
                marbLeft:'20px',
            }}>
            <div style={TITLE_STYLE}>Diagnosis Codes</div> 
                <div
                    style={{
                        display:'block',
                        width:'100%',
                    }}
                    >
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                        >
                            <My_Button
                                The_Text='New Diagnosis Code'
                                Width='150px'
                                Height='45px'
                                On_Click={()=>open(true)}
                                FontSize='18px'
                            />
                    </div>

                        {TheList.map((one_item)=>
                        
                            <div
                                
                                style={{
                                    display:'flex'
                                }}
                                key={one_item.dx_code_id}>
                                <My_Button
                                    The_Text='Edit'
                                    Width='10%'                                    
                                    On_Click={()=>LocalEditItem(one_item.id)}
                                    FontSize='14px'                                                                
                                    />
                                    <div
                                        style={{
                                            marginLeft:'3px',
                                        }}
                                        >
                                        {one_item.description}  
                                    </div>
                            </div>
                        )}

            </div>            
        </div>
    </div>
)}