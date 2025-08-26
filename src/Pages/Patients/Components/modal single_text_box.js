import {useState} from 'react'
import My_Button from '../../../Components/My_Button'
import AxiosInstance from '../../../utils/Axios'

export default function Modal_Single_Text_Box({open, onClose,field_name, title,this_patient, onUpdate}){

    const [field_text, set_field_text]=useState('')

    const MODAL_STYLE ={
        position: 'fixed',
        top:'25%',
        left: '25%',
        width:'50%',
        height:'50%',
        trnasform: 'translate(-50%,-50%)',
        backgroundColor:'#FFF',
        zIndex:1000,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

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
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
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