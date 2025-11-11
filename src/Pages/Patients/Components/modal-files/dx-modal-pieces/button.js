import My_Button from '../../../../../Components/My-Button'

export default function ButtonsRow({
    AddDxToPatient,
    CloseBox,
    SubmitButtonText,
    test
})
{
    return (
        <div
            style={{
                height:'10%',
                width:'100%',
                display:'flex',
                justifyContent:'space-around',
                border:'1px solid black'
            }}
            >
            <My_Button
                The_Text={SubmitButtonText}
                Width='90px'
                Height='45px'
                On_Click={AddDxToPatient}
                FontSize='18px'
            />           

            <My_Button
                The_Text={'test'}
                Width='90px'
                Height='45px'
                On_Click={test}
                FontSize='18px'
            />    

            <My_Button
                The_Text={'Cancel'}
                Width='90px'
                Height='45px'
                On_Click={CloseBox}
                FontSize='18px'
            />    
        </div>                        
    )
}