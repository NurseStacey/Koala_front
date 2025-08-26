export default function ProblemListBox({
    open,
})
{
 
    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    return(
        <div>
            <div
                style={{
                    border:'1px solid black',
                    height:'300px',
                    fontSize:'18px',
                    marginLeft:'20px',
                }}>
                <div style={TITLE_STYLE}>Problem List</div> 
                    <div
                        style={{
                            display:'block',
                            width:'100%',
                        }}
                        >

                </div>                    
            </div>

        </div>
    )

}