
function ChangeBackgroundColor(this_Item, which, setWhich)
{

    let new_list = []
    //console.log(this_problem)
    which.map((one_item)=>{
        let new_color='white'
        if ((one_item.name == this_Item) && (one_item.backgroundColor=='white')) new_color='pink'

            new_list.push({
                name:one_item.name,
                id:one_item.id,
                backgroundColor:new_color
            })             
    })
    setWhich(new_list)        
}    

export default ChangeBackgroundColor