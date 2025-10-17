import ButtonsRow from './new-categ-edit-pieces/buttons'
import '../../../../../../src/CSS/general.css'
import './new-categ-edit-pieces/new-categ-edit.css'
import DetailBox from '../dx-problem-files/problem-edit-pieces/details'
import TimeBetween from '../dx-problem-files/problem-edit-pieces/time-between'
import MedProbPrescriptions from '../dx-problem-files/problem-edit-pieces/prescriptions'
import MedProbDxCodes from '../dx-problem-files/problem-edit-pieces/diagnosiscodes'

import {useState, useEffect} from 'react'

export default function CategEditModal({
    openSwitch, 
    onClose, 
    ReloadPatient,
    ThisPatient,
    CategToEdit,
    setOpenDx
})
{
    const [TheDetails, setTheDetails]=useState('')
    const [FrequencyNumber, setFrequencyNumber]=useState('1')
    const [FrequencyOptions, setFrequencyOptions]=useState('Months')
    const [DxCodes, setDxCodes]=useState([])

    useEffect(()=>{
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
                        className='ONE_SIDE_STYLE'
                    >
                        <MedProbPrescriptions
                        />
                        <MedProbDxCodes
                            openDx={setOpenDx}
                            ProblemToEdit={CategToEdit}
                            DxCodes={DxCodes}
                            setDxCodes={setDxCodes}
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