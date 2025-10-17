import {useState} from 'react'
import My_Button from '../../../../Components/My-Button'
import AxiosInstance from '../../../../utils/Axios'

export default function Modal_Single_Text_Box({open, onClose,field_name, title,this_patient, onUpdate}){

    const [field_text, set_field_text]=useState('')

    const test=()=>{}

    const Save = ()=>{
        
        let data_to_send = {}
        data_to_send[field_name]=field_text
        
        try{
            //console.log(this_patient)
            AxiosInstance.patch(`patients/one_patient/${this_patient.basic_data.id}`, data_to_send).then((res) =>{
            }

       )}catch(error){alert(error)}   
        onUpdate(field_name,field_text)   
        onClose()
    }

    if  (!open) return null
    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
                // style={MODAL_STYLE}
            >

         <div
                style={{
                    display:'block'
                }}
            >

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',                                      
                        width:'100%',                        
                        font:'arial',
                        fontSize:'26px',
                        padding:'20px', 

                    }}
                    >
                    <div>{title}</div>
                </div>


                <div
                    style={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                    }}>
                    <textarea 
                        onChange={(e)=>set_field_text(e.target.value)}
                        rows='11'
                        cols='60'
                        defaultValue={this_patient[field_name]}
                        style = {{
                            font:'arial',
                            fontSize:'20px',
                        }}>
                            
                        </textarea>
                    
                </div>
           
                 <div
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Cancel'}
                                Width='90px'
                                Height='45px'
                                On_Click={onClose}
                                FontSize='18px'
                            />
                            <My_Button
                                The_Text={'Save'}
                                Width='90px'
                                Height='45px'
                                On_Click={Save}
                                FontSize='18px'
                            />    
{/*                            <My_Button
                                The_Text={'Test'}
                                Width='90px'
                                Height='45px'
                                On_Click={test}
                                FontSize='18px'
                            />               */}                               
                                                         
                    </div> 
                </div> 
                
            
            </div>
        </div>
    )
}