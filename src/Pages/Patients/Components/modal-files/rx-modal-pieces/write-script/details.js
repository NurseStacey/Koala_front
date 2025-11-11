import DateTime from '../../../../../../Components/date-time'
import My_TextField from '../../../../../../Components/My-TextField'
import {APPLICATION_COLORS} from '../../../../../../Components/applicationColors'
import {useState} from 'react'

export default function ScriptDetails({
    setDataValue,
    disabled,
    Startdate,
    Enddate,
    Starttime,
    Endtime,
    Indefinite,
    SpecialInstructions,
})
{

    const setEndtime = (value)=>{
        if (Indefinite || disabled) return
        setDataValue(value,'Endtime')        
    }

    const setEnddate = (value)=>{
        if (Indefinite || disabled) return
        setDataValue(value,'Enddate') 
        
    }

    const setStartdate =(value)=>{
        if (disabled) return
        setDataValue(value, 'Startdate')
    }

    
    const setStarttime =(value)=>{
        if (disabled) return
        setDataValue(value, 'Starttime')
    }    
    const setIndefinite = () =>{
        if (disabled) return
        setDataValue(!Indefinite,'Indefinite')
    }
    const setSpecialInstructions = (value) =>{
        if (disabled) return
        setDataValue(value,'SpecialInstructions')
    }
    
    const test =() =>{
        console.log(Startdate)
    }
    return(
        <div
            style={{
                height:'30%',
                display:'block',
                fontSize:'18px'
            }}>
            <div
                style={{
                    textAlign:'center'
                }}>
                    Details
            </div>

            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginTop:'2%',
                    height:'80%',
                    border:'1px solid black'
                }}
                >
                <div
                    style={{
                        width:'25%',
                        height:'50%',
                    }}
                >
                    <DateTime
                        title='Start'
                        Date={Startdate}
                        setDate={setStartdate}
                        Time = {Starttime}
                        setTime={setStarttime}
                        />
                </div>
                <div
                    style={{
                        width:'25%',
                        height:'50%',
                        backgroundColor: (Indefinite) ? 'darkgray' : 'white',
                    }}
                >   
                    <DateTime
                        title='End'
                        Date={Enddate}
                        setDate={setEnddate}
                        Time = {Endtime}
                        setTime={setEndtime}                                
                        />                
                </div>                 
                <div
                    style={{
                        backgroundColor: Indefinite ? 
                            APPLICATION_COLORS.radioColors.backgroundColorSelected : 
                            APPLICATION_COLORS.radioColors.backgroundColor,
                        height:'20%',
                        marginTop:'5%',
                    }}
                    onClick={()=>setIndefinite(!Indefinite)}
                >
                    Indefinite
                </div>
            </div>
            <div
                style={{marginTop:'2%'}}
            >
                <My_TextField
                    The_Label='Special Instructions'
                    value={SpecialInstructions}
                    set_value={setSpecialInstructions}
                    FontSize='18px'
                    Type='text'
                    name=''
                />                
            </div> 

        </div>
    )
}