import AxiosInstance from '../../../../../utils/Axios'
import My_Button from '../../../../../Components/My-Button'

export default function Patient_Location_Modal_Two({open, onClose,setUnit,unitPicked,All_Units,Facility,setAll_Beds}){

    const Unit_Selected = (one_unit) =>{
        setUnit(one_unit.name)

       try{
            AxiosInstance.get(`nursinghome/Facility_Beds/?unit_id=${one_unit.id}&get_available=True`).then((res) =>{

                let beds = []
                res.data.map(one_bed => {
                    beds.push({
                        'name':one_bed.Label,
                        'id':one_bed.id
                    })
                })
                setAll_Beds(beds)
                
            })
        } catch(error){console.log(error)}             
        unitPicked()
    }
    if  (open['location']!=='unit') return null    
    
    return (
        <div
            className='OVERLAY_STYLES'
            >
            <div
                className='MODAL_STYLE'
            >
            <div
                style={{
                    position:'absolute',
                    top:0,
                    marginLeft:'50px',
                    marginRight:'50px',
                    display:'flex',
                    justifyContent:'left',
                    flexWrap:'wrap',
                    alignContent:'flex-start'
                }}
                >
                <div
                    style={{
                        width:'100%',
                        textAlign:'center',
                        font:'arial',
                        fontSize:'26px',
                        padding:'20px',
                    }}>
                    Select the Unit
                </div>
                {All_Units.map((one_unit) => (
                        <div 
                            key={one_unit.name}
                            style={{
                                marginRight:'15px',
                                marginLeft:'15px',
                                marginTop:'8px'
                            }}>
                                            
                            <My_Button
                                The_Text={one_unit.name}
                                Width='90px'
                                Height='45px'
                                On_Click={() =>Unit_Selected(one_unit)}
                                FontSize='18px'
                            />                        
                        </div>
                    ))}                
                </div>

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Close Modal'}
                                Width='90px'
                                Height='45px'
                                On_Click={onClose}
                                FontSize='18px'
                            />                            
                </div>
                
            </div>
        </div>
    )
}