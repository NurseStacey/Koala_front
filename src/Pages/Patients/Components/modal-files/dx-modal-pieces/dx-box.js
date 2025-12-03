import My_Button from '../../../../../Components/My-Button'
import {useState,useEffect} from 'react'
import AxiosInstance from '../../../../../utils/Axios'

export default function DxBox ({
    setSelectedCode,
    setSelectedCodeText,
    Closing,
    setClosing,
    ThisPatient,
})
{
    const [CodeHistory, setCodeHistory]=useState([])
    const [TheseCodes, setTheseCodes]=useState([])    
    const [searchableCode,setsearchableCode]=useState('')
    const [whichCode, setWhichCode]=useState({id:0})

    const test = () =>{
        console.log(CodeHistory)
    }    

    useEffect(()=>{
        if (Closing) {
            Reset()
            setClosing(false)
        }

    }, [Closing])
    useEffect(() => {
        GetTheseCodes(whichCode.id)
        },[whichCode])

    const handleChange_searchableCode=(event)=>{
        setsearchableCode(event.target.value)
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

    const RangeOrCodeSelected = (thisCode) =>{
        //console.log(ThisPatient['dx_codes'])
       // console.log(ThisPatient)

        let newRecord = [...TheseCodes,...CodeHistory].find(oneCode => oneCode.id==thisCode)
        //console.log(newRecord)
        if (!newRecord.is_billable) {
            if (CodeHistory.includes(newRecord)) {
                setCodeHistory(CodeHistory.filter(oneCode =>(oneCode.id<=newRecord.id)))
            } else {
                setSelectedCode(newRecord.id)
                setCodeHistory([...CodeHistory, newRecord])
            }
            GetTheseCodes(thisCode)
        } else {
            if (ThisPatient['dx_codes'].find((oneCode)=>oneCode['dx_code_id']==newRecord['id'])!==undefined) alert('Code already in chart')
                else{

                setSelectedCode(newRecord.id)
                setSelectedCodeText(newRecord.description)
                //setCodeToEdit(newRecord)
                }
        }
    }
    const GetTheseCodes = (thisCode)=>{

        AxiosInstance.get(`medical/get_diagnosis_codes/${thisCode}`).then((res) =>{
            setTheseCodes(res.data['these_codes'])
            })
    }

    return (
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
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginBottom:'20px'
                }}
                >
                    <My_Button
                        The_Text='Search For Code'
                        Width='150px'
                        Height='30px'
                        On_Click={CodeSearch}
                        FontSize='14px'
                    />         
                    <input
                        type='text'
                        value={searchableCode}
                        onChange={handleChange_searchableCode}
                        placeholder='ICD10 code to search for'
                    />
                    <My_Button
                        The_Text='Reset'
                        Width='150px'
                        Height='30px'
                        On_Click={Reset}
                        FontSize='14px'
                    />
                </div>
                <div
                    style={{
                        overflowY:'scroll',
                        height:'80%'
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
                    </div>
                )}
            </div>
        </div>
    )
}