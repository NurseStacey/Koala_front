import My_Button from '../../../Components/My-Button'
import AxiosInstance from '../../../utils/Axios'
import {useState,useEffect} from 'react'
import DetailBox from '../Components/modal-files/dx-problem-files/problem-edit-pieces/details'
import TimeBetween from '../Components/modal-files/dx-problem-files/problem-edit-pieces/time-between'
import AppointmentBox from '../Components/modal-files/dx-problem-files/problem-edit-pieces/appointment'
import MedProbPrescriptions from '../Components/modal-files/dx-problem-files/problem-edit-pieces/prescriptions'
import MedProbDxCodes from '../Components/modal-files/dx-problem-files/problem-edit-pieces/diagnosiscodes'
import '../../../Components/Change-Background-Color-for-List'
import ChangeBackgroundColor from '../../../../../../src/CSS/modal.css'

export default function CategEditBoxOLD({
ProblemToEdit,
Close,
openSwitch
}) {


    const [FrequencyNumber, setFrequencyNumber]=useState('1')
    const [FrequencyOptions, setFrequencyOptions]=useState('Months')
    const [AppointmentDate, setAppointmentDate]=useState('')
    const [AppointmentDescription, setAppointmentDescription]=useState('')
    const [TheDetails, setTheDetails]=useState('')

    const [DxCodes, setDxCodes]=useState([])

    const ONE_SIDE_STYLE= {                                
                            padding:'5px',
                            marginTop:'15px',
                            // display:'block',
                            width:'45%',
                            alignItems:'center',
                            font:'arial',
                            fontSize:'18px',
                            border:'1px solid black',      
                          display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-around'                                               
                        }

    const test = () =>{
        console.log(ProblemToEdit)
        // let year = new Date().getFullYear()
        // console.log(year)
        // console.log(year + 1)
    }
    const Cancel = () =>{
        Close()
    }

    const UpdateProblem = () => {

    }


    useEffect(() => {
        console.log(ProblemToEdit)

        if (ProblemToEdit!==null && ProblemToEdit!==-1){
            let DxArray = []
            ProblemToEdit.DxCodes.map((oneDxCode) =>{
                let newDx = {
                    id:oneDxCode.id,
                    name:oneDxCode.code_description,
                    backgroundColor:'white',
                }
                DxArray.push(newDx)
            })
            setDxCodes(DxArray)
        }

    },[ProblemToEdit])    
    

    if (!openSwitch['CategEditOpen']) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
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
                            marginLeft:'20px',
                            height:'50%'
                        }}
                    > 
                    <div
                        style={ONE_SIDE_STYLE}
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
                    </div> 

                    <div
                        style={ONE_SIDE_STYLE}
                        > 

                            <MedProbPrescriptions
                            />
                            <MedProbDxCodes
                                openDx={openSwitch}
                                ProblemToEdit={ProblemToEdit}
                                DxCodes={DxCodes}
                                setDxCodes={setDxCodes}
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
                    <button onClick={test}>test</button>
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