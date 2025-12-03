import AxiosInstance from '../../utils/Axios'

export const updateRecord = (datatosend,ReloadPatient,AfterDoingSomething, url )=>{

        //let datatosend = DataToSend()
        
        try{
            AxiosInstance.patch(url, datatosend).then((res) =>{
                console.log(res)
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        AfterDoingSomething()   
    } 

export const addRecord = (datatosend,ReloadPatient,AfterDoingSomething, url) =>{
   
        //let datatosend = DataToSend()
       // console.log(datatosend)
        try{
            AxiosInstance.post(url, datatosend).then((res) =>{
                ReloadPatient()
            })
        } catch(error){console.log(error)}

        AfterDoingSomething()
    }    

export const deleteRecord = (ReloadPatient,AfterDoingSomething, url)=>{
        try{
            
            AxiosInstance.delete(url).then((res) =>{

                ReloadPatient()
            })
        } catch(error){console.log(error)}

        AfterDoingSomething()
    }

