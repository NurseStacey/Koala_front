import My_DropDownField from '../../../../../../Components/My-DropDownField'


export default function TimeBetween({
    FrequencyNumber,
    setFrequencyNumber,
    FrequencyOption,
    setFrequencyOption
})
{

    const NUMBERS = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ]

    const FREQUENCYOPTONS = [
        'Weeks',
        'Months',
        'Years'
    ]
    return(
        <div
            style={{
                display:'flex',
                justifyContent:'space-around',
                marginBottom:'15px'                         
            }}>
            <div>
                Time Between Visits
            </div> 
            <div>
                <My_DropDownField
                    value={FrequencyNumber}
                    name=''
                    set_value={setFrequencyNumber}
                    The_Label=''
                    FontSize='20px'
                    all_options={NUMBERS}
                />
            </div>        
            <div>
                <My_DropDownField
                    value={FrequencyOption}
                    name=''
                    set_value={setFrequencyOption}
                    The_Label=''
                    FontSize='20px'
                    all_options={FREQUENCYOPTONS}
                />
            </div>      
            
                                                            
        </div>    
 
    )
}