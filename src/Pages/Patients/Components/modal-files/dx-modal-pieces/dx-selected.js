

export default function SelectedCodeBox({
    SelectedCodeText
})
{
    return (
        <div
            style={{
                border:'1px solid black',
                marginBottom:'5%',
                height:'20%',
            }}>
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