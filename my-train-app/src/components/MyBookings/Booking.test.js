import axios from "axios";

let booking = {
  pnr:10,
  trainId:"10",
  source:"pune",
  destination:"solapur",
  seats:1,
  quota:"general",
  totalFare:100

};

test("Testing View All Booking funciton.", async () => {
  axios.get("http://localhost:8083/getAllTickets").then((resp) => {
    let booking = result.data;

    expect(booking).toBe(booking);
  });
});

test("Testing Add booking funciton.", async () => {
  axios
    .post("http://localhost:8083/reserve", booking)
    .then((resp) => {
      let booking = result.data;

      expect(booking).toBe(booking);
    });
});


