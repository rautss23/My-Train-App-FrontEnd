import React, { Component } from 'react'
import axios from 'axios'
import {Jumbotron, Card, CardDeck, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export class MyBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookings : [],
             pnr : ""
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:8081/myBookings", { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} }).then((res) => {
            this.setState({
                bookings : res.data
            })
        })
    }

    cancelTicket = (pnr) => {
        axios.delete("http://localhost:8083/cancel/" + pnr, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((response) => {
            if(response.data != null){
                alert('Ticket Cancelled Successfully!')
                this.setState({
                    bookings: this.state.bookings.filter(train => train.pnr !== pnr)
                })
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="container">                                                        
                    <Card bg="#227380" className="text-center text-info" style={{width : '50%', marginLeft : '260px', marginTop : '20px', paddingTop :'20px', borderRadius : '50px'}}>
                        <Card.Title><h1><strong>My Bookings</strong></h1></Card.Title>
                    </Card>
                </div>

                {this.state.bookings.length === 0 ? 
                    <Jumbotron className="bg-dark text-white jumbotron" style={{marginTop : '15px'}}>
                        <h2>No Bookings Yet!</h2>                    
                    </Jumbotron> :
                this.state.bookings.map( train =>
                    <Card key={train.pnr} style={{marginTop : '30px', width : "50%"}}>
                                                    <Card.Header className="text-black" style={{backgroundColor : 'yellow'}}>
                                                        <div>
                                                       <strong>PNR:{train.pnr} &nbsp;&nbsp;&nbsp;&nbsp;Number:{train.trainId}&nbsp;&nbsp;&nbsp;&nbsp;Name:{train.name} &nbsp;&nbsp;&nbsp;&nbsp; Date : {train.date}
                                                       <Button size="sm" variant="outline-danger" style={{marginLeft : '400px', borderRadius : '20px'}} onClick={this.cancelTicket.bind(this, train.pnr)}>CANCEL { " " }<FontAwesomeIcon icon={faTrash} /></Button>
                                                       </strong>
                                                       </div>
                                                    </Card.Header>
                                                    
                                                    {/* <Card.Text>
                                                        <br/>
                                                        <CardDeck style={{marginLeft : '5px', marginRight : '5px', color : 'white'}}>

                                                            
                                                            <Card style={{backgroundColor : "#99934d"}}> */}
                                                            <div className="card bg-dark text-white">
  {/* <div className="row">
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px'}}>Number :    {train.trainId}</div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px'}}>Train Name:     {train.name}</div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px'}}>Date : {train.date}</div>
  </div> */}
   <img src="https://t4.ftcdn.net/jpg/04/62/43/35/360_F_462433557_30Rp4CXQe8nfoTUmQPRXSqdep5EvWCLh.jpg" style={{ height:200}} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <div className="row">
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px' , color:'brown'}}><strong>From :     {train.source}</strong></div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>To :     {train.destination}</strong></div>
   </div>
    <div className="row">
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Seats :    {train.seats}</strong></div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Pass. Name : {train.psgName}</strong></div>
    </div>

    <div className='row'>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Arrival Time :    {train.arrivalTime}</strong></div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Departure Time :     {train.departureTime}</strong></div>
  </div>

    <div className='row'>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Quota :    {train.quota}</strong></div>
    <div className="col" style={{marginInlineEnd : "10px", paddingTop : '20px', color:'brown'}}><strong>Total Fare :     {train.totalFare}</strong></div>
  </div>
  </div>
</div>
                                                                {/* <Card.Title style={{marginInlineEnd : "10px", paddingTop : '20px'}}>Number :    {train.trainId}</Card.Title>
                                                                <Card.Title style={{marginInlineEnd : "10px",}}>Train :     {train.name}</Card.Title>     
                                                                <Card.Title style={{marginInlineEnd : "10px",}}>Date : {train.date}</Card.Title>                                                          
                                                            </Card>

                                                            <Card style={{backgroundColor : "#99934d"}}>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>From :     {train.source}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px"}}>To :     {train.destination}</Card.Title>                                                                 */}
                                                            {/* </Card> */}

                                                            

                                                            {/* <Card style={{backgroundColor : "#99934d"}}> */}
                                                                {/* <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>Seats :    {train.seats}</Card.Title> */}
                                                                
                                                            {/* </Card> */}

                                                            {/* <Card style={{backgroundColor : "#99934d"}}> */}
                                                                {/* <Card.Title style={{marginLeft : "10px",}}>Pass. Name : {train.psgName}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>Quota :    {train.quota}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px",}}>Total Fare :     {train.totalFare}</Card.Title> */}
                                                            {/* </Card> */}
                                                         {/* </CardDeck> */}
                                                        
                                                     {/* </Card.Text> */}

                                                    <Card.Footer>
                                                        <small className="text-muted"><b>Travel Safe: Use Masks & Sanitizers during travel!</b></small>
                                                    </Card.Footer>


                                                </Card>
                 ) }
            </div>
        )
    }
}

export default MyBookings
