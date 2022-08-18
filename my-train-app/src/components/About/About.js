import React from 'react'
import { Card, CardDeck, Jumbotron } from 'react-bootstrap'

function About() {
    return (
        <div>
            <div className="container">
                <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "20px"}}>
                    <h2><strong>ABOUT</strong></h2>
                    <p className="text-white">
                        A little insight on this application!
                    </p>
                </Jumbotron>

                

                <CardDeck style={{width  :'90%', marginLeft : '60px'}}>
                    <Card>
                        <Card.Header>
                            <h5><strong>Features</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1442570468985-f63ed5de9086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="300px"/>
                        
                        <Card.Body>
                            <ul>
                                <li>Become a Member and Login</li>
                                <li>View the various trains and their fares</li>
                                <li>Search for any Train</li>
                                <li>Check for available trains</li>
                                <li>Fill in your details and get the ticket</li>
                                <li>Change of plans? No worries! Cancel tickets at any time!</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>MyTrainApp welcomes you!</i></small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                        <h5><strong>Creator's Note</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" height="300px"/>
                        <Card.Body>
                            <ul>
                                <li>Developed by Saurabh S Raut</li>
                                <li>It is an Online Railway Reservation Sytem</li>
                                <li>Developed as a part of Java Full-Stack Training</li>
                                <li>Future improvements and updates will be made</li>
                                <li>Contact me via email : saurabhssr23@gmail.com</li>
                                <li>Checkout my LinkedIn Profile</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>MyTrainApp welcomes you!</i></small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default About
