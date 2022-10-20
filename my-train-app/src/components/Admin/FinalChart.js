import React, { Component } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import TicketListService from "../../services/TicketListService";
import { Link } from "react-router-dom";

export class FinalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNum: "",
      date:"",
      tickets: [],
      clicked: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submithandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    TicketListService.getTicketsByTrainIdAndDate(this.state.trainNum , this.state.date).then((res) => {
      this.setState({
        tickets: res.data,
        clicked: true,
      });
    });
  };

  render() {
    const { trainNum, date } = this.state;
    return (
        <div>
            <h1 className="bg-primary text-white">
          <strong>Enter Train Id to view tickets</strong>
        </h1>
        <p className="container" style={{ width: "60%" }}>
          <form onSubmit={this.submithandler}>
            {/* <input
              type="number"
              name="search"
              id="search"
              value={search}
              autoComplete="off"
              placeholder="Search by trainId...."
              onChange={this.changeHandler}
              style={{ color: "yellow" }}
            ></input> */}

<CardDeck style={{ marginTop: "20px" }}>
                  <Card>
                    <Card.Header
                      className="text-white"
                      style={{ backgroundColor: "#490808" }}
                    >
                      Train Number
                    </Card.Header>
                    <Card.Text>
                      <input
                        type="number"
                        name="trainNum"
                        id="trainNum"
                        autocomplete="off"
                        value={trainNum}
                        placeholder="train Num"
                        onChange={this.changeHandler}
                      ></input>
                    </Card.Text>
                  </Card>

                  <Card>
                    <Card.Header
                      className="text-white"
                      style={{ backgroundColor: "#490808" }}
                    >
                      Date
                    </Card.Header>
                    <Card.Text>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        autocomplete="off"
                        value={date}
                        placeholder="date"
                        onChange={this.changeHandler}
                      ></input>
                    </Card.Text>
                  </Card>

                </CardDeck>

            <Button type="submit" variant="info">
              {" "}
              Search
            </Button>
          </form>
        </p>

        <div  className="row">
        <div className="container">
            <Card className="border border-dark bg-dark text-white" style={{width : '100%', marginTop : '30px'}}>
                <Card.Header className="text-center" style={{fontSize : '20px', backgroundColor: 'green'}}>All Reserved Tickets</Card.Header>
                <Card.Body>
                    <table className="table table-striped table-bordered table-hover table-success">
                        <thead>
                            <tr style={{height : '30px'}}>
                                <th style={{fontSize : '16px'}}><strong>PNR</strong></th>
                                <th style={{fontSize : '16px'}}>TrainID</th>
                                <th style={{fontSize : '16px'}}>Source</th>
                                <th style={{fontSize : '16px'}}>Destination</th>
                                <th style={{fontSize : '16px'}}>Passenger Name</th>
                                <th style={{fontSize : '16px'}}>Seats</th>                                        
                                <th style={{fontSize : '16px'}}>Quota</th>   
                                <th style={{fontSize : '16px'}}>Total Fare</th>                    
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.tickets.length === 0 ?
                                <tr align="center">
                                    <td colSpan="7"><h3 style={{color:"red"}}>OOPS! No Tickets Available!</h3></td>
                                </tr> :
                                        
                                    this.state.tickets.map(
                                        train =>
                                        <tr key={train.pnr} style={{height : '50px'}}>
                                            <td  style={{fontSize : '14px'}}>{train.pnr}</td>
                                            <td  style={{fontSize : '14px'}}>{train.trainId}</td>
                                            <td  style={{fontSize : '14px'}}>{train.source}</td>
                                            <td  style={{fontSize : '14px'}}>{train.destination}</td>
                                            <td  style={{fontSize : '14px'}}>{train.psgName}</td>
                                            <td  style={{fontSize : '14px'}}>{train.seats}</td>
                                            <td  style={{fontSize : '14px'}}>{train.quota}</td>
                                            <td  style={{fontSize : '14px'}}>{train.totalFare}</td>
                                        </tr>
                                    )
                                
                            }
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
        
    </div>
    </div>
    );
  }
}

export default FinalChart;
