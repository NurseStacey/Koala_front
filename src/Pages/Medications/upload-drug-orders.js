import Page_Header from '../../Components/page-header'
import UploadOrders from './drug-management-pieces/upload-orders'
import NewDrugModal from './Components/new-drug-modal'
import DBDrugSearch from './Components/DBDrug-search-modal'
import Menu_Header from '../../Components/menu-header'
import {useState} from'react'

export default function UploadDrugOrders() {

    const [the_orders, set_the_orders]=useState([])
    const [NewDrugOpen, setNewDrugOpen]= useState(false)
    const [DBDrugSearchOpen, setDBDrugSearchOpen]= useState(false)
    const [textToMatch, settextToMatch] = useState('')

    return(

        <div>
            <Page_Header
                The_Header='Upload Orders'                    
            />
            <Menu_Header></Menu_Header>             
            <div
                style={{
                    marginLeft:'2%',
                    marginRight:'2%',                  
                    border:'1px solid black'
                }}>
                
                    <NewDrugModal
                        title='New Drug'
                        open={NewDrugOpen}
                        onClose={()=>setNewDrugOpen(false)}
                        textToMatch={textToMatch}
                        
                    />
                    <DBDrugSearch
                        title='Drug Search'
                        open={DBDrugSearchOpen}
                        onClose={()=>setDBDrugSearchOpen(false)}
                        textToMatch={textToMatch}
                        the_orders={the_orders}
                        set_the_orders ={set_the_orders}
                        setNewDrugOpen={setNewDrugOpen}                                                
                    />                    
                    
                    <UploadOrders
                        settextToMatch = {settextToMatch}
                        setDBDrugSearchOpen = {setDBDrugSearchOpen}
                        the_orders={the_orders}
                        set_the_orders ={set_the_orders}
                        setNewDrugOpen={setNewDrugOpen}/>
             </div>
        </div>
       
    )
}