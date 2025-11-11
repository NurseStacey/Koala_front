

export default function My_CheckBox({
    Options,
    setOptions
})
{
    const test=()=>{
        console.log(Options)
    }
    const handleOptionSelected = (event)=>{
        console.log(event.target)

        let newArray=[]
        Options.map((oneOption)=>{
            if (oneOption.value==event.target.value) newArray.push({'label':oneOption['label'], 'value':oneOption['value'], isSelected:!oneOption['isSelected']})
                else newArray.push(oneOption)
        })
        setOptions(newArray)
    }
    return(
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
            }}
            >
            {Options.map((oneOption)=>
                <div
                    style={{
                        fontSize:'18px',
                        marginLeft:'3%',
                        marginRight:'3%',
                        marginBottom:'3%'
                    }}>
                    <label
                        key={oneOption['label']}>
                        <input
                            type='checkbox'
                            value={oneOption['value']}
                            onChange={handleOptionSelected}
                        />
                        {oneOption['label']}
                    </label>

                </div>)} 
        </div>
    )
}