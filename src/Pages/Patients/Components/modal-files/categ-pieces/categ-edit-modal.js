import ButtonsRow from './categ-edit-pieces/buttons'
import '../../../../../../src/CSS/general.css'
import './categ-edit-pieces/categ-edit.css'
import DetailBox from './categ-edit-pieces/details'
import CurrentPlanBox from './categ-edit-pieces/current-plan'
import TimeBetween from './categ-edit-pieces/time-between'
import MedProbDxCodes from './categ-edit-pieces/diagnosiscodes'
import  PrescriptionBox from '../prescriptions-box'
import {useState, useEffect} from 'react'
import AxiosInstance from '../../../../../utils/Axios'
import {DefaultCateg} from '../../import-patient'
import {DxListDivWithPlan} from '../../listbox-div-funcs'


export default function CategEditModal({
    openSwitch, 
    onClose, 
    ReloadPatient,
    ThisPatient,
    CategToEdit,
    setOpenDx,
    RxOpen,
    setRxToEdit,
    setCategToEdit
})
{
    const [TheDetails, setTheDetails]=useState('')
    const [CurrentPlan,setCurrentPlan]=useState('')
    const [FrequencyNumber, setFrequencyNumber]=useState('1')
    const [FrequencyOption, setFrequencyOption]=useState('Months')
    const [DxCodes, setDxCodes]=useState([])
    const [AllPrescriptions, setAllPrescriptions] = useState([])

    const setFrequencyOptionNoName=(name, value) =>{
        setFrequencyOption(value)
    }

    const updateRxLabels = () =>{
        let RxArray=[]
        
        CategToEdit['prescriptions'].map((oneRx)=>RxArray.push(ThisPatient['prescriptions'].find((thisRx)=>oneRx['id']==thisRx['id'])))
        setAllPrescriptions(RxArray)
    }
    
    const updateDxCodes = () =>{
        let DxArray = []
        CategToEdit.DxCodes.map((oneDxCode) =>{
            let newDx = {
                id:oneDxCode.id,
                name:DxListDivWithPlan(oneDxCode),
                current_plan:oneDxCode.current_plan,
                backgroundColor:'white',
            }
            DxArray.push(newDx)
        })
        setDxCodes(DxArray)
    }

    useEffect(()=>{
        if (CategToEdit.id !== -1) {        
            updateDxCodes()
            updateRxLabels()        
        }
    },[ThisPatient])

    useEffect(()=>{
        if (CategToEdit.id !== -1) {
            updateDxCodes()
            updateRxLabels()
            setTheDetails(CategToEdit['details'])
            setFrequencyOption(CategToEdit['frequencyoption'])
            setFrequencyNumber(CategToEdit['frequencynumber'])
            setCurrentPlan(CategToEdit['current_plan'])
        }
    },[CategToEdit])

    const test = () =>{
        console.log(CategToEdit.DxCodes)
    }

    const UpdateCateg = ()=>{
        try{
            let dataToSend={
                id:CategToEdit['id'],
                details:TheDetails,
                current_plan:CurrentPlan,
                frequencynumber:FrequencyNumber,
                frequencyoption:FrequencyOption
            }
            
            AxiosInstance.post(`patients/category_update/`, dataToSend).then((res) =>{
                ReloadPatient()
                CloseBox()
            })
        } catch(error){console.log(error)}           
    }
    
    const CloseBox =()=>{
        setFrequencyNumber(1)
        setFrequencyOption('Months')
        setTheDetails('')
        setCurrentPlan('')
        setCategToEdit(DefaultCateg())
        onClose()
    }

    if (!openSwitch) return null

    return(
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                
                <div className='TITLE_STYLE_30'>Edit {CategToEdit.categ_name}</div>
                <button onClick={test}>test</button>

                <div 
                        style={{
                            display:'flex',
                            justifyContent:'space-around',
                            marginRight:'20px',
                            marginLeft:'20px',
                            height:'80%'
                        }}
                    > 
                    <div
                        className='ONE_SIDE_STYLE'
                            style={{
                                width:'30%',

                            }}                        
                    >

                            <DetailBox
                                setTheDetails={setTheDetails}
                                TheDetails={TheDetails}
                            />
                            <PrescriptionBox
                                openRx={RxOpen}
                                Prescriptions={AllPrescriptions}
                                ReloadPatient={ReloadPatient}         
                                setRxToEdit={setRxToEdit}
                                whichBox={'Category'}         
                                parentID={CategToEdit['categ_id']}
                            />           
          
                        <TimeBetween
                            FrequencyNumber={FrequencyNumber}
                            setFrequencyNumber={setFrequencyNumber}
                            FrequencyOption={FrequencyOption}
                            setFrequencyOption={setFrequencyOptionNoName}
                        />                    
                    </div>
                    <div
                        className='ONE_SIDE_STYLE'
                            style={{
                                width:'70%',
                            }}                                 
                    >
                            <CurrentPlanBox
                                setCurrentPlan={setCurrentPlan}
                                CurrentPlan={CurrentPlan}
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
                    CanDelete={CategToEdit['can_delete']}
                    CategID={CategToEdit['categ_id']}
                    ReloadPatient={ReloadPatient}
                />
            </div>
        
        </div>
    )
}