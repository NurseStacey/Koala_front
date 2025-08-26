import My_Button from '../../../Components/My_Button'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'

export default function ModalDiagnosis({
    open, 
    onClose, 
    patientID,
    currentCodes,
    CodeToEdit,
    setCodeToEdit,
    ReloadPatient}){

    const [SubmitButtonText, setSubmitButtonText]=useState('Add Code')
    const [field_text, set_field_text]=useState('')

    const [whichCode, setWhichCode]=useState({id:0})
    const [TheseCodes, setTheseCodes]=useState([])
    const [CodeHistory, setCodeHistory]=useState([])
    const [SelectedCode, setSelectedCode]=useState(0)
    const [SelectedCodeText, setSelectedCodeText] = useState('')
    const [CodeToEditId, setCodeToEditId] = useState(0)

    const MODAL_STYLE  ={
        position: 'fixed',
        top:'10%',
        left: '10%',
        width:'90%',
        height:'90%',
        transform: 'translate(-5%,-5%)',
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

    const AddCode = ()=>{

        let continueThis=true

        if (CodeToEditId !== SelectedCode) {
            currentCodes.map((oneCode)=>{
                if (oneCode.dx_code_id == SelectedCode) {
                    alert('Code already in chart')
                    continueThis=false
                }
            })
        }

        if (!continueThis) return

        if (SelectedCode !== 0) {

            let dataToSend = {
                patient:patientID,
                dx_code:SelectedCode,
                details:field_text
            }
            
            if (CodeToEdit == 0) {
                try{
                    AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                        console.log(res)
                        // navigate('/One_Facility_Maintanance', {state:{nursing_home_name:Name}})
                    })
                } catch(error){console.log(error)}
            } else {
                try{
                    
                    AxiosInstance.patch(`patients/one_patient/diagnosis_code/${CodeToEdit}`, dataToSend).then((res) =>{
                        console.log(res)
                        // navigate('/One_Facility_Maintanance', {state:{nursing_home_name:Name}})
                    })
                } catch(error){console.log(error)}                
            }
        }
        ReloadPatient()
        CloseBox()
    }

    const CloseBox = ()=>{
        setWhichCode({id:0})
        setCodeHistory([])
        setSelectedCodeText('')
        setSubmitButtonText('Add Code')
        setCodeToEdit(0)
        onClose()
    }

    const RangeOrCodeSelected = (thisCode) =>{
        
        let newRecord = [...TheseCodes,...CodeHistory].find(oneCode => oneCode.id==thisCode)

        if (!newRecord.is_billable) {
            if (CodeHistory.includes(newRecord)) {
                setCodeHistory(CodeHistory.filter(oneCode =>(oneCode.id<=newRecord.id)))
            } else {
                setSelectedCode(newRecord.id)
                
                setCodeHistory([...CodeHistory, newRecord])
            }
            GetTheseCodes(thisCode)
            
            
        } else {
            setSelectedCode(newRecord.id)
            setSelectedCodeText(newRecord.description)
        }
    }

    const test = () =>{
        console.log(CodeToEdit)
    }
    const GetTheseCodes = (thisCode)=>{
        //console.log(thisCode)

        
        AxiosInstance.get(`medical/get_diagnosis_codes/${thisCode}`).then((res) =>{
            //console.log(res.data)
            setTheseCodes(res.data['these_codes'])
            })
    }
    useEffect(() => {
            
        GetTheseCodes(whichCode.id)
            
        },[whichCode])

    useEffect(() =>{
        if (CodeToEdit>0) {
            
            let thisRecord = currentCodes.find(oneCode => oneCode.id==CodeToEdit)
              
            setSelectedCode(thisRecord.dx_code_id)
            setSelectedCodeText(thisRecord.description)
            setCodeHistory(thisRecord.code_history)  
            set_field_text(thisRecord.details)
            GetTheseCodes(thisRecord.parent)
            setSubmitButtonText('Update Code')
            setCodeToEditId(thisRecord.dx_code_id)
        }             

    },[CodeToEdit])

    if  (!open) return null

    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
            >
                <div
                    style={{
                        display:'block',
                        width:'100%',
                        height:'100%'                        
                    }}
                    >
                    <div
                    style={{
                        display:'flex',
                        width:'100%',
                        height:'85%',
                        
                    }}
                    >

                        <div
                            style={{
                                marginTop:'3%',
                                marginLeft:'3%',
                                width:'40%',
                                height:'90%',
                                border:'1px solid black',
                                display:'block',
                                padding:'3px',
                            }}
                            >
                                {CodeHistory.map((oneCode) =>
                                <div
                                    key={oneCode.code}
                                    onClick={()=>RangeOrCodeSelected(oneCode.id)}
                                    style={{
                                        fontSize:'14px',
                                        font:'arial',
                                        marginLeft:`${(oneCode.steps*7).toString()}px`,
                                        paddingBottom:'2px',
                                        color:'red'
                                    }}
                                    >
                                        {oneCode.description}
                                    </div>
                                )}
                                {TheseCodes.map((oneCode)=>
                                <div
                                    key={oneCode.code}
                                    onClick={()=>RangeOrCodeSelected(oneCode.id)}
                                    style={{
                                        fontSize:'14px',
                                        font:'arial',
                                        marginLeft:`${(oneCode.steps*7).toString()}px`,
                                        paddingBottom:'2px',
                                        color:oneCode.color
                                    }}
                                    >
                                        {oneCode.description}
                                    </div>)}
                            </div>
                        <div
                            style={{
                                display:'block',
                                width:'30%',
                                marginLeft:'3%',    
                                marginTop:'3%',
                            }}
                        >
                            <div
                                style={{
                                    border:'1px solid black',
                                    marginBottom:'5%',
                                    height:'10%',
                                }}>
                                <div
                                    style={{
                                        textAlign:'center'
                                    }}>
                                        {(SelectedCodeText !== '') ?
                                        <>Selected Code: {SelectedCodeText}</> : <></>}
                                </div>                            
                            </div>                            
                            <div
                                style={{
                                    // marginTop:'3%',
                                    // marginLeft:'3%',                                
                                    border:'1px solid black',
                                    
                                    height:'30%',
                                }}>
                                <div
                                    style={{
                                        textAlign:'center'
                                    }}>
                                        Details
                                </div>
                                <div
                                    style={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}
                                    >
                                    <textarea 
                                        defaultValue={field_text}
                                        onChange={(e)=>set_field_text(e.target.value)}
                                        rows='7'
                                        cols='50'
                                        style = {{
                                            font:'arial',
                                            fontSize:'14px',
                                            marginTop:'2%'
                                        }}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            height:'10%',
                            width:'100%',
                            display:'flex',
                            
                            justifyContent:'space-around'
                        }}
                        >
                         <My_Button
                            The_Text={SubmitButtonText}
                            Width='90px'
                            Height='45px'
                            On_Click={AddCode}
                            FontSize='18px'
                        />           
                        {/* <button onClick={test}>test</button>                 */}
                         <My_Button
                            The_Text={'Cancel'}
                            Width='90px'
                            Height='45px'
                            On_Click={CloseBox}
                            FontSize='18px'
                        />   
                    </div>
                </div>             
            </div>
        </div>
    )
}