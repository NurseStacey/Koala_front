import MyListBox from '../../../../../Components/My-Listbox'

export default function  PrescriptionsBox({
    PrescriptionsArray
})
{
    const localclickedFunction = (item) =>{

    }

    const localdoubleclickedFunction = (item) =>{

    }
        
    return (
        <div>
 

            <div
                style={{
                    height:'100px'
                }}          
            >
                <MyListBox
                    title='Prescriptions'
                    clickedFunction={localclickedFunction}
                    doubleclickedFunction={localdoubleclickedFunction}
                    listArray={PrescriptionsArray}
                    whichValue = {'prescription'}     
                    
                />           
            </div>               
        </div>               

    )
}