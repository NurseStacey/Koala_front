import My_Button from '../../../../../Components/My-Button'

export default function ButtonsRow({
    AddRxToPatient,
    CloseBox,    
    ResetValue,
    Editing,
    RemoveRx
})
{
    return (
        <div
            style={{
                width:'100%',
                display:'flex',
                justifyContent:'space-around',
            }}
            >

            {(!Editing) ? <>
                <My_Button
                    The_Text='Add Prescription'
                    Width='110px'
                    Height='45px'
                    On_Click={AddRxToPatient}
                    FontSize='18px'
                />           
            </> : <>
                <My_Button
                    The_Text='Update Prescription'
                    Width='110px'
                    Height='45px'
                    On_Click={AddRxToPatient}
                    FontSize='18px'
                />
            </>}            
          
           <My_Button
                The_Text='Reset Values'
                Width='110px'
                Height='45px'
                On_Click={ResetValue}
                FontSize='18px'
            />           
            
            {(Editing) ? <>
                <My_Button
                    The_Text={'Remove'}
                    Width='110px'
                    Height='45px'
                    On_Click={RemoveRx}
                    FontSize='18px'
                />               
            </> : <></>}
            <My_Button
                The_Text={'Cancel'}
                Width='110px'
                Height='45px'
                On_Click={CloseBox}
                FontSize='18px'
            />    
        </div>                        
    )
}