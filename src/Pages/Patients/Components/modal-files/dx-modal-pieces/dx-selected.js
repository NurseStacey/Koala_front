

export default function SelectedCodeBox({
    SelectedCodeText
})
{
    return (
        <div>
            <div
                style={{
                    textAlign:'center',
                    marginBottom:'10px'
                }}>
                    Selected Code
            </div>            
            <div
                style={{
                    textAlign:'center',
                    marginRight:'20px',
                    marginLeft:'20px'
                }}>
                    {(SelectedCodeText !== '') ?
                    <>Selected Code: {SelectedCodeText}</> : <></>}
            </div>                            
        </div>               

    )
}