import My_Button from '../../../Components/My-Button'
import {useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import OneMedicationUpload from '../Components/one-medication-upload'

export default function UploadOrders({
    setNewDrugOpen,
    setDBDrugSearchOpen,
    settextToMatch,
    the_orders,
    set_the_orders}) 
    
{
    const [field_text, set_field_text]=useState('')

    const [order_medication_match, set_order_medication_match] =  useState([])

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    const DBdrug_search_match = (order) =>{
        console.log(order)
        settextToMatch(order)
        setDBDrugSearchOpen(true)
    }
    
    const new_drug_match = (order) =>{
        console.log(order)
        settextToMatch(order)
        setNewDrugOpen(true)
    }

    const test = ()=>
    {
        console.log(the_orders)
    }

    const Save_Matched_Orders=()=>{
        AxiosInstance.post(`drug_management/match_to_drugDB/`, order_medication_match).then((res) =>{
             //console.log(res.data['results'])
             set_the_orders([])
        })
    }
    
    const match_medication = (order, orderID, medicationID, color) =>{
        let temp_array=[]
        let unselect_record=false
        
        order_medication_match.map((one_element)=>{
            if (one_element.text_to_match !== order){
                temp_array.push(one_element)
            } else {
                unselect_record=true
            }
        })

        if (unselect_record)
            set_order_medication_match(temp_array)
        else
            set_order_medication_match([...temp_array, {text_to_match:order, drug:medicationID}])

        let thisRecordCopy=the_orders.find((oneRecord)=>oneRecord.order_id==orderID)
        let thisNewRecord ={
            medication_DBrecords:[],
            order_id:thisRecordCopy.order_id,
            presumed_med_name:thisRecordCopy.presumed_med_name,
            the_order:thisRecordCopy.the_order
        }

        thisRecordCopy.medication_DBrecords.map((oneMedication)=>{
            if (oneMedication.id == medicationID) {
                if (oneMedication.backgroundColor==color) {
                    oneMedication.backgroundColor='white'
                } else {
                oneMedication.backgroundColor=color
                }
            } else {
                oneMedication.backgroundColor='white'
            }
            thisNewRecord.medication_DBrecords.push(oneMedication)
        })

        let newArray=[]
        the_orders.map((oneOrder)=>{
            if (oneOrder.order_id !== orderID) {newArray.push(oneOrder)}
        })
        newArray.push(thisRecordCopy)
        set_the_orders( [...newArray].sort((a,b)=>a.order_id-b.order_id))
    }
    const UploadOrders = () =>
    {
        
        AxiosInstance.post(`drug_management/upload_orders/`, {the_orders:field_text}).then((res) =>{
           
             set_the_orders(res.data['results'])
             set_order_medication_match([])
})        
    }

    return(
        <div
        
            style={{
                display:'block',
            }}>
                                {/* <button onClick={test}>test</button>  */}
                
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        margin:'5px'
                    }}>
                    <textarea
                        onChange={(e)=>set_field_text(e.target.value)}
                        cols='10'
                        rows='5'>
                    </textarea>
                </div>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        marginTop:'5px',
                        marginBottom:'15px'
                    }}>
                         <My_Button
                            The_Text='Upload Orders'
                            Width='90px'
                            Height='45px'
                            On_Click={UploadOrders}
                            FontSize='18px'
                        />    
                         <My_Button
                            The_Text='Save Matched Orders'
                            Width='90px'
                            Height='45px'
                            On_Click={Save_Matched_Orders}
                            FontSize='18px'
                        />                            
                </div>

                <div
                    style={{
                        margin:'5px',
                        border:'1px solid black'
                    }}>

                    {the_orders.map((one_order)=>
                            <div
                                style={{
                                    display:'flex',
                                    flexDirection:'row'
                                }}
                                key={one_order.order_id}>
                                <OneMedicationUpload
                                    new_drug_match={new_drug_match}
                                    match_medication={match_medication}
                                    DBdrug_search_match = {DBdrug_search_match}
                                    one_order={one_order}/>
                            </div>)}
                </div>         

        </div>
    )
}