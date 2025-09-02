import My_Button from '../../../Components/My_Button'
import {useState} from 'react'
import AxiosInstance from '../../../utils/Axios'

export default function UploadOrders() {
    const [field_text, set_field_text]=useState('')
    const [the_orders, set_the_orders]=useState([])
    const [order_medication_match, set_order_medication_match] =  useState([])

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    const test = ()=>
    {
        console.log(the_orders)
    }

    const Save_Matched_Orders=()=>{
        AxiosInstance.post(`drug_management/match_to_drugDB/`, order_medication_match).then((res) =>{
             console.log(res.data['results'])
        })
    }
    
    const match_medication = (order, orderID, medicationID) =>{
        let temp_array=[]
        order_medication_match.map((one_element)=>{
            if (one_element.order !== order)
                temp_array.push(one_element)
        })
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
                oneMedication.backgroundColor='pink'
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
            let local_results=[]
            // res.data['results'].map((one_order)=>{
            //     let this_record={
            //         medication_DBrecords:[],
            //         order_id:one_order.order_id,
            //         the_order:one_order.the_order,
            //         presumed_med_name:one_order.presumed_med_name
            //     }
            //     one_order.medication_DBrecords.map((one_medication) =>{
            //         let this_medication={
            //             name:one_medication.name,
            //             id:one_medication.id,
            //             ingredients:[],
            //             background_color:'white'
            //         }
            //         one_medication.ingredients.map((one_ingredient)=>{
            //             this_medication.ingredients.push(one_ingredient)
            //         })
            //         this_record.medication_DBrecords.push(this_medication)
            //     })


            //     local_results.push(this_record)
            // })

            //  local_results = [...local_results].sort((a,b)=>a.order_id-b.order_id)
            //  set_the_orders(local_results)
             set_the_orders(res.data['results'])
})        
    }

    return(
        <div
        
            style={{
                display:'block',
            }}>
                                <button onClick={test}>test</button> 
                <div style={TITLE_STYLE}>Upload Orders</div> 
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
                            <div
                                style={{
                                    width:'30%',
                                    
                                    paddingBottom:'5px',
                                    border:'1px solid black'
                                }}
                                >
                                <div
                                    style={{
                                        display:'block',
                                        
                                    }}
                                >
                                    <div
                                        style={{
                                            marginBottom:'5px',
                                            wrap:'wrap',
                                        }}
                                        >
                                            {one_order.the_order}
                                    </div>
                                    <div>Presumed Drug: {one_order.presumed_med_name}</div>
                                </div>
                            </div>
                            <div
                                style={{
                                    width:'50%',
                                    border:'1px solid black'
                                }}>
                                {one_order.medication_DBrecords.map((onemedrecord)=>
                                <div
                                    key={onemedrecord.id}
                                    style={{
                                        display:'flex',

                                    }}>
                                    <div
                                        style={{
                                            display:'block',
                                            border:'1px red solid',
                                            width:'80%',
                                            backgroundColor:onemedrecord.backgroundColor
                                        }}
                                       >
                                            <div
                                                style={{
                                                    marginLeft:'2px',
                                                    
                                                }}>
                                                {onemedrecord.name}
                                            </div>
                                            <div
                                                style={{
                                                    marginLeft:'15px'
                                                }}>
                                                {onemedrecord.ingredients.map((one_ingredient)=>
                                                    <div
                                                        key={one_ingredient}>
                                                        {one_ingredient}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div 
                                            style={{
                                                marginLeft:'10px',
                                                display:'flex',
                                                justifyContent:'center'
                                            }}
                                            >
                                            <My_Button
                                                The_Text='Match To Order'
                                                Width='90px'
                                                Height='45px'
                                                On_Click={()=>match_medication(one_order.the_order, one_order.order_id,onemedrecord.id)}
                                                FontSize='12px'
                                            />   
                                            <My_Button
                                                The_Text='Match To Drug'
                                                Width='90px'
                                                Height='45px'
                                                On_Click={()=>match_medication(one_order.presumed_med_name, one_order.order_id,onemedrecord.id)}
                                                FontSize='12px'
                                            />                                               
                                        </div> 
                                </div>)}
                            </div>
                        </div>)}
                </div>         

        </div>
    )
}