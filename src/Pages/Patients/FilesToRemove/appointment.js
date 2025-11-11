
import {useState} from 'react'
import Calendar from 'react-calendar'

export default function AppointmentBox ({
    AppointmentDate,
    setAppointmentDate,
    AppointmentDescription,
    setAppointmentDescription
})
{
    // ValuePiece = Date | null
    // Value = ValuePiece|[ValuePiece, ValuePiece]

    const [AppDate, setAppDate]=useState(new Date())
    
    const onChange = date => {
        setAppDate(date)
    }

  const tileContent = ({ date, view }) => {
    if (view === 'month' && AppDate.toDateString() === date.toDateString()) {
        return <div style={{ background: 'red', borderRadius: '50%', width: '8px', height: '8px', margin: '0 auto' }}></div>;
        }    
    return null
  }

    const test = () =>
    {
        console.log(typeof(new Date()))
        console.log(typeof(AppDate))
    }
    
    return (
        <div>
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-around',
                    marginBottom:'15px'                          
                }}>
                <div>
                    Schedule Visit
                </div>
            </div>    
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-around',
                    marginBottom:'15px'                          
                }}>  
                <div
                    style={{
                        display:'block'
                    }}                
                >
                    <div
                        style={{
                            marginBottom:'5px'
                        }}>
                        Appointment Description
                    </div>
                    <div>
                        <textarea
                            onChange={(e)=>setAppointmentDescription(e.target.value)}
                            value={AppointmentDescription}
                            cols='30'
                            rows='3'>
                        </textarea>
                    </div>
                        
                </div>
                <div
                    style={{
                        display:'block'
                    }}                
                >
                    <div
                        style={{
                            marginBottom:'5px'
                        }}>
                        Select a Date
                    </div>
                    <Calendar
                        onChange={onChange}
                        value = {AppDate}
                        tileContent = {tileContent}
                        />
                    <div>
                        <button onClick={test}>{AppDate.toString()}</button>
                    </div>
                </div>     
                                                                                        
            </div>                
        </div>
    )
}