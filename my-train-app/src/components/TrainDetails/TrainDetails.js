import React, { Component } from 'react'
import TrainListService from '../../services/TrainListService'
import {Link} from 'react-router-dom'
import {Card, CardDeck, Accordion, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDollarSign, faTrain , faUser, faTicketAlt, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

export class TrainDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             trains : []
        }
    }
    
    componentDidMount(){
        TrainListService.getTrains().then((res) => {
            this.setState({trains : res.data});
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                <Accordion>     
                    <Card className="border border-dark bg-black text-white" style={{marginTop : '30px'}}>
                        <Card.Header className="text-center" style={{ backgroundColor: 'dark'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <strong style={{fontSize : '16px'}}><FontAwesomeIcon icon={faTrain} />{"    "}CLICK HERE TO SEE ALL TRAINS!</strong>
                            </Accordion.Toggle>   
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body><strong>
                            <table className="table table-striped table-bordered table-hover table-light">
                                <thead>
                                    <tr style={{height : '30px'}}>
                                        <th style={{fontSize : '16px'}}><strong>ID</strong></th>
                                        <th style={{fontSize : '16px'}}>Name</th>
                                        <th style={{fontSize : '16px'}}>Source</th>
                                        <th style={{fontSize : '16px'}}>Destination</th>
                                        <th style={{fontSize : '16px'}}>Arrival Time</th>
                                        <th style={{fontSize : '16px'}}>Departure Time</th>
                                        
                                       
                                    </tr>
                                </thead>
 
                                <tbody>
                                    {this.state.trains.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="8"><h3>OOPS! No Trains Available!</h3></td>
                                        </tr> :
                                                
                                            this.state.trains.map(
                                                train =>
                                                <tr key={train.trainId} style={{height : '50px'}}>
                                                    <td  style={{fontSize : '14px'}}>{train.trainId}</td>
                                                    <td  style={{fontSize : '14px'}}><FontAwesomeIcon icon={faTrain} />     {train.name}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.source}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.destination}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.arrivalTime}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.departureTime}</td>
                                                    
                                                    
                                                </tr>
                                            )
                                        
                                    }
                                </tbody>
                            </table></strong>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                    

                    <Card className="border border-dark bg-dark text-white" style={{marginTop : "5px"}} >
                        <Card.Header className="text-center" style={{fontSize : '20px'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <strong style={{fontSize : '16px'}}><FontAwesomeIcon icon={faDollarSign} /> Fare-Table for all Trains</strong>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <table className="table table-striped table-bordered table-hover table-light">
                                    <thead>
                                        <tr style={{height : '30px'}}>
                                            <th style={{fontSize : '16px'}}><strong>ID</strong></th>
                                            <th style={{fontSize : '16px'}}><strong>Name</strong></th>
                                            <th style={{fontSize : '16px'}}><strong>Duration</strong></th>
                                            <th style={{fontSize : '16px'}}><strong>Fare(General)</strong></th>
                                            <th style={{fontSize : '16px'}}><strong>Fare(Ladies)</strong></th>                                        
                                            
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        {this.state.trains.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="6"><h3>OOPS! No Trains Available!</h3></td>
                                            </tr> :
                                                    
                                                this.state.trains.map(
                                                    train =>
                                                    <tr key={train.trainId} style={{height : '50px'}}>
                                                        <td  style={{fontSize : '14px'}}>{train.trainId}</td>
                                                        <td  style={{fontSize : '14px'}}>{train.name}</td>
                                                        <td  style={{fontSize : '14px'}}>{train.duration}</td>
                                                        <td  style={{fontSize : '14px'}}>{train.generalFare}</td>
                                                        <td  style={{fontSize : '14px'}}>{train.ladiesFare}</td>
                                                        
                                                    </tr>
                                                )
                                            
                                        }
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
                <div className="container" style={{marginTop : '40px'}}>
                    <CardDeck>
                        
                            <Card className="text-black">
                            <Link to="/register">
                                <Card.Header className="text-black">
                                    <strong><FontAwesomeIcon icon={faUser}/>{" "} REGISTER NOW!</strong>                             
                                </Card.Header>
                            </Link>
                                <Card.Body>
                                    Become a part of the Get-UR-Train Network by registering yourself.<br/>
                                </Card.Body>

                                <Card.Footer>

                                </Card.Footer>
                            </Card>
                        <Card bg="dark" className="text-white">
                            <Card.Header>
                                <strong><FontAwesomeIcon icon={faShoppingBasket}/>{" "} SPECIAL OFFERS! *</strong>                             
                            </Card.Header>

                            <Card.Body>
                                Exclusive offers to our regular customers! Stay tuned for upcoming special offers.<br/>
                            </Card.Body>

                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Link to="/login"><Card.Header>
                                <strong><FontAwesomeIcon icon={faTicketAlt}/>{" "} BOOK NOW!</strong>                             
                            </Card.Header>
                            </Link>
                            <Card.Body>
                                Check for the appropriate trains and get your ticket now!<br/>
                            </Card.Body>

                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
                </div>

                <div className="container" style={{marginTop : '30px'}}>
                        <img src="https://promotions.mobikwik.com/irctc/images/banner_2n.jpg?v=1"
                        alt="Advertisement" height="180px" width="100%"></img>
                    </div>
                
                
            </div>
        )
    }
}

export default TrainDetails
