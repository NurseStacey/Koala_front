import My_Button from '../../../Components/My-Button'
import '../../../../src/CSS/general.css'

export default function DiagnosisListBox({
    open,
    opennew,
    TheList,
    setCodeToEdit})
{

    const LocalEditItem = (thisCode)=>{
        setCodeToEdit(thisCode)
        open()
    }

    const LocalOpen = () => {
        setCodeToEdit(-1)
        open()

    }
    const test_this =()=>{
        console.log(TheList)

    }


return (

        
        <div
            className='DIAG_PRES_MED_BLOCK_STYLE'
            >
            <div className='TITLE_STYLE'>Diagnosis Codes</div> 
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
                                On_Click={LocalOpen}
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

)}