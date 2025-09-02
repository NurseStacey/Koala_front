import My_Button from './My_Button';
import '../App.css'

export default function BoxOfLists({
    TheList,
    TheLabel,
    FormOpen,
    NewButtonText,
    Title,
    EditModal,
    form
    })
{

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    const LocalEditItem = (id)=>{
        //console.log(id)
       // console.log(form)
        EditModal(form, id)
    }
    
    return (
        <div
            style={{
                border:'1px solid black',
                width:'46%',
                margin:'1%',
                height:'200px',
                fontSize:'18px',
                marbLeft:'20px',
            }}>
            <div>
                
                <div style={TITLE_STYLE}>{Title}</div> 
                
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                    >
                    <div
                        style={{
                            display:'block',
                            width:'100%',
                            
                        }}>
                            <div
                                style={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}
                                >
                                <My_Button
                                    The_Text={NewButtonText}
                                    Width='90px'
                                    Height='45px'
                                    On_Click={FormOpen}
                                    FontSize='18px'
                                />
                            </div>

                        {TheList.map((one_item)=>
                        
                            <div
                                // onClick = {()=>editItem(one_item.id)}
                                style={{
                                    display:'flex'
                                }}
                                key={one_item.id}>
                                <My_Button
                                    The_Text='Edit'
                                    Width='10%'                                    
                                    On_Click={()=>LocalEditItem(one_item.id)}
                                    FontSize='14px'                                                                
                                    />
                                {TheLabel.map((one_field)=>
                                <div
                                    style={one_field.style}
                                    key={one_field.name}
                                    >
                                    {one_item[one_field.name]}  
                                </div>
                            )}
                            </div>
                        )}
                    </div>
                </div>                        
            </div>

        </div>
    )
}