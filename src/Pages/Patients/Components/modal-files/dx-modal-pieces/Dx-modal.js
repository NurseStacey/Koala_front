import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'
import DxBox from './dx-box'
import My_MultiOptionListBox from '../../../../../../src/Components/My-MultiOptionListBox'
import AxiosInstance from '../../../../../utils/Axios'
import {useState, useEffect} from 'react'
import MiddleColumn from './middle-column'


import ButtonsRow from './button'

export default function DxModel({
    openSwitch, 
    onClose, 
    ThisPatient,
    ReloadPatient,
    CodeToEdit,
    setCodeToEdit,
    CategToEdit,     
    RxOpen,
  }){

    const [selectedCateg, setselectedCateg]=useState([])
    const [allCateg, setallCateg] = useState([])
    const [selectedDx, setselectedDx]=useState([])

    const [local_medCategs, setlocal_medCategs]=useState([])
    //const [medCategsAddTo, setmedCategsAddTo]= useState([])    
    const [currentDxCodes, setcurrentDxCodes]=useState([])
    const [SelectedCode, setSelectedCode]=useState(0)
    const [SelectedCodeText, setSelectedCodeText] = useState('')    
    const [CodeHistory, setCodeHistory]=useState([])
    const [TheseCodes, setTheseCodes]=useState([])
    const [searchableCode,setsearchableCode]=useState('')
    const [whichCode, setWhichCode]=useState({id:0})
    const [detail_text, set_detail_text]=useState('')    
    const [currentCodes, setcurrentCodes]=useState([])

    const CategClicked = (Categ, which) =>{

        if (which=='all') {
            if (selectedCateg.find((oneCateg)=>oneCateg.problem_id==Categ.problem_id)===undefined)
                setselectedCateg([...selectedCateg, Categ])
        } else 
                setselectedCateg(selectedCateg.filter((oneCateg)=>oneCateg.problem_id!==Categ.problem_id))

    }

    const DxClicked = (DxCode, which) =>{

        if (which=='all') {
            if (selectedDx.find((oneDx)=>oneDx.dx_code_id==DxCode.dx_code_id)===undefined)
                setselectedDx([...selectedDx, DxCode])
        } else 
                setselectedDx(selectedDx.filter((oneDx)=>oneDx.dx_code_id!==DxCode.dx_code_id))  
 
    }    

    const test=()=>{
        console.log(selectedCateg)
    }

    const Reset =() =>{
        setWhichCode({id:0})
        setCodeHistory([])
    }

    const CodeSearch = () => {
        AxiosInstance.get(`medical/code_search/${searchableCode}`).then((res) =>{
            //console.log(res.data['code_history'])
            if (res.data['Error']=='Code Not Found') {
                alert('Code entered not valied')
            } else {
                    setCodeHistory([res.data['code_history']])
                    setTheseCodes(res.data['these_codes'])
                }
            })        
    }


    const handleChange_searchableCode=(event)=>{
        setsearchableCode(event.target.value)
    }

    const RangeOrCodeSelected = (thisCode) =>{
        //console.log(CodeHistory)
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
            if (currentDxCodes.includes(newRecord.id)) alert('Code already in chart')
                else{

                setSelectedCode(newRecord.id)
                setSelectedCodeText(newRecord.description)
                setCodeToEdit(newRecord)
                }
        }        
    }

    const GetTheseCodes = (thisCode)=>{
        
        AxiosInstance.get(`medical/get_diagnosis_codes/${thisCode}`).then((res) =>{
            setTheseCodes(res.data['these_codes'])
            })
    }

    const Test = ()=>{
       // console.log(medCategsAddTo)
    }

    useEffect(()=>{
 
        let newCategArray=[]
        ThisPatient['medical_problems'].map((oneCateg)=>newCategArray.push(oneCateg))
        setallCateg(newCategArray)

        let tempArray=[]
        ThisPatient['dx_codes'].map((one_code)=>tempArray.push(one_code.dx_code_id))
        setcurrentDxCodes(tempArray)

    },[ThisPatient])

    useEffect(() => {
            
        GetTheseCodes(whichCode.id)
            
        },[whichCode])

    useEffect(()=>{
        //alert('here')
        if (CategToEdit!==null)
            setselectedCateg([CategToEdit])

    },[CategToEdit])

    useEffect(()=>{
        if (CodeToEdit !== null){
            set_detail_text(CodeToEdit.details)
        }
    },[CodeToEdit])

    const AddDxToPatient = () => {
        
        let continueThis=true

        if (CodeToEdit!==null)
            if (CodeToEdit.id !== SelectedCode) {
                currentCodes.map((oneCode)=>{
                    if (oneCode.dx_code_id == SelectedCode) {
                        alert('Code already in chart')
                        continueThis=false
                    }
                })
            }

        if (!continueThis) return

        let dataToSend = {
            patient:ThisPatient['basic_data'].id,            
            dx_code:SelectedCode,
            details:detail_text,
            medProb:selectedCateg
        }        
        if (CodeToEdit == null) 
            try{
                AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                    ReloadPatient()
                })
            } catch(error){console.log(error)} 
            else                 
                try{
                    dataToSend['id']=CodeToEdit.id
                    AxiosInstance.patch(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                        console.log(res)
                        ReloadPatient()
                    })
                } catch(error){console.log(error)}

        ReloadPatient()
        CloseBox()
    }

    const CloseBox = () =>{
        //setmedCategsAddTo([])
        set_detail_text('')
        setCodeToEdit(null)
        //Createlocal_medCategs()
        setselectedCateg([])
        Reset()
        onClose()
    }

    if (openSwitch == '') return null

    let thisTitle = 'New Diagnosis'
    let submitButtonText = 'Add Diagnosis'
    if (openSwitch=='edit') {
        thisTitle='Edit ' + CodeToEdit.description
        submitButtonText='Update Diagnosis'

    }
    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div className='TITLE_STYLE_30'>{thisTitle}</div> 

                    <div
                        style={{
                            display:'flex',
                            width:'100%',
                            height:'80%',  
                            border:'1px solid black',                          
                        }}
                    >
                        <DxBox
                            CodeHistory={CodeHistory}
                            TheseCodes={TheseCodes}
                            RangeOrCodeSelected={RangeOrCodeSelected}
                            Reset={Reset}
                            handleChange_searchableCode={handleChange_searchableCode}
                            searchableCode={searchableCode}
                            CodeSearch={CodeSearch}
                        />
                        <div
                            style={{
                                display:'block',
                                width:'25%',
                                height:'97%',
                                marginLeft:'3%',   
                                marginRight:'3%',    
                                marginTop:'3%',
                                // border:'1px solid black',
                            }}
                        >
                            <MiddleColumn
                                SelectedCodeText={SelectedCodeText}
                                field_text={detail_text}
                                set_field_text={set_detail_text}
                                ReloadPatient={ReloadPatient}
                                RxOpen={RxOpen}
                            /> 
                    
                        </div>
                        <div
                            style={{
                                display:'block',
                                width:'20%',
                                height:'100%',
                                marginLeft:'3%',                                    
                                marginTop:'3%',
                                // border:'1px solid black',
                            }}
                        >
                            <My_MultiOptionListBox
                                The_Label='Medical Categories'
                                FontSize='18px'
                                all_options={allCateg}
                                selected_options={selectedCateg}
                                option_clicked={CategClicked}
                                which='problem_name'
                            />   
                        </div>

                    </div>

                <ButtonsRow
                    AddDxToPatient={AddDxToPatient}
                    CloseBox={CloseBox}
                    SubmitButtonText={submitButtonText}
                    test={test}
                />
            </div>
        </div>
    )
}