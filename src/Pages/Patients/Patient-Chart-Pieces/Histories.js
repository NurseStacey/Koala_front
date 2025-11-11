import '../../../../src/CSS/general.css'
import {useState, useEffect} from 'react'

export default function Patient_Charts_Histories({
    Open,
    ThisPatient
})
{
    const [medHistory, setmedHistory]=useState([])
    const [famHistory, setfamHistory]=useState([])
    const [socHistory, setsocHistory]=useState([])

    useEffect(()=>{
        let newmedHistory = []
        try{
            ThisPatient['basic_data']['med_bio'].split('\n').map((oneLine)=>newmedHistory.push(oneLine))
        }catch{}
        setmedHistory(newmedHistory)

        let newfamHistory = []
        try{
            ThisPatient['basic_data']['family_history'].split('\n').map((oneLine)=>newfamHistory.push(oneLine))
        }catch{}        

        setfamHistory(newfamHistory)
        
        let newsocHistory = []
        try{
            ThisPatient['basic_data']['social_history'].split('\n').map((oneLine)=>newsocHistory.push(oneLine))
        }catch{}        

        setsocHistory(newsocHistory)

    },[ThisPatient])

    const test=()=>
    {console.log(ThisPatient['basic_data']['family_history'])}

    if (ThisPatient==undefined)  return null
    
    return (
        <div
            
            style={{
                marginLeft:'10px',
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                height:'750px',
                width:'600px',
                //border:'1px solid black'
            }}>
            {/* <button onClick={test}>test</button> */}

            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('med_bio', 'Update the Medical Biography')}
                >
                <div className='TITLE_STYLE'  >Medical Biography</div>
                {medHistory.map((oneLine, index)=><div key={index}>{oneLine}</div>)}
            </div>

            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('family_history', 'Update the Family History')}
                >
                <div className='TITLE_STYLE' >Family History</div>
                {famHistory.map((oneLine, index)=><div key={index}>{oneLine}</div>)}
            </div> 


            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('social_history', 'Update the Social History')}
                >
                <div className='TITLE_STYLE' >Social History</div>
                {socHistory.map((oneLine, index)=><div key={index}>{oneLine}</div>)}
            </div>        

   
        </div>
    )
}