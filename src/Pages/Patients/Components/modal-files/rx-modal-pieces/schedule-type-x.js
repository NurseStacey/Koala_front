import My_TextField from '../../../../../Components/My-TextField'
import My_CheckBox from '../../../../../Components/My-CheckBox'
import MyRadio from '../../../../../Components/My-RadioButton'

export default function ScheduleTypeX({
    setDataValue,
    scheduleChoice,
    WeekDays,
    everyXDays,
    disabled
})
{
    
    const scheduleClicked = (event)=>{
        if (disabled) return
        setDataValue(event.target.value, 'scheduleChoice')
    }

    const seteveryXDays = (event)=>{
        if (disabled) return
        setDataValue(event.target.value, 'everyXDays')
    }

    const setWeekDays = (value)=>{
        if (disabled) return
        setDataValue(value, 'WeekDays')
    }    

        

    const schedule_type=[
        'Every day',
        'Every x days',
        'Specific days of the week',
    ]
    
    
    return(
        <div
            style={{
                height:'35%',
                marginTop:'3%',
            }}
            >
            <div
                style={{
                    height:'60%',
                }}
                >
                <MyRadio
                    theList={schedule_type}
                    choiceClick={scheduleClicked}
                    selection = {scheduleChoice}
                    name='scheduleType'
                    title='Schedule Type'
                    button_width='40%'
                    button_fontSize='18px'
                /> 
            </div>
          
                {(scheduleChoice=='Every x days') ?
                <>
                    <My_TextField
                        The_Label='Days between doses'
                        value={everyXDays}
                        set_value={seteveryXDays}
                        FontSize='18px'
                        Type='text'
                        name=''
                    />
                
                </> :
                <></>
                }

                {(scheduleChoice== 'Specific days of the week') ?
                <>
                    <My_CheckBox
                        Options={WeekDays}
                        setOptions={setWeekDays}
                    />
                </>:
                <></>}
            
        </div>
    )
}