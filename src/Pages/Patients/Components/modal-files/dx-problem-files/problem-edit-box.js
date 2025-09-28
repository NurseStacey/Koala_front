import My_TextField from '../../../../../Components/My-TextField'
import My_Button from '../../../../../Components/My-Button'

import AxiosInstance from '../../../../../utils/Axios'
import {useState,useEffect} from 'react'

import DetailBox from './problem-edit-pieces/details'
import TimeBetween from './problem-edit-pieces/time-between'
import AppointmentBox from './problem-edit-pieces/appointment'
import MedProbPrescriptions from './problem-edit-pieces/prescriptions'
import MedProbDxCodes from './problem-edit-pieces/diagnosiscodes'

import MyListBox from '../../../../../Components/My-Listbox'


export default function MedProblemEditBox({
ProblemToEdit,
Close,
openDx
}) {


    const [FrequencyNumber, setFrequencyNumber]=useState('1')
    const [FrequencyOptions, setFrequencyOptions]=useState('Months')
    const [AppointmentDate, setAppointmentDate]=useState('')
    const [AppointmentDescription, setAppointmentDescription]=useState('')
    const [TheDetails, setTheDetails]=useState('')

    const MODAL_STYLE ={
        position: 'fixed',
        top:'20%',
        left: '10%',
        width:'80%',
        height:'70%',
        trnasform: 'translate(-50%,-50%)',
        backgroundColor:'#FFF',
        zIndex:100,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:100
    }


    const [ThisProblem, setThisProblem]=useState({})
    
    const test = () =>{
        let year = new Date().getFullYear()
        console.log(year)
        console.log(year + 1)
    }
    const Cancel = () =>{
        Close()
    }

    const UpdateProblem = () => {

    }

    useEffect(() => {
        
        if (ProblemToEdit !== null){
                AxiosInstance.get(`patients/problem_details/${ProblemToEdit.problem_id}`).then((res) =>{
                setThisProblem(res.data)
                console.log(ProblemToEdit)
            
            })
        }
    },[ProblemToEdit])    
    
    if (ProblemToEdit == null) return null

    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
            >
                <div
                    style={{
                        font:'arial',
                        fontSize:'26px',
                        textAlign:'center',
                        marginBottom:'5px',
                        marginTop:'10px'
                    }}
                    >
                        Edit {ProblemToEdit.problem_name}
                </div> 
                 
                <div 
                        style={{
                            display:'flex',
                            justifyContent:'space-around',
                            marginRight:'20px',
                            marginLeft:'20px'
                        }}
                    > 
                    <div
                        style={{                                
                            padding:'5px',
                            marginTop:'15px',
                            display:'block',
                            width:'45%',
                            alignItems:'center',
                            font:'arial',
                            fontSize:'18px',
                            border:'1px solid black',                                   
                        }}
                        > 
                        <DetailBox
                            setTheDetails={setTheDetails}
                            TheDetails={TheDetails}
                        />
                        <TimeBetween
                            FrequencyNumber={FrequencyNumber}
                            setFrequencyNumber={setFrequencyNumber}
                            FrequencyOptions={FrequencyOptions}
                            setFrequencyOptions={FrequencyOptions}
                        />
                        
{/* 
                        <AppointmentBox
                            AppointmentDate={AppointmentDate}
                            setAppointmentDate={setAppointmentDate}
                            AppointmentDescription = {AppointmentDescription}
                            setAppointmentDescription = {setAppointmentDescription}
                            
                        /> */}
                    
                    </div> 

                    <div
                        style={{                                
                            padding:'5px',
                            marginTop:'15px',
                            display:'block',
                            width:'45%',
                            alignItems:'center',
                            font:'arial',
                            fontSize:'18px',
                            border:'1px solid black',                                   
                        }}
                        > 

                        <MedProbPrescriptions

                        />
                        <MedProbDxCodes
                            openDx={openDx}
                            ProblemToEdit={ProblemToEdit}
                        />
                    </div>  
                </div>
                <div
                    style={{
                        border:'1px solid black',
                        marginTop:'20px',
                        marginRight:'40px',
                        marginLeft:'40px',
                        height:'100px'                
                    }}>

                </div>
                <div
                    style={{
                        border:'1px solid black',
                        padding:'10px',
                        display:'flex',
                        justifyContent:'space-evenly'
                    }}>

                    <My_Button
                        The_Text={'Cancel'}
                        Width='90px'
                        Height='45px'
                        On_Click={Cancel}
                        FontSize='18px'
                    />

                    <My_Button
                        The_Text={'Update'}
                        Width='90px'
                        Height='45px'
                        On_Click={UpdateProblem}
                        FontSize='18px'
                    />
                    
                </div>
            </div>        
        </div>
    
     
    )
}