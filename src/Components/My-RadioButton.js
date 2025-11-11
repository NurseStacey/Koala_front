import {APPLICATION_COLORS} from './applicationColors'

export default function MyRadio({
    theList,
    choiceClick,
    selection,
    name,
    title,
    button_width,
    button_fontSize
})
{
    return(
        <div
            style={{
                display:'block',
                height:'20%',
            }}>
            <div
                style={{
                    textAlign:'center',
                    fontSize:'20px'
                }}
            >
                {title}
            </div>
            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    flexWrap:'wrap',

                }}
                >
                {theList.map((oneOption)=>
                           <label       
                                key={oneOption}                     
                                style={{
                                    backgroundColor:(selection ==oneOption ) ? 
                                        APPLICATION_COLORS.radioColors.backgroundColorSelected :
                                        APPLICATION_COLORS.radioColors.backgroundColor,
                                    border:APPLICATION_COLORS.radioColors.border,
                                    margin:'1%',
                                    width:button_width,
                                    height:'35%',
                                    fontSize:button_fontSize
                                }}>
                                
                                <input 
                                    type='radio'
                                    name={name}
                                    value={oneOption}
                                    onChange={choiceClick}
                                    
                                    style={{
                                        display:'none',
                                    }}
                                    />  
                                    {oneOption}
                                    
                            </label>

            )}
        </div>
    </div>
    )
}