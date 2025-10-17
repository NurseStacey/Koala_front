import React from 'react'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import My_Button from '../../../Components/My-Button'
import My_TextField from '../../../Components/My-TextField'

export default function PatientFacilityID({open, onClose,patient}){

    const [TheID, set_TheID] = useState([])

    const test =()=>{
        console.log(open)
    }
    const setValue = (name, value)=> {
        set_TheID(value)
    }

    const setID = () =>{
        console.log(TheID)
        let data_to_send ={
            patient:patient['basic_data'].id,
            facility:patient['patient_location'].facilityID,
            facilityID:TheID
        }

        try{
            AxiosInstance.post(`patients/set_facility_patient_id/`, data_to_send).then((res) =>{
                console.log(res)
                onClose()
            })
        } catch(error){console.log(error)}        
    }


    if  (open!=='facilityID') return null


    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
            >
            <div
                style={{
                    position:'absolute',
                    top:0,
                    display:'block',
                    width:'100%',
                    height:'100%',
                    display:'block'
                }}
                >
                <div
                    style={{
                        font:'arial',
                        fontSize:'26px', 
                        padding:'20px',
                        width:'100%',
                        textAlign:'center',
                    }}>
                    Set the ID for {patient['patient_location'].facility}
                </div>
                <div                    
                    style={{
                        font:'arial',
                        fontSize:'26px', 
                        padding:'20px',
                        width:'30%',
                        marginRight:'auto',
                        marginLeft:'auto'
                    }}>
                        <My_TextField
                            The_Label='Facilities ID'
                            value={patient.PatientFacilityID}
                            set_value={setValue}
                            FontSize='20px'
                            name='patientfacilityID'
                        />
                </div>
                
                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        marginTop:'30px'
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
                            The_Text={'test'}
                            Width='90px'
                            Height='45px'
                            On_Click={test}
                            FontSize='18px'
                        />                                                      
                        <My_Button
                            The_Text={'Set ID'}
                            Width='90px'
                            Height='45px'
                            On_Click={setID}
                            FontSize='18px'
                        />                            
                    </div>
                </div>                
            </div>
        </div>
    )
}