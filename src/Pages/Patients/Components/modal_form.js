import {useState,useEffect} from 'react'
import My_Button from '../../../Components/My_Button'
import {SURGICAL_HISTORY_FIELDS} from '../form-fields/surgical-history-fields'
import {MAJOR_EVENTS_FIELDS} from '../form-fields/major-events-fields'
import One_Form from '../../../Components/One_Form'
import AxiosInstance from '../../../utils/Axios'


export default function Modal_Form({open, onClose,form, title,this_patient, onUpdate}){

    const [TheData, setTheData]= useState('')
    const [FormTitle, setFormTitle]=useState('')
    const [field_text, set_field_text]=useState('')

    const MODAL_STYLE ={
        position: 'fixed',
        top:'10%',
        left: '25%',
        width:'50%',
        height:'80%',
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

    const addRecord = () =>{

    }
    const set_value= (name, value)=>{
       
        // let this_element = The_Data.find(one_element=>one_element.name == name)
        // this_element.value=value
        // let data = The_Data.filter(one_element=>one_element.name !== name)
        // data.push(this_element)

        // set_The_Data([...data].sort((a,b)=>a.order-b.order))
    }

    const test=()=>{
        console.log(form)
        
    }

    const Save = ()=>{
    //     // let data_to_send = {}
    //     // data_to_send[field_name]=field_text
        
    //     // try{
    //     //     AxiosInstance.patch(`patients/one_patient/${this_patient.id}`, data_to_send).then((res) =>{
    //     //     }

    //    )}catch(error){alert(error)}   
        //onUpdate(field_name,field_text)   
        onClose()
    }

    useEffect(() => {

        console.log(form)
        let data=[]

        if (form == 'major_event') {

            MAJOR_EVENTS_FIELDS.map(oneField =>{

                data.push({...oneField,
                    'value':''
                })
            })
        } else {

            SURGICAL_HISTORY_FIELDS.map(oneField =>{

                data.push({...oneField,
                    'value':''
                })
            })
        }

        setFormTitle('New Surgery')
        setTheData(data)

    },[form])
    if  (!open) return null

    console.log(TheData)


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
                <div>
                    <One_Form
                        The_Fields={TheData}
                        set_value={set_value}
                        Button_Text={FormTitle}
                        Submit_Button={addRecord}
                        showButton={false}
                    />
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
                            <My_Button
                                The_Text={'Test'}
                                Width='90px'
                                Height='45px'
                                On_Click={test}
                                FontSize='18px'
                            />                                             
                                                         
                    </div> 
                </div> 
                
            
            </div>
        </div>
    )
}