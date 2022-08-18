import {  faTicketAlt, faTrain, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Jumbotron, Card, CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            
            <div className="container">
            <div >
                <Jumbotron className="text-center bg-dark text-info jumbotron" style={{marginTop : "20px"}}>
                    <marquee><h1><strong>Welcome to MyTrainApp</strong></h1></marquee>
                    <p className="text-white">
                        The Perfect train for the Perfect Destinations!
                    </p>
                </Jumbotron>
            </div>
            <CardColumns>
                <Link to="/register">
                    <Card bg="light">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Darjeeling%20Himalayan%20Railways/3.jpg" />
                    <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faUser} />REGISTER NOW! </Card.Title>
                    <Card.Text><strong>
                        Become a part of the MyTrainApp Network by registering yourself.
                            <br/><br/>
                            Kindly Login if already registered.{" "}            
                            </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i>MyTrainApp welcomes you!</i></small>
                    </Card.Footer>
                </Card></Link> 

                <Link to="/trainDetails">
                    <Card bg="dark">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Kangara%20Valley/4.jpg" />
                    <Card.Body>
                    <Card.Title className="text-warning"><FontAwesomeIcon icon={faTrain} /> LOOK FOR TRAINS & FARES!</Card.Title>
                    <Card.Text className="text-white">
                            
                            Get to know the various trains and their fares in our network.
                            <br/><br/>
                            Find train with the most affordable rates!{" "}
                                             
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-white"><i>MyTrainApp welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>

                
                <Link to="/login"><Card bg="light">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Matheran%20Railway/4.jpg" />
                    <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faTicketAlt}/> BOOK YOUR TICKET NOW!</Card.Title>
                    <Card.Text>
                        <strong>                            
                        Check for the appropriate trains and get your ticket now!
                            <br/><br/>
                        Also, cancel tickets with minimum loss!{" "}
                        </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i>MyTrainApp welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>
            </CardColumns>
        </div>
                

                
        
        
        
        </div>
    )
}

export default Home
