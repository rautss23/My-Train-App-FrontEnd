import axios from 'axios';

class CheckTrainService {
    
    checkTrains(source, destination){
       
    
        return axios.get("http://localhost:8082/checkTrains/"+ source + "/" + destination, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} });

    }

}

export default new CheckTrainService()