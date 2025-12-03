import {APPLICATION_COLORS} from './applicationColors'

export default function MyListBoxWithID({
    listArray,    
    selectedValue,
    setValue,
    title,
    fontSize,
})
{

    const ItemClicked = (value) =>{
        if (value==selectedValue)  setValue(-1)
        else setValue(value)
    }

    return (
        <div
              style={{

                    display:'block',
                    width:'100%',
                    height:'100%',
                    //border:'1px solid black'
                }}>

                <div
                    style={{
                        textAlign:'center'
                    }}>{title}</div>

                <div
                    style={{
                        display:'block',
                        border:'1px solid black',                        
                        height:'70%',
                        overflowY:'scroll',
                        //width:'100%'
                        margin:'3%'
                    }}>
                    {listArray.map((one_item)=>
                    <div
                        key={one_item['id']}                        
                        onClick={()=>ItemClicked(one_item['id'])}
                        style={{
                            fontSize:fontSize,
                            backgroundColor: (one_item['id']==selectedValue) ? APPLICATION_COLORS['listboxColors'].backgroundColorSelected : 
                             APPLICATION_COLORS['listboxColors'].backgroundColor
                        }}>
                            {one_item['name']}
                        </div>)}
                </div>
            
        </div>
    )
}