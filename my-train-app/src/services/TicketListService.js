import axios from "axios";

class TicketListService {
  getTicketsByTrainId(search) {
    return axios.get("http://localhost:8083/getTicketsByTrain/" + search, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    });
  }

  getTicketsByTrainIdAndDate(trainNum,date) {
    return axios.get("http://localhost:8083/checkTickets/" + trainNum + "/"+ date, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    });
  }
}



export default new TicketListService();
