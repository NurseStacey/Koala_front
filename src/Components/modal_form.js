import {useState,useEffect} from 'react'
import My_Button from './My_Button'
import One_Form from './One_Form'
import AxiosInstance from '../utils/Axios'

export default function Modal_Form({
    open, 
    onClose,
    form, 
    title,
    this_patient, 
    UpdateMod, 
    AllFields,
    priorValues,
    setpriorValues,
    ReloadPatient})
{

    const [localForm, setlocalForm]=useState('')
    const [Editing, setEditing]=useState(false)
    const [TheData, setTheData]= useState('')
    const [FormTitle, setFormTitle]=useState('')

    const MODAL_STYLE ={
        position: 'fixed',
        top:'10%',
        left: '25%',
        width:'50%',
        height:'80%',
        trnasform: 'translate(-50%,-50%)',
        backgroundColor:'#FFF',
        zIndex:1000,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

    const DataToSend = () =>{

        let datatosend = {}

        TheData.map(one_field =>{

            if (one_field.name !== undefined){
                if (one_field.value !== '') 
                    {console.log(one_field)
                    datatosend[one_field.name]=one_field.value}
                else
                    datatosend[one_field.name]=null
            }
        })
        
        datatosend['patient']=this_patient['basic_data'].id        

        return (datatosend)
    }

    const deleteRecord = ()=>{
        try{

            AxiosInstance.delete(`${AllFields[localForm].edit_url}${TheData[0]['id']}`).then((res) =>{

                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        UpdateMod('none','')
        ReloadPatient()
        onClose()
    }

    const updateRecord = ()=>{

        let datatosend = DataToSend()
        
        try{
            AxiosInstance.patch(`${AllFields[localForm].edit_url}${TheData[0]['id']}`, datatosend).then((res) =>{
                console.log(res)
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        setpriorValues({})
        UpdateMod('none','')
        ReloadPatient()
        onClose()        
    }

    const addRecord = () =>{
   
        let datatosend = DataToSend()
        
        try{
            AxiosInstance.post(`${AllFields[localForm].post_url}`, datatosend).then((res) =>{
                //console.log(res)
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        setTheData([])
        UpdateMod('none','')
       
        onClose()
    }
    
    const closeModalForm= () =>{

        setTheData([])
        setpriorValues({})
        UpdateMod('none','')
        onClose()
    }

    const set_value= (name, value)=>{

        let elementsToUpdate = [TheData.find(one_element=>one_element.name == name)]
        elementsToUpdate[0].value=value
        let keysToReplace = [name]
        if (name=='date') {
            try{
                let year = value.slice(0,4)
                let month = value.slice(5,7)
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'year'))
                elementsToUpdate[1].value=year
                keysToReplace.push('year')
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'month'))
                elementsToUpdate[2].value=month                
                keysToReplace.push('month')
            }catch {}
        }

        let data = TheData.filter(one_element=>!keysToReplace.includes(one_element.name))
        setTheData([...data,...elementsToUpdate].sort((a,b)=>a.order-b.order))
    }

    const test=()=>{
        console.log(TheData)
        
    }

    const ResetForm = (thisform)=>{
   
        setFormTitle(AllFields[thisform].FormTitle)

    }

    //this is for editing records
    useEffect(() =>{
        try{
            
            ResetForm(priorValues['form'])
            setlocalForm(priorValues['form'])
            let editingdata=[{id:priorValues['id']}]

            AllFields[priorValues['form']].all_fields.map(oneField =>{

                    editingdata.push({...oneField,
                        'value':priorValues[oneField.name]
                    })
                })            

            setTheData(editingdata)        
            setEditing(true)
            
        } catch{}
    },[priorValues])

    //this is for new records
    useEffect(() => {
        let data=[]

        AllFields[form].all_fields.map(oneField =>{

                data.push({...oneField,
                    'value':''
                })
            })
        setTheData(data)
        setlocalForm(form)

        ResetForm(form)

        setEditing(false)
        
    },[form])

    if  (!open) return null

    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
            >

         <div
                style={{
                    display:'block'
                }}
            >

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',                                      
                        width:'100%',                        
                        font:'arial',
                        fontSize:'26px',
                        padding:'20px', 

                    }}
                    >
                    <div>{title}</div>
                </div>
                <div>
                    <One_Form
                        The_Fields={TheData}
                        set_value={set_value}
                        Button_Text={FormTitle}
                        showButton={false}
                    />
                </div>
           
                 <div
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Cancel'}
                                Width='90px'
                                Height='45px'
                                On_Click={closeModalForm}
                                FontSize='18px'
                            />

                            {(Editing) ?
                                <div>
                                    <My_Button
                                        The_Text={'Update'}
                                        Width='90px'
                                        Height='45px'
                                        On_Click={updateRecord}
                                        FontSize='18px'
                                    />  
                                    <My_Button
                                        The_Text={'Delete'}
                                        Width='90px'
                                        Height='45px'
                                        On_Click={deleteRecord}
                                        FontSize='18px'
                                    />  
                                </div>   :
                            
                            <My_Button
                                The_Text={'Save'}
                                Width='90px'
                                Height='45px'
                                On_Click={addRecord}
                                FontSize='18px'
                            />
                                  
                                     
                            }
                              
                            <My_Button
                                The_Text={'Test'}
                                Width='90px'
                                Height='45px'
                                On_Click={test}
                                FontSize='18px'
                            />                                             
                                                         
                    </div> 
                </div> 
                
            
            </div>
        </div>
    )
}