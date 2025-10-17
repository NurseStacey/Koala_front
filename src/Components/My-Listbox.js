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
                {/* <div
                    style={{
                        display:'flex',
                        font:'arial',
                        fontSize:'20px',
                        marginLeft:'5px',
                        justifyContent:'center',
                        marginTop:'20px'
                    }}
                    >
                    <div
                        style={{marginRight:'3px', width:'200px'}}>
                        <input
                                type="text"
                                value={newText}
                                onChange={(e)=>setnewText(e.target.value)}
                            />
                    </div> */}
                    {/* <div
                        style={{marginLeft:'3px'}}>
                        <My_Button
                            The_Text='Create New Problem'
                            Width='90px'
                            Height='45px'
                            On_Click={newElement}
                            FontSize='18px'
                        />           
                    </div> 
                </div>*/}
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