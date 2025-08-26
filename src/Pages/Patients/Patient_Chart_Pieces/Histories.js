

export default function Patient_Charts_Histories({Open,ThisPatient})
{

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    if (ThisPatient==undefined)  return null
    
    return (
        <div
            style={{
                marginLeft:'10px',
                display:'flex',
                flexDirection:'column',
                flexWrap:'wrap',
                height:'750px'
            }}>
            <div 
                style={{
                    border:'1px solid black',
                    // width:'25%',
                    height:'300px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('med_bio', 'Update the Medical Biography')}
                >
                <div style={TITLE_STYLE}>Medical History</div>
                {ThisPatient['basic_data']['med_bio']}
            </div>

            <div 
                style={{
                    border:'1px solid black',
                    // width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('family_history', 'Update the Family History')}
                >
                <div style={TITLE_STYLE}>Family History</div>
                {ThisPatient['basic_data']['family_history']}
            </div> 


            <div 
                style={{
                    border:'1px solid black',
                    // width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('social_history', 'Update the Social History')}
                >
                <div style={TITLE_STYLE}>Social History</div>
                {ThisPatient['basic_data']['social_history']}
            </div>       

            <div 
                style={{
                    border:'1px solid black',
                    // width:'25%',
                    height:'125px',
                    fontSize:'18px',
                    marbLeft:'10px',
                }}
                onClick={()=>Open('resolved_med_history', 'Update the Resolved Medical Issues')}
                >
                <div style={TITLE_STYLE}>Medical History</div>
                {ThisPatient['basic_data']['resolved_med_history']}

            </div> 
           
        </div>
    )
}