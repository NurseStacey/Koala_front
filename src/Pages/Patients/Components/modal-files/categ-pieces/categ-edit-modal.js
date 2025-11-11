import ButtonsRow from './categ-edit-pieces/buttons'
import '../../../../../../src/CSS/general.css'
import './categ-edit-pieces/categ-edit.css'
import DetailBox from './categ-edit-pieces/details'
import TimeBetween from './categ-edit-pieces/time-between'
import MedProbPrescriptions from './categ-edit-pieces/prescriptions'
import MedProbDxCodes from './categ-edit-pieces/diagnosiscodes'
import  PrescriptionBox from '../prescriptions-box'
import {useState, useEffect} from 'react'

export default function CategEditModal({
    openSwitch, 
    onClose, 
    ReloadPatient,
    ThisPatient,
    CategToEdit,
    setOpenDx,
    RxOpen
})
{
    const [TheDetails, setTheDetails]=useState('')
    const [FrequencyNumber, setFrequencyNumber]=useState('1')
    const [FrequencyOptions, setFrequencyOptions]=useState('Months')
    const [DxCodes, setDxCodes]=useState([])
    const [AllPrescriptions, setAllPrescriptions] = useState([])

    const updateRxLabels = () =>{
        let RxArray=[]
        if (CategToEdit !== null){
            CategToEdit.prescriptions.map((oneRx)=>{
                let newRx = {
                    id:oneRx.id,
                    name:oneRx['prescription'],
                    backgroundColor:'white',
                }                
                RxArray.push(newRx)
            })
        }
        setAllPrescriptions(RxArray)
    }
    const updateDxCodes = () =>{

        let DxArray = []
        if (CategToEdit !== null){

            CategToEdit.DxCodes.map((oneDxCode) =>{
                let newDx = {
                    id:oneDxCode.id,
                    name:oneDxCode.code_description,
                    backgroundColor:'white',
                }
                DxArray.push(newDx)
            })

            setDxCodes(DxArray)
        }
    }

    useEffect(()=>{
        updateDxCodes()
        updateRxLabels()
    },[ThisPatient])

    useEffect(()=>{
        updateDxCodes()
        updateRxLabels()
    },[CategToEdit])

    const test = () =>{
        console.log(CategToEdit)
    }
    const UpdateCateg = ()=>{

        ReloadPatient()
        onClose()
    }
    const CloseBox =()=>{
        onClose()
    }

    if (!openSwitch) return null

    return(
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                
                <div className='TITLE_STYLE_30'>Edit {CategToEdit.problem_name}</div>
                <button onClick={test}>test</button>

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
                        className='ONE_SIDE_STYLE'
                    >
                        <div
                            style={{
                                width:'100%',
                                height:'50%',
                                
                            }}>
                            <DetailBox
                                setTheDetails={setTheDetails}
                                TheDetails={TheDetails}
                            />
                        </div>
                        <TimeBetween
                            FrequencyNumber={FrequencyNumber}
                            setFrequencyNumber={setFrequencyNumber}
                            FrequencyOptions={FrequencyOptions}
                            setFrequencyOptions={FrequencyOptions}
                        />                    
                    </div>


                    <div
                        className='ONE_SIDE_STYLE'
                    >
                        <PrescriptionBox
                            openRx={RxOpen}
                            Prescriptions={AllPrescriptions}
                            ReloadPatient={ReloadPatient}         
                            setPrescriptions={setAllPrescriptions}                                
                        />

                        <MedProbDxCodes
                            openDx={setOpenDx}
                            CategToEdit={CategToEdit}
                            DxCodes={DxCodes}
                            setDxCodes={setDxCodes}
                            ReloadPatient={ReloadPatient}
                        />                 
                    </div>
                </div>

                <ButtonsRow
                    UpdateCateg={UpdateCateg}
                    CloseBox={CloseBox}
                />
            </div>
        
        </div>
    )
}