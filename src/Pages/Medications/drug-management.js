import Page_Header from '../../Components/page-header'
import Menu_Header from '../../Components/menu-header'

export default function DrugManagement() {

    const OneLink = {
        border:'1px solid black',
        backgroundColor:'lightgray',
        font:'arial',
        fontSize:'26px',
        width:'200px',
        height:'200px',
        lineHeight:'200px',
        margin:'25px',
        textAlign:'center',
    }

    return(

        <div>
            <Page_Header
                The_Header='Drug Management'                    
            />

            <Menu_Header></Menu_Header>            
       
       <div
        style={{
            style:'flex',
            wrap:'wrap'
        }}>
            <div
                style={OneLink}>
                    {/* <a href='/nursing_maintanance'>Nursing Home Maintanance</a> */}
                    <a href='/upload_drug_orders'>Upload Orders</a>
            </div>
       </div>
        </div>
       
    )
}