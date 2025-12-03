import My_MultiOptionListBox from '../../../../../../src/Components/My-MultiOptionListBox'

export default function LeftColumn({
    allCateg,
    selectedCateg,
    setselectedCateg
})
{
    const CategClicked = (Categ, which) =>{

        if (which=='all') {
            if (!selectedCateg.some((oneCateg)=>oneCateg.id==Categ.id))
                setselectedCateg([...selectedCateg, Categ])
        } else
                setselectedCateg(selectedCateg.filter((oneCateg)=>oneCateg.id!==Categ.id))
    }

    return(
        <div
            style={{
                display:'block',
                width:'20%',
                height:'100%',
                marginLeft:'1%',
                marginTop:'3%',
                // border:'1px solid black',
            }}
        >
            <My_MultiOptionListBox
                The_Label='Medical Categories'
                FontSize='18px'
                all_options={allCateg}
                selected_options={selectedCateg}
                option_clicked={CategClicked}
                which='categ_name'
            /> 
        </div>
    )
}