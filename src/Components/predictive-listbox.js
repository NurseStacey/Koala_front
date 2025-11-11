import {useState,useEffect} from 'react'
import {APPLICATION_COLORS} from './applicationColors'

export default function Predictive_ListBox({
    theList,
    setSelection,
    title,
    reset,
    thisSelection,
})
{
    const [textValue,settextValue]=useState('')
    const [predictiveOptions, setpredictiveOptions]=useState([])
    const [localSelection,setlocalSelection] = useState('')
    
    const optionChosen = (selection)=>{
        
        setSelection(selection)
        setlocalSelection(selection)
    }

    useEffect(()=>{
        settextValue('')
        setlocalSelection('')
    }, [reset])

    useEffect(()=>{
        //console.log(thisSelection)
        SetValue(thisSelection)
        setlocalSelection(thisSelection)
    },[thisSelection])

    const TabOut = (event) => {
        if (event.target.value!=='') 
            setSelection(predictiveOptions[0])
    }

    const SetValue = (text) =>{

        if (text=='') {
            setpredictiveOptions([])
        } else  {
            let tempArray = theList.filter(oneItem=>oneItem.includes(text.toLowerCase()))
            tempArray.sort((a,b)=>a.length-b.length)
            setpredictiveOptions(tempArray)
        }
        settextValue(text)
    }

    return(
        <div
            style={{
                border:'1px solid black',
                height:'100%'          
            }}>
                <div
                    style={{
                        textAlign:'center'
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <input 
                        type='text'
                        value={textValue}
                        onBlur={TabOut}
                        onChange={(e)=>SetValue(e.target.value)}
                        >
                    </input>
                </div>

                {(predictiveOptions.length == 0) ?
                    <>
                    </> :
                    <>
                        <div
                            style={{
                                height:'70%',
                                marginTop:'2%',
                                overflowY:'scroll',
                                border:'1px solid black',
                            }}
                        >
                        {predictiveOptions.map(one_item=>
                        <div 
                            style={{
                                backgroundColor: (one_item==localSelection) ? 
                                APPLICATION_COLORS.listboxColors.backgroundColorSelected :
                                APPLICATION_COLORS.listboxColors.backgroundColor
                            }}
                            onClick={()=>optionChosen(one_item)}
                            key={one_item}>
                                {one_item}
                            </div>
                        )}
                        </div>
                    </>
                }

        </div>
    )
}