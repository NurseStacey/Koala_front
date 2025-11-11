import My_TextField from '../../../../../../Components/My-TextField'
import MyRadio from '../../../../../../Components/My-RadioButton'
import {APPLICATION_COLORS} from '../../../../../../Components/applicationColors'

export default function ScriptRowTwo({
    rate,
    perDaySelected,
    period,
    periodValue,
    setDataValue,
    disabled
})
{
    const rate_type=['X per day', 'Periodic']
    const period_type=['minutes','hour', 'shift']
    const perDayOptions = ['QD','BID','TID','QID','Five/Day', 'Six/Day']

    const rateClick=(event)=>{
        if (disabled) return        
        setDataValue(event.target.value,'rate')
    }

    const setperiod = (value)=>{
        if (disabled) return
        setDataValue(value,'period')
    }

    const periodValueClicked = (event)=>{
        if (disabled) return
        setDataValue(event.target.value,'periodValue')
    }

    const perDayClick = (event)=>{
        if (disabled) return
        setDataValue(event.target.value,'perDaySelected')
    }

    return (
        <div
            style={{
                marginTop:'2%',
                alignItems:'center'
            }}
            >
            <MyRadio
                theList={rate_type}
                choiceClick={rateClick}
                selection = {rate}
                name='rateType'
                title=''
                button_width='40%'
                button_fontSize='18px'                    
            /> 
            <div
                style={{
                    height:'25%',
                    marginTop:'5%'
                }}>
                    {(rate == 'X per day') ? 
                    <>
                        <MyRadio
                            theList={perDayOptions}
                            choiceClick={perDayClick}
                            selection = {perDaySelected}
                            name='rateType'
                            title=''
                            button_width='12%'
                            button_fontSize='15px'                            
                        />                     
                        </>:<></>}
                    {(rate == 'Periodic') ? 
                    <>
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'left',
                                flexDirection:'row',
                                alignItems:'center',
                                marginTop:'5%'
                            }}
                            >
                            <div
                                style={{
                                    fontSize:'18px',
                                    width:'8%',
                                }}>Every
                            </div>
                            <div
                                style={{
                                    width:'20%',
                                }}
                                >
                                <My_TextField
                                    The_Label=''
                                    value={period}
                                    set_value={setperiod}
                                    FontSize='18px'
                                    Type='number'
                                    name=''
                                />
                            </div>
                            <div
                                style={{
                                    width:'70%',
                                    
                                }}
                                >                         
                                <MyRadio
                                    theList={period_type}
                                    choiceClick={periodValueClicked}
                                    selection = {periodValue}
                                    name='rateType'
                                    title=''
                                    button_width='15%'
                                    button_fontSize='15px'                                    
                                />                
                            </div>                      
                        </div>
                    </>:<></>
                    }
            </div>   
        </div>        
    )
}