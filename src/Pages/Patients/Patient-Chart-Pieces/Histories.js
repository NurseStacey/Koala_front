import '../../../../src/CSS/general.css'

export default function Patient_Charts_Histories({Open,ThisPatient})
{


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


            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('med_bio', 'Update the Medical Biography')}
                >
                <div className='TITLE_STYLE' >Medical History</div>
                {ThisPatient['basic_data']['med_bio']}
            </div>

            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('family_history', 'Update the Family History')}
                >
                <div className='TITLE_STYLE' >Family History</div>
                {ThisPatient['basic_data']['family_history']}
            </div> 


            <div 
                className='ONE_BOX_STYLE'
                onClick={()=>Open('social_history', 'Update the Social History')}
                >
                <div className='TITLE_STYLE' >Social History</div>
                {ThisPatient['basic_data']['social_history']}
            </div>        

   
        </div>
    )
}