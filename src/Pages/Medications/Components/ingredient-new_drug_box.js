import My_Button from '../../../Components/My-Button'

export default function IngredientNewDrugBox({
    IngredientUpdate,
    Ingredients,
    addIngredient
}){

    return (
        <div
            style={{
                border:'1px solid black',
                height:'100%',
                display:'block'
            }}>
            <div
                style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    Active Ingredients
            </div>
            <div
                style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <My_Button
                            The_Text='Add Ingredient'
                            Width='90px'
                            Height='45px'
                            On_Click={addIngredient}
                            FontSize='16px'                    
                    />
            </div> 
            <div
                style={{
                    display:'block',
                    overflowY:'scroll',
                    height:'60%'
                }}>       
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'space-evenly',
                            marginTop:'10px',
                            justifyContent:'space-evenly'
                        }}>
                        <div>Name</div>
                        <div>Dosage</div>
                    </div>                    
                    {Ingredients.map((oneIngredient, index)=>
                    <div
                        key={index}
                        
                        style={{
                            display:'flex',
                            justifyContent:'space-evenly',
                            marginTop:'10px',
                            justifyContent:'space-evenly'
                        }}>
                        <input
                            type='text'
                            style={{
                                fontSize:'15px',
                                font:'arial',
                            }}
                            value={oneIngredient['name']}
                            onChange={(e)=>IngredientUpdate(e.target.value,'name',index)}
                        />
                        <input
                            type='text'
                            style={{
                                fontSize:'15px',
                                font:'arial',
                            }}
                            value={oneIngredient['dosage']}
                            onChange={(e)=>IngredientUpdate(e.target.value,'dosage',index)}
                        />                            
                        </div>
                    )}
            </div>     
        </div>
    )
}