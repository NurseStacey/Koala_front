import My_Button from '../../../../../../Components/My-Button'

export default function ButtonsRow({
    UpdateCateg,
    CloseBox
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
                The_Text='Update Medical Categories'
                Width='90px'
                Height='45px'
                On_Click={ButtonsRow}
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