import My_MultiOptionListBox from '../../../../Components/My-MultiOptionListBox'

export default function DxSelectionBox({
    selectedCateg,
    allCateg,
    CategClicked,
    selectedDx,
    allDx,
    DxClicked
})
{
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