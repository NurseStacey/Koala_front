import './new-categ.css'
import MyListBox from '../../../../../../Components/My-Listbox'


export default function CurrentCategories({
    PatientsCurrentCategs
})
{


    return(
        <div 
            className='ONE_COLUMN_STYLE'
        >

            <MyListBox
                listArray={PatientsCurrentCategs}
                whichValue='name'
                clickedFunction={null}
                doubleclickedFunction={null}
                title='Current Medical Categories for this Patient'
            />            
        </div>            
    )
}