import axios from 'axios'
import React, { Component } from 'react'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


export class UsersTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:8081/allUsers",{ headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((response) => {
            this.setState({
                users : response.data
            })
        })
    }

    deleteUser = (username) => {
        axios.delete("http://localhost:8081/removeUser/" + username, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((response) => {
            if(response.data != null){
                alert('User Deleted Successfully!')
                this.setState({
                    users: this.state.users.filter(user => user.username !== username)
                })
            }
        })
    }
    
    render() {
        return (
            <div  className="row">
                <div className="container">
                    <Card className="border border-dark bg-dark text-white" style={{width : '100%', marginTop: '30px'}}>
                        <Card.Header className="text-center" style={{fontSize : '20px', backgroundColor: 'red'}}>Remove User</Card.Header>
                        <Card.Body>
                            <table className="table table-striped table-bordered table-hover table-success">
                                <thead>
                                    <tr style={{height : '30px'}}>
                                        <th style={{fontSize : '16px'}}><strong>USERNAME</strong></th>
                                        <th style={{fontSize : '16px'}}>Name</th>
                                        <th style={{fontSize : '16px'}}>Age</th>
                                        <th style={{fontSize : '16px'}}>Gender</th>
                                        <th style={{fontSize : '16px'}}>Email</th>
                                        <th style={{fontSize : '16px'}}>Contact</th>
                                        {/* <th style={{fontSize : '16px'}}>Seats</th> */}
                                        <th style={{fontSize : '16px'}}>Action</th>                     
                                    </tr>
                                </thead>
 
                                <tbody>
                                    {this.state.users.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="8"><h3>OOPS! No users Available!</h3></td>
                                        </tr> :
                                                
                                            this.state.users.map(
                                                user =>
                                                <tr key={user.username} style={{height : '50px'}}>
                                                    <td  style={{fontSize : '14px'}}>{user.username}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.name}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.age}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.gender}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.email}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.contact}</td>
                                                    {/* <td  style={{fontSize : '14px'}}>{user.departureTime}</td>
                                                    <td  style={{fontSize : '14px'}}>{user.seatsLeft}</td> */}
                                                    <td>
                                                    <ButtonGroup>
                                                        {/* <Link to={"updateTrain/"+ user.username} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '} */}
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this, user.username)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </ButtonGroup>
                                                    </td>
                                                </tr>
                                            )
                                        
                                    }
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        )
    }
}

export default UsersTable
