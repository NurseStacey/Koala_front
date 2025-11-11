import {APPLICATION_COLORS} from './applicationColors'

export default function MyListBoxBetter({
    listArray,    
    selectedValue,
    setValue,
    title,
    fontSize,
})
{

    const ItemClicked = (value) =>{
        if (value==selectedValue)  setValue('')
        else setValue(value)
    }

    return (
        <div
              style={{

                    display:'block',
                    width:'100%',
                    height:'100%',
                    border:'1px solid black'
                }}>

                <div
                    style={{
                        textAlign:'center'
                    }}>{title}</div>

                <div
                    style={{
                        display:'block',
                        border:'1px solid black',
                        
                        height:'100%',
                        overflowY:'scroll',
                        width:'100%'
                    }}>
                    {listArray.map((one_item)=>
                    <div
                        key={one_item}                        
                        onClick={()=>ItemClicked(one_item)}
                        style={{
                            fontSize:fontSize,
                            backgroundColor: (one_item==selectedValue) ? APPLICATION_COLORS['listboxColors'].backgroundColorSelected : 
                             APPLICATION_COLORS['listboxColors'].backgroundColor
                        }}>
                            {one_item}
                        </div>)}
                </div>
            
        </div>
    )
}