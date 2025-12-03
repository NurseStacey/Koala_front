import {useState,useEffect} from 'react'
import ButtonsRow from './buttons'
import {updateRecord,addRecord,deleteRecord} from './do-something'
import One_Form from '../One-Form'

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

    const DataToSend = () =>{
        let datatosend = {}
        TheData.map(one_field =>{
            if (one_field.name !== undefined){
                if (one_field.value !== '') 
                    datatosend[one_field.name]=one_field.value
                else
                    datatosend[one_field.name]=null
            }
        })
        datatosend['patient']=this_patient['basic_data'].id        
        return (datatosend)
    }
    
    const closeModalForm= () =>{
        setTheData([])
        setpriorValues({})
        UpdateMod('none','')
        onClose()
    }

    const set_value= (name, value)=>{

        // console.log(value)
        // console.log(name)
        let elementsToUpdate = []
        elementsToUpdate.push(TheData.find(one_element=>one_element.name == name))
        elementsToUpdate[0].value=value
        //console.log(elementsToUpdate)
        let keysToReplace = [name]
        if (name=='date') {
            try{
                let year = value.slice(0,4)
               // console.log(year)
                let month = value.slice(5,7)
                //console.log(month)
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'year'))
                elementsToUpdate[1].value=year
                keysToReplace.push('year')
                elementsToUpdate.push(TheData.find(one_element=>one_element.name == 'month'))
                elementsToUpdate[2].value=month                
                keysToReplace.push('month')
            }catch {}
        }
        //console.log(elementsToUpdate)
        let data = TheData.filter(one_element=>(!(one_element.name in keysToReplace)))
        let newArray = [...data,...elementsToUpdate]
        
        newArray=newArray.sort((a,b)=>a.order-b.order)
        
        setTheData([...data,elementsToUpdate].sort((a,b)=>a.order-b.order))
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

        AllFields[form].all_fields.map(oneField =>data.push({...oneField,'value':''}))
            
        setTheData(data)
        setlocalForm(form)
        ResetForm(form)
        setEditing(false)
    },[form])

    if  (!open) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
            >

                <div
                    style={{
                        display:'block',
                        height:'100%'
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
                        {title}
                    </div>
                    <div
                        style={{
                            marginRight:'2%',
                            marginLeft:'2%',
                            height:'75%',
                            overflowY:'scroll'
                        }}>
                        <One_Form
                            The_Fields={TheData}
                            set_value={set_value}
                            Button_Text={FormTitle}
                            showButton={false}
                        />
                    </div>
                    <ButtonsRow
                        closeModalForm={closeModalForm}
                        Editing={Editing}
                        updateRecord={()=>updateRecord(DataToSend(), ReloadPatient,closeModalForm,`${AllFields[localForm].edit_url}${TheData[0]['id']}`)}
                        deleteRecord={()=>deleteRecord(ReloadPatient,closeModalForm,`${AllFields[localForm].edit_url}${TheData[0]['id']}`)}
                        addRecord={()=>addRecord(DataToSend(),ReloadPatient,closeModalForm,`${AllFields[localForm].post_url}`)}
                    />
                </div> 
            </div>
        </div>
    )
}