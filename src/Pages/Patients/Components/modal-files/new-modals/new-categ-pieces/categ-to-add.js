import './new-categ.css'
import MyListBox from '../../../../../../Components/My-Listbox'

import AxiosInstance from '../../../../../../utils/Axios'

import ChangeBackgroundColor from '../../../../../../Components/Change-Background-Color-for-List'

import {useEffect, useState} from 'react'

export default function CategoriesToAdd({
    CategToAdd,
    categAddedSelected,
    RemoveCateg
})
{

        
    return(
        <div 
            className='ONE_COLUMN_STYLE'
        >

            <MyListBox
                listArray={CategToAdd}
                whichValue='name'
                clickedFunction={categAddedSelected}
                doubleclickedFunction={RemoveCateg}
                title='Medical Categories to Add for this Patient'
            />               

        </div>            
    )
}