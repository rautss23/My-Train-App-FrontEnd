import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form, Col, Card, Jumbotron,Alert} from 'react-bootstrap'
 

export class AddTrain extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            trainId : "",
            name : "",
            source : "",
            destination : "",
            departureTime : "",
            arrivalTime : "",
            duration : "",
            seatsLeft : "",
            generalFare : "",
            ladiesFare : "",
            
            errors:{
                trainIdError:"",
                nameError:"",
                sourceError:"",
                destinationError:"",
                departureTimeError:"",
                arrivalTimeError:"",
                durationError:"",
                seatsLeftError:"",
                generalFareError:"",
                ladiesFareError:"",
                
            },
            response : "",
       }
     
   }

   changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
        errors: {
            trainIdError:"",
            nameError:"",
            sourceError:"",
            destinationError:"",
            departureTimeError:"",
            arrivalTimeError:"",
            durationError:"",
            seatsLeftError:"",
            generalFareError:"",
            ladiesFareError:"",
        },
        [name]: value,
      });
    };

    validateForm = () => {
        let valid = true;
        let er = this.state.errors;
        if (this.state.trainId < 1 || this.state.trainId > 999999) {
          er.trainIdError = "Enter valid Id! "; 
        }
        if (this.state.name.length < 5 || this.state.name.length > 15) {
          er.nameError = "Enter valid name!";
        }
        if (this.state.source.length < 3 || this.state.source.length > 15) {
          er.sourceError = "Enter valid source name!";
        }
        if (this.state.destination.length < 3 || this.state.destination.length > 15) {
          er.destinationError = " Enter valid Destination!!!";
        }
         if (this.state.departureTime < 1 || this.state.departureTime > 2359) {
            er.departureTimeError = " Enter valid departureTime!!!";
          }
          if (this.state.arrivalTime < 1 || this.state.arrivalTime > 2359) {
            er.arrivalTimeError = "Enter valid arrivalTime!!";
          }
          if (this.state.duration < 1) {
            er.durationError = "Duration Required!!!";
          }
          if (this.state.seatsLeft < 400 || this.state.seatsLeft > 1000) {
            er.seatsLeftError = "Enter valid Seats!";
          }
          if (this.state.generalFare < 1) {
            er.generalFareError = "generalFare cannot be Empty or Negative!";
          }
          if (this.state.ladiesFare < 1) {
            er.ladiesFareError = "ladiesFare cannot be Empty or Negative!";
          }
        this.setState({
          errors: er,
        });
        Object.values(this.state.errors).forEach(
          // if we have an error string set valid to false
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      };

      submitHandler = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
          axios.post("http://localhost:8082/addTrains", this.state,{ headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} }).then((res) => {
            this.setState({
              response: res.data,
            });
          });
          
        }
        
      };



   handleChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
   }




   
    render() {

        const {trainId, name, source, destination,
            departureTime, arrivalTime, duration, seatsLeft, generalFare, ladiesFare} = this.state;
        return (
            <div>
                {this.state.response === '' ?
                <div className="container">
                    <Card bg="light" style={{width : '80%', marginLeft : '100px', marginTop : '20px'}}>
                        <Card.Header className="text-center" style={{height : '50px', fontSize: '22px', color: 'darkred'}}>ADD A NEW TRAIN!</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTrainId">
                            {this.state.errors.trainIdError && (
                          <Alert variant="danger">
                            {this.state.errors.trainIdError}
                          </Alert>
                        )}
                                <Form.Label>Train ID</Form.Label>
                                <Form.Control type="text" name="trainId" id="trainId" value={trainId} autocomplete="off" placeholder="Train Id" onChange={this.changeHandler}  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                            {this.state.errors.nameError && (
                          <Alert variant="danger">
                            {this.state.errors.nameError}
                          </Alert>
                        )}
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" id="name" value={name} autocomplete="off" placeholder="Train Name" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSource">
                            {this.state.errors.sourceError && (
                          <Alert variant="danger">
                            {this.state.errors.sourceError}
                          </Alert>
                        )}
                                <Form.Label>Source</Form.Label>
                                <Form.Control type="text" name="source" id="source" value={source} autocomplete="off" placeholder="Source" onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDestination">
                            {this.state.errors.destinationError && (
                          <Alert variant="danger">
                            {this.state.errors.destinationError}
                          </Alert>
                        )}
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" name="destination" id="destination" value={destination} autocomplete="off" placeholder="Destination" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridArrivalTime">
                            {this.state.errors.arrivalTimeError && (
                          <Alert variant="danger">
                            {this.state.errors.arrivalTimeError}
                          </Alert>
                        )}
                                <Form.Label>Arrival Time</Form.Label>
                                <Form.Control type="text" name="arrivalTime" id="arrivalTime" value={arrivalTime} autocomplete="off" placeholder="Arrival" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDepartureTime">
                            {this.state.errors.departureTimeError && (
                          <Alert variant="danger">
                            {this.state.errors.departureTimeError}
                          </Alert>
                        )}
                                <Form.Label>Departure Time</Form.Label>
                                <Form.Control type="text" name="departureTime" id="departureTime" value={departureTime} autocomplete="off" placeholder="Departure" onChange={this.changeHandler} />
                            </Form.Group>

                            

                            <Form.Group as={Col} controlId="formGridDuration">
                            {this.state.errors.durationError && (
                          <Alert variant="danger">
                            {this.state.errors.durationError}
                          </Alert>
                        )}
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="number" name="duration" id="duration" value={duration} autocomplete="off" placeholder="Duration" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridGeneral">
                            {this.state.errors.generalFareError  && (
                          <Alert variant="danger">
                            {this.state.errors.generalFareError}
                          </Alert>
                        )}
                                <Form.Label>Fare (General)</Form.Label>
                                <Form.Control type="number" name="generalFare" id="generalFare" value={generalFare} autocomplete="off" placeholder="Fare" onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLadies">
                            {this.state.errors.ladiesFareError && (
                          <Alert variant="danger">
                            {this.state.errors.ladiesFareError}
                          </Alert>
                        )}
                                <Form.Label>Fare (Ladies)</Form.Label>
                                <Form.Control type="number" name="ladiesFare" id="ladiesFare" value={ladiesFare} autocomplete="off" placeholder="Fare" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        
                        <Form.Group controlId="formGridSeats">
                            <Form.Label>Total Seats</Form.Label>
                            {this.state.errors.seatsLeftError && (
                          <Alert variant="danger">
                            {this.state.errors.seatsLeftError}
                          </Alert>
                        )}
                            <Form.Control type="number" name="seatsLeft" id="seatsLeft" value={seatsLeft} autocomplete="off" onChange={this.changeHandler} />
                        </Form.Group>

    
                        <div className="text-center">
                            
                            <input
                        type="submit"
                        className="btnRegister"
                        value="ADD"
                        onClick={this.submitHandler}
                      />
                        </div>
                    </Form>
                    </Card.Body>
                    </Card>
                </div> :
                <div className="container">
                <Link to="/admin"><Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px"}}>
                    <h2><strong>{this.state.response}</strong></h2>
                    
                </Jumbotron></Link> </div>}
            </div>
        )
    }
}

export default AddTrain
