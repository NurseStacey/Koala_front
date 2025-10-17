import My_Button from '../../../../../Components/My-Button'

export default function DxModalButtons({
    test,
    AddCode,
    SubmitButtonText,
    CloseBox
})
{
    return(
        <div>
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-around'
                }}>
                <My_Button
                    The_Text={SubmitButtonText}
                    Width='90px'
                    Height='45px'
                    On_Click={AddCode}
                    FontSize='18px'
                />           
                <button onClick={test}>test</button>                 
                <My_Button
                    The_Text={'Cancel'}
                    Width='90px'
                    Height='45px'
                    On_Click={CloseBox}
                    FontSize='18px'
                />   
            </div>
        </div>
    )
}