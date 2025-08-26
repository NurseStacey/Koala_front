import Page_Header from '../../Components/page_header'
import UploadOrders from '../Patients/Components/upload-orders'

export default function DrugManagement() {

    return(

        <div>
            <Page_Header
                The_Header='Drug Management'                    
            />
            <div
                style={{
                    width:'30%',                    
                    border:'1px solid black'
                }}>
                <UploadOrders/>
             </div>
        </div>
       
    )
}