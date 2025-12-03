import My_MultiOptionListBox from '../../../../../Components/My-MultiOptionListBox'
import {useState, useEffect} from 'react'

export default function AssignPrescription({
    selectedCateg,
    setselectedCateg,
    selectedDx,
    setselectedDx,
    ThisPatient
})
{
    const [allCateg, setallCateg] = useState([])
    const [allDx, setallDx] = useState([])

    const test=()=>{
        //console.log(selectedDx)
        console.log(selectedCateg)
    }
    const DxClicked = (DxCode, which) =>{

        if (which=='all') {
            if (selectedDx.find((oneDx)=>oneDx.dx_code_id==DxCode.dx_code_id)===undefined)
                setselectedDx([...selectedDx, DxCode])
        } else 
                setselectedDx(selectedDx.filter((oneDx)=>oneDx.dx_code_id!==DxCode.dx_code_id))  
    }    

    const CategClicked = (Categ, which) =>{

        if (which=='all') {
            if (selectedCateg.find((oneCateg)=>oneCateg.categ_id==Categ.categ_id)===undefined)
                setselectedCateg([...selectedCateg, Categ])
        } else 
                setselectedCateg(selectedCateg.filter((oneCateg)=>oneCateg.categ_id!==Categ.categ_id))

    }
    useEffect(() => {

        let newCategArray=[]
        ThisPatient['medical_categories'].map((oneCateg)=>newCategArray.push(oneCateg))
        setallCateg(newCategArray)
        //console.log(newCategArray)
        let newDxArray=[]
        ThisPatient['dx_codes'].map((oneDx)=>newDxArray.push(oneDx))
        setallDx(newDxArray)

    },[ThisPatient])

    return(
        <div            
            style={{
                height:'100%',
                margin:'2%',
                width:'30%'
            }}>
            <div
                style={{
                    height:'45%'
                }}
                >
                    <button onClick={test}>test</button> 
                <My_MultiOptionListBox
                    The_Label='Medical Categories'
                    FontSize='18px'
                    all_options={allCateg}
                    selected_options={selectedCateg}
                    option_clicked={CategClicked}
                    which='categ_name'
                />    
            </div>
            <div
                style={{
                    marginTop:'5%',
                    height:'45%'
                }}
                >
                <My_MultiOptionListBox
                    The_Label='Dx Codes'
                    FontSize='18px'
                    all_options={allDx}
                    selected_options={selectedDx}
                    option_clicked={DxClicked}
                    which='description'
                />  
            </div>
        </div>
    )
}