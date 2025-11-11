import MyListBoxBetter from './My-ListboxBetter'
import {useState} from 'react'

export default function DateTime({
    title,
    Date,
    Time,
    setDate,
    setTime
})
{
    const HourFieldChanged = (value)=>{

        let thisNumber = parseInt(value)
        if (!isNaN(Number(value)) && Number.isInteger(thisNumber))
            CheckandUpdateTime(value)
    }

    const CheckandUpdateTime=(newTime)=>{
        if (newTime<0) newTime=0
        if (newTime>2300) newTime=2300
        setTime(newTime)
    }
    const changeHour = (amount) =>{

        let newTime = Time + amount*100
        CheckandUpdateTime(newTime)

    }
    return(
        <div
            style={{
                display:'block',
                width:'100%',
            }}
        >
            <div
                style={{
                    textAlign:'center'
                }}>{title}</div>
            <div
                style={{
                    // width:'250px',
                    height:'100%',
                    
                }}>
                <input
                    type='date'
                     onChange={(e)=>setDate(e.target.value)}
                    value={Date}
                    style={{
                        width:'100%',
                        marginBottom:'2%'
                        // display:'flex',
                        // flexDirection:'row',
                        // justifyContent:'center',
                        // border:'1px solid green'
                    }}
                />
                <div
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center'
                    }}
                        >
                    <div
                        onClick={()=>changeHour(-5)}
                        style={{
                            cursor:'pointer'
                        }}
                        >
                        --
                    </div>
                    <div
                        onClick={()=>changeHour(-1)}
                        style={{
                            marginLeft:'2%',
                            cursor:'pointer'
                        }}
                        >
                        -
                    </div>

                    <input
                        type='text'
                        onChange={(e)=>HourFieldChanged(e.target.value)}
                        value={Time}
                        size='4'
                        style={{
                            width:'50px'
                        }}
                    />

                    <div
                        onClick={()=>changeHour(1)}
                        style={{
                            marginRight:'2%',
                            cursor:'pointer'
                        }}
                        >
                        +
                    </div>
                    <div
                        onClick={()=>changeHour(5)}
                        style={{
                            cursor:'pointer'
                        }}
                        >
                        ++
                    </div>                                
                </div>
            </div>       
        </div>
    )
}