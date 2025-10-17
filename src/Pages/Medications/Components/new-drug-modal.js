import My_Button from '../../../Components/My-Button'
import My_TextField from '../../../Components/My-TextField'
import My_ListBox from '../../../Components/My-List'
import IngredientNewDrugBox from './ingredient-new_drug_box'

import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'

export default function NewDrugModal({
    open,
    onClose,
    title,
    textToMatch
})
{

    const [dosage, setdosage] = useState('')
    const [dosageOptions, setDosageOptions] = useState([
        {name:'tablet',backgroundColor:'white'},
        {name:'capsule',backgroundColor:'white'},
        {name:'cream',backgroundColor:'white'},
        {name:'lotion',backgroundColor:'white'},
        {name:'solution',backgroundColor:'white'},
        {name:'enema',backgroundColor:'white'},
    ])
    const [drugName, setdrugName]=useState('')

    const [Ingredients, setIngredients]=useState([
        {name:'', dosage:''},
        {name:'', dosage:''},
        {name:'', dosage:''}])

    const CloseDown =() =>{
        setdosage('')
        setdrugName('')
        setIngredients([
        {name:'', dosage:''},
        {name:'', dosage:''},
        {name:'', dosage:''}])

        setDosageOptions([
            {name:'tablet',backgroundColor:'white'},
            {name:'capsule',backgroundColor:'white'},
            {name:'cream',backgroundColor:'white'},
            {name:'lotion',backgroundColor:'white'},
            {name:'solution',backgroundColor:'white'},
            {name:'enema',backgroundColor:'white'},
        ])
        
        onClose()
    }
    const dosageSelected=(whichOption) =>{
        
        let newArray = []
        dosageOptions.map((oneOption)=>{
            if (oneOption.name==whichOption)
            {
                
                if (oneOption.backgroundColor=='white')
                {
                    newArray.push({name:whichOption,backgroundColor:'limegreen'}) 
                    setdosage(whichOption)
                } else {
                    newArray.push({name:whichOption,backgroundColor:'white'}) 
                    setdosage('')
                }
            } else newArray.push({name:oneOption.name,backgroundColor:'white'})

        
        })
        setDosageOptions(newArray)

    }

    const setvalue = (name, value) =>{
        setdrugName(value)
    }

    const IngredientUpdate = (value, which, thisindex) =>{
        let replacedValue = Ingredients[thisindex]
        replacedValue[which]=value

        setIngredients(
            [...Ingredients.filter((blank, index)=> index < thisindex), 
                replacedValue, 
                ...Ingredients.filter((blank, index)=> index > thisindex)])
    }

    const addIngredient = () =>{
        setIngredients([...Ingredients, {name:'', dosage:''}])
    }

    const addnewdrug = ()=>{
        let data_to_send={
            generic:drugName,
            Ingredients:Ingredients,
            Dosage:dosage,
            textToMatch:textToMatch
        }

        try{
            AxiosInstance.post(`drug_management/new_drug/`, data_to_send).then((res) =>{
                console.log(res)
                CloseDown()
            })
        } catch(error){console.log(error)}        
    }

    if  (!open) return null

    return(
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
                            font:'arial',
                            fontSize:'28px',
                            padding:'10px'
                        }}>
                            {title}
                    </div>
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'space-around'
                        }}>
                        <My_Button
                            The_Text='Add New Drug'
                            Width='90px'
                            Height='45px'
                            On_Click={addnewdrug}
                            FontSize='16px'
                        />                         
                        <My_Button
                            The_Text='Cancel'
                            Width='90px'
                            Height='45px'
                            On_Click={CloseDown}
                            FontSize='16px'
                        /> 
                    </div>
                    <div
                        style={{
                            display:'block',
                            border:'1px solid black',
                            height:'75%',
                            marginRight:'15px',
                            marginLeft:'15px',
                            font:'arial',
                            fontSize:'26px'
                        }}>
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'space-between'
                            }}>
                                <div>Text To Match Drug To</div>
                                <div
                                    style={{
                                        backgroundColor:'limeGreen'
                                    }}>{textToMatch}</div>
                        </div>
                    <div
                        style={{
                            marginTop:'10px'
                        }}
                        >
                        <My_TextField
                            value={drugName}
                            name='drugName'
                            Type='text'
                            set_value={setvalue}
                            The_Label='Drug Name'
                            FontSize='20px'                
                    />                        
                        </div>
                    <div
                        style={{
                            marginTop:'20px',
                            width:'100%',
                            display:'flex',
                            justifyContent:'space-around',
                            height:'350px'
                        }}
                        >
                        <div
                            style={{
                                width:'40%'
                            }}>
                            <My_ListBox
                                // value={one_field.value}
                                name='drug'
                                The_Label='Dosage Type'
                                FontSize='20px' 
                                all_options={dosageOptions}
                                option_selected = {dosageSelected}   
                                totalHeight = '100%'
                        />             
                        </div>

                        <div
                            style={{
                                width:'50%'
                            }}>
                                <IngredientNewDrugBox
                                    IngredientUpdate={IngredientUpdate}
                                    Ingredients = {Ingredients}
                                    addIngredient = {addIngredient}
                                />
                        </div>           
                        </div>
                        
                    </div>
                    

                </div>                        
               
            </div>
        </div>
    )
}