import My_Button from './My-Button'

export default function MyListBox({
    listArray,    
    whichValue,
    clickedFunction,
    doubleclickedFunction,
    title,
})
{

    const localclickedFunction = (element) =>{
        if (clickedFunction !== null) clickedFunction(element)
    }

    const localdoubleclickedFunction = (element) =>{
        if (doubleclickedFunction !== null) doubleclickedFunction(element)
    }    

    return (
        <div
              style={{

                    display:'block',
                    width:'100%',
                    height:'100%',
                    // border:'1px solid black'
                }}>

                <div
                    style={{
                        textAlign:'center'
                    }}>{title}</div>
   
                <div
                    style={{
                        display:'block',
                        border:'1px solid black',
                        margin:'3%',
                        height:'70%',
                        overflowY:'scroll'
                    }}>
                    {listArray.map((one_element)=>
                    <div
                        key={one_element[whichValue]}
                        
                        onClick={()=>localclickedFunction(one_element[whichValue])}
                        onDoubleClick={()=>localdoubleclickedFunction(one_element[whichValue])}
                        style={{
                            margin:'2%',
                            backgroundColor:one_element['backgroundColor']
                        }}>
                            {one_element[whichValue]}
                        </div>)}
                </div>
            
        </div>
    )
}