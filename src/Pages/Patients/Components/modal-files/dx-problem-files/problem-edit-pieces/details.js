

export default function DetailBox({
    setTheDetails,
    TheDetails
})
{

    return (
          <div
            style={{
                display:'flex',
                justifyContent:'space-around',       
                marginBottom:'15px'                 
            }}>
            <div
                style={{
                    marginTop:'auto',
                    marginBottom:'auto'
                }}>
                Details
            </div>
        
            <div>
                <textarea
                    onChange={(e)=>setTheDetails(e.target.value)}
                    value={TheDetails}
                    cols='30'
                    rows='5'>
                </textarea> 
            </div>
        </div>
    )
}