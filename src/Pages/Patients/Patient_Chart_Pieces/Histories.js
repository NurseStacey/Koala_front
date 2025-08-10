

export default function Patient_Charts_Histories({Open,This_Patient})
{


    if (This_Patient==undefined)  return null

    return (
        <div
            style={{
                marginLeft:'10px'
            }}>
            <div 
                style={{
                    border:'1px solid black',
                    width:'25%',
                    height:'300px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('med_bio', 'Update the Medical Biography')}
                >
                {This_Patient['med_bio']}
            </div>

            <div 
                style={{
                    border:'1px solid black',
                    width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('family_history', 'Update the Family History')}
                >
                {This_Patient['family_history']}
            </div> 


            <div 
                style={{
                    border:'1px solid black',
                    width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('social_history', 'Update the Social History')}
                >
                {This_Patient['social_history']}
            </div>       

            <div 
                style={{
                    border:'1px solid black',
                    width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('resolved_med_history', 'Update the Resolved Medical Issues')}
                >
                {This_Patient['resolved_med_history']}
            </div>         

        </div>
    )
}