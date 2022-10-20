import React, { Component } from 'react'

export class PassengerForm extends Component {
    state={
        Passenger:[{name:"",age:"",gender:""}]
    }

    handleChange=(e)=>{
        if(["name"].includes(e.target.className)){
            let Passenger=[...this.state.Passenger]
            Passenger[e.target.dataset.id][e.dataset.target.className]=e.target.value.toUpperCase()
            this.setState({Passenger},()=>console.log(this.state.Passenger))
        }else{
            this.setState({[e.target.name]:e.target.value.toUpperCase()})
        }
    }

    addPassenger=(e)=>{
        this.setState((prevState)=>({
            Passenger:[...prevState.Passenger,{name:"",age:"",gender:""}]
        }))
    }

    handleSubmit=(e)=>{e.preventDefault()}

  render() {
    const{Passenger}=this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label> 
        {/* <input type="text" name="owner" id="owner" value={owner} /> */}
        <label htmlFor="description">Description</label> 
        {/* <input type="text" name="description" id="description" value={description} /> */}
        <button onClick={this.addPassenger}>Add new cat</button>
        {
          Passenger.map((val, idx)=> {
            let catId = `cat-${idx}`, ageId = `age-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                <input
                  type="text"
                  name={catId}
                  data-id={idx}
                  id={catId}
                  value={Passenger[idx].name} 
                  className="name"
                />
                <label htmlFor={ageId}>Age</label>
                <input
                  type="text"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  value={Passenger[idx].age} 
                  className="age"
                />
              </div>
            )
          })
        }
        <input type="submit" value="Submit" />  
        </form> 
      </div>
    )
  }
}

export default PassengerForm
