
import {useEffect} from 'react'
import ScheduleTypeX from '../schedule-type-x'
import Script from './script'
import ScriptDetails from './details'

export default function WriteScript({
    ALLData,
    setDataValue,
    disabled,
    DosageType
})
{

    useEffect(()=>{

    },[disabled])

    const test=()=>{
        console.log(ALLData)
        
    }
    
    return(
        <div
            style={{
                width:'30%',
                height:'100%'
            }}>

                <ScheduleTypeX
                    scheduleChoice={ALLData['scheduleChoice']}
                    setDataValue={setDataValue}
                    WeekDays={ALLData['WeekDays']}
                    everyXDays={ALLData['everyXDays']}
                    disabled={disabled}
                />            

            <Script
                setDataValue={setDataValue}
                DosageType={DosageType}
                disabled={disabled}
                PRN={ALLData['PRN']}                
                quantity={ALLData['quantity']}                
                periodValue={ALLData['periodValue']}                
                period={ALLData['period']}                
                rate={ALLData['rate']}                
                perDaySelected  ={ALLData['perDaySelected']}                
            />
             <ScriptDetails
                setDataValue={setDataValue}
                disabled={disabled}
                Startdate={ALLData['Startdate']}
                Enddate={ALLData['Enddate']}
                Starttime={ALLData['Starttime']}
                Endtime={ALLData['Endtime']}
                Indefinite={ALLData['Indefinite']}
               SpecialInstructions={ALLData['SpecialInstructions']}
               
            /> 
            {/* <button onClick={test}> test</button> */}
        </div>
    )
}