import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'
import DxBox from './dx-box'
import {DefaultDxCode} from '../../import-patient'

import {useState, useEffect} from 'react'
import MiddleColumn from './middle-column'
import LeftColumn from './left-column'

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
    setRxToEdit
  }){

    const [selectedCateg, setselectedCateg]=useState([])
    const [allCateg, setallCateg] = useState([])
    const [Closing,setClosing]=useState(false)
    const [currentDxCodes, setcurrentDxCodes]=useState([])
    const [SelectedCode, setSelectedCode]=useState(0)
    const [SelectedCodeText, setSelectedCodeText] = useState('')
    const [AllPrescriptions, setAllPrescriptions] = useState([])
    const [detail_text, set_detail_text]=useState('')
    const [current_plan, set_current_plan]=useState('')

    const test=()=>{
        console.log(CategToEdit)
    }

    const updateRxLabels = () =>{
        let RxArray=[]
        CodeToEdit['prescriptions'].map((oneRx)=>RxArray.push(ThisPatient['prescriptions'].find((thisRx)=>oneRx['id']==thisRx['id'])))
        setAllPrescriptions(RxArray)          
    }

    useEffect(()=>{

        let newCategArray=[]
        ThisPatient['medical_categories'].map((oneCateg)=>newCategArray.push(oneCateg))
        setallCateg(newCategArray)

        let tempArray=[]
        ThisPatient['dx_codes'].map((one_code)=>tempArray.push(one_code.dx_code_id))
        setcurrentDxCodes(tempArray)

    },[ThisPatient])


    useEffect(()=>{
        //alert('here')
        if (CodeToEdit.id == -1)
            setselectedCateg([CategToEdit])

    },[CategToEdit])

    useEffect(()=>{

        if (CodeToEdit.id !== -1){
            setSelectedCode(CodeToEdit['dx_code_id'])
            set_detail_text(CodeToEdit.details)
            setSelectedCodeText(CodeToEdit.description)
            set_current_plan(CodeToEdit.current_plan)
            updateRxLabels()

            let thisArray=[]
            allCateg.map((oneCateg)=>{
                try {
                    if (oneCateg.DxCodes.some((oneCode)=>oneCode.code==CodeToEdit.dx_code)) thisArray.push(oneCateg)
                } catch { }
            })
            setselectedCateg(thisArray)
        }
    },[CodeToEdit])

    const GetDataToSend = () => {

        return ({
            patient:ThisPatient['basic_data'].id,
            dx_code:SelectedCode,
            details:detail_text,
            current_plan:current_plan,
            Categ:selectedCateg 
        })
    }

    const CloseBox = () =>{
        set_detail_text('')
        setCodeToEdit(DefaultDxCode())
        setselectedCateg([])
        setSelectedCode(0)
        setSelectedCodeText('')
        set_current_plan('')
        setClosing(true)
        onClose()
    }

    if (openSwitch == '') return null

    let thisTitle = 'New Diagnosis'
    let submitButtonText = 'Add Diagnosis'
    if (openSwitch=='edit') {
        thisTitle='Edit ' + CodeToEdit['description']
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
                            setSelectedCodeText={setSelectedCodeText}
                            setSelectedCode={setSelectedCode}
                            Closing={Closing}
                            setClosing={setClosing}
                            currentDxCodes={currentDxCodes}  
                            ThisPatient={ThisPatient}                 
                        />

                        <MiddleColumn
                            SelectedCodeText={SelectedCodeText}
                            detail_text={detail_text}
                            set_detail_text={set_detail_text}
                            ReloadPatient={ReloadPatient}
                            RxOpen={RxOpen}
                            setRxToEdit={setRxToEdit}
                            AllPrescriptions={AllPrescriptions}
                            current_plan={current_plan}
                            set_current_plan={set_current_plan}
                        />

                        <LeftColumn
                            allCateg={allCateg}
                            selectedCateg={selectedCateg}
                            setselectedCateg={setselectedCateg}
                        />

                    </div>

                <ButtonsRow
                    CloseBox={CloseBox}
                    SubmitButtonText={submitButtonText}
                    GetDataToSend={GetDataToSend}
                    ReloadPatient={ReloadPatient}
                    CodeToEdit={CodeToEdit}
                    test={test}
                />
            </div>
        </div>
    )
}