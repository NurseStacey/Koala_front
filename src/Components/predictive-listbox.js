import {useState} from 'react'

export default function Predictive_ListBox({
    theList
})
{
    const [textValue,settextValue]=useState('')
    const [predictiveOptions, setpredictiveOptions]=useState([])

    const SetValue = (text) =>{
       
        if (text=='') {
            setpredictiveOptions([])
        } else  {
            setpredictiveOptions(theList['all_drugs'].filter(oneItem=>oneItem.drugName.includes(text)))
        }
        
        settextValue(text)
    }

    return(
        <div
            style={{
                border:'1px solid black',
                height:'100%'          
            }}>
                <input 
                    type='text'
                    value={textValue}
                    onChange={(e)=>SetValue(e.target.value)}
                    >
                </input>

                {(predictiveOptions==[]) ?
                    <>
                    </> :
                    <>
                        <div
                            style={{
                                height:'80%',
                                overflowY:'scroll'
                            }}
                        >
                        {predictiveOptions.map(one_item=>
                        <div 
                            key={one_item.drugName}>
                                {one_item.drugName}
                            </div>
                        )}
                        </div>
                    </>
                }
                <div>

                </div>
        </div>
    )
}