

export default function CurrentPlanBox({
    setCurrentPlan,
    CurrentPlan
})
{

    return (
          <div
            style={{
                display:'block',
                justifyContent:'space-around',       
                marginBottom:'15px',
                width:'100%',

            }}>
            <div
                style={{
                    marginTop:'auto',
                    marginBottom:'auto',
                    textAlign:'center',
                    width:'100%',
                    fontSize:'18px'
                }}>
                Current Plan
            </div>
        
            <div>
                <textarea
                    onChange={(e)=>setCurrentPlan(e.target.value)}
                    value={CurrentPlan}
                    style={{
                        width:'95%',
                        margin:'2%',
                        fontSize:'18px'
                    }}
                    rows='8'
                    >
                </textarea> 
            </div>
        </div>
    )
}