import ScriptRowOne from './script-row-one'
import ScriptRowTwo from './script-row-two'

export default function Script({
    setDataValue,
    DosageType,
    disabled,
    PRN,
    quantity,
    periodValue,
    period,
    rate,
    perDaySelected,
})
{

    const test=()=>{
        console.log(quantity)
    }

    return(
        <div
            style={{
                dispaly:'block',
                height:'30%'
            }}>
            <div
                style={{
                    textAlign:'center',
                    fontSize:'20px'
                }}
                >Script
            </div>
            <ScriptRowOne
                quantity={quantity}
                setDataValue={setDataValue}
                DosageType={DosageType}
                PRN={PRN}
                disabled={disabled}
            />
            <ScriptRowTwo
                rate={rate}
                perDaySelected={perDaySelected}
                period={period}
                periodValue={periodValue}
                setDataValue={setDataValue}
                disabled={disabled}
            />
     
            {/* <button onClick={test}>test</button> */}
        </div>
    )
}