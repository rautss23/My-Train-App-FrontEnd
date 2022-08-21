import axios from "axios";



let train = {

    trainId : "23",
            name : "hutatma",
            source : "solapur",
            destination : "pune",
            date : "2022-08-17",
            departureTime : 6,
            arrivalTime : 10,
            duration : 4,
            seatsLeft : 700,
            generalFare : 100,
            ladiesFare : 100,



}



test("Testing Add train funciton.", async () => {

    axios.post("http://localhost:8082/addTrains", train).then((resp) => {

        let train1 = result.data;

        expect(train1).toBe(train1);

    });

});



test("Testing View All train funciton.", async () => {

    axios.get("http://localhost:8082/trainDetails").then((resp) => {

        let train1 = result.data;

        expect(train1).toBe(train1);

    });

});

test("Testing Update order funciton.", async () => {

    axios.put("http://localhost:8082/updateTrain", train).then(resp =>{

        let train1 = result.data;

        expect(train1).toBe(train1);

    });

});