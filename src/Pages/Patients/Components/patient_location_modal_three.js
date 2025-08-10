import React from 'react'
import {useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import My_Button from '../../../Components/My_Button'

export default function Patient_Location_Modal_Three({open, onClose,All_Beds,setBed, patient_id}){
    const [This_Bed, set_This_Bed]=useState({'name':'', 'id':-1})

    const Bed_Clicked = (the_bed) =>{
        console.log(the_bed)
        set_This_Bed(the_bed)
    }
    const Bed_Selected = () =>{

        let data_to_send = {bed:This_Bed.id}
        console.log(data_to_send)
        console.log(patient_id)
        try{
            AxiosInstance.patch(`patients/one_patient/${patient_id}`, data_to_send).then((res) =>{
                
            })
        } catch(error){console.log(error)}

        setBed(This_Bed.name)
        
        onClose()
     
    }

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

    if  (open!=='bed') return null
    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
            >
            <div
                style={{
                    position:'absolute',
                    top:0,
                    marginLeft:'50px',
                    marginRight:'50px',
                    display:'flex',
                    justifyContent:'left',
                    flexWrap:'wrap',
                    alignContent:'flex-start',
                    overflowY:'scroll',
                    height:'75%'
                }}
                >
                <div
                    style={{
                        width:'100%',
                        textAlign:'center',
                        font:'arial',
                        fontSize:'26px',
                        padding:'20px',
                    }}>
                    Select a Bed
                </div>
                {All_Beds.map((one_bed) => (
                        <div 
                            key={one_bed.name}
                            style={{
                                marginRight:'15px',
                                marginLeft:'15px',
                                marginTop:'8px'
                            }}>
                                            
                            <My_Button
                                The_Text={one_bed.name}
                                Width='90px'
                                Height='45px'
                                On_Click={() =>Bed_Clicked(one_bed)}
                                FontSize='18px'
                            />                        
                        </div>
                    ))}                
                </div>

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Close Modal'}
                                Width='90px'
                                Height='45px'
                                On_Click={onClose}
                                FontSize='18px'
                            /> 
                            <div
                                style={{
                                    marginLeft:'20px',
                                    marginRight:'20px',
                                    width:'50%',
                                    fontSize:'18px',
                                    textAlign:'center'
                                }}>
                                {(This_Bed.id > 0) ?
                                <div>
                                    Bed Selected: {This_Bed.name}
                                </div>
                                    :
                                <div>
                                    No Bed Select
                                </div>
                                }
                            </div>
                            <My_Button
                                The_Text={'Set Bed'}
                                Width='90px'
                                Height='45px'
                                On_Click={Bed_Selected}
                                FontSize='18px'
                            />                                                            
                </div>
           
                
            </div>
        </div>
    )
}