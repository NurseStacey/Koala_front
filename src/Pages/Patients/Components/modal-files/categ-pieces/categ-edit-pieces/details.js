

export default function DetailBox({
    setTheDetails,
    TheDetails
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
                Details
            </div>
        
            <div>
                <textarea
                    onChange={(e)=>setTheDetails(e.target.value)}
                    value={TheDetails}
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