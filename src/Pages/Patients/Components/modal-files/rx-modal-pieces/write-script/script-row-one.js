import My_TextField from '../../../../../../Components/My-TextField'
import {APPLICATION_COLORS} from '../../../../../../Components/applicationColors'

export default function ScriptRowOne({
    quantity,
    setDataValue,
    DosageType,
    PRN,
    disabled
})
{
    const setquantity = (value)=>{
        if (disabled) return
        setDataValue(value,'quantity')
    }

    const prnClicked = () =>{
        if (disabled) return
        setDataValue(!PRN,'PRN')
    }

    return(
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
            }}
            >
            <div
                style={{
                    marginLeft:'5px',
                    width:'15%',
                }}
                >
                <My_TextField
                    The_Label=''
                    value={quantity}
                    set_value={setquantity}
                    FontSize='18px'
                    Type='text'
                    name=''
                />
            </div>
                    <div
                style={{
                    margin:'1px',
                }}
                >
                {DosageType}
            </div>

            <div
                onClick={prnClicked}
                
                style={{
                    backgroundColor:PRN ? APPLICATION_COLORS.radioColors.backgroundColorSelected : 
                    APPLICATION_COLORS.radioColors.backgroundColor,
                    margin:'2px',
                }}
                >
                PRN
            </div>                
        </div>        
    )
}