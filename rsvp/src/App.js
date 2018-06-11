import React, { Component } from 'react';
import './App.css';
import MainContent from './MainContent';
import Header from './Header';





class App extends Component {

state ={
  isFiltered: false,
  pendingGuest: "",
  guests:[
    {
      name:'Sam Liu',
      isConfirmed:false,
      isEditing: false
    },
    {
      name:'Nick Wong',
      isConfirmed:true,
      isEditing: false
    }, 
    {
      name:'Jerry',
      isConfirmed:false,
      isEditing: true
    },    
  ]
}


toggleConfirmationAt = index => 
this.toggleGuestPropertyAt("isConfirmed", index);

removeGuestAt = index =>
this.setState({
  guests:[
    ...this.state.guests.slice(0, index),
    ...this.state.guests.slice(index + 1)

 ]
})

toggleEditingAt = index => 
this.toggleGuestPropertyAt("isEditing", index);

toggleGuestPropertyAt = (property, indexToChange) => 
this.setState({
    guests: this.state.guests.map((guest, index) =>{
        if(index === indexToChange){
           return {
                ...guest,
                [property]: !guest[property]
           }
        }
        return guest;
    })
});

setNameAt = (name, indexToChange) => 
this.setState({
    guests: this.state.guests.map((guest, index) =>{
        if(index === indexToChange){
           return {
                ...guest,
                name
           }
        }
        return guest;
    })
});



toggleFilter = () =>
this.setState({ isFiltered: !this.state.isFiltered});

handleNameInput = e =>
this.setState({ pendingGuest: e.target.value });


newGuestSubmitHandler = e =>{
  e.preventDefault();
  this.setState({
    guests: [
      {
        name:this.state.pendingGuest,
        isConfirmed: false,
        isEditing:false
      },
      ...this.state.guests
    ],
    pendingGuest: ''
  });
}

getTotalInvited = () => 
this.state.guests.length;

getAttendingGuests = () =>
this.state.guests.reduce(
  (total,guest) => guest.isConfirmed ? total + 1: total,
  0
);
//getUnconfirmedGuestes = () =>



  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">


      <Header
         newGuestSubmitHandler={this.newGuestSubmitHandler}
         pendingGuest={this.state.pendingGuest}
         handleNameInput={this.handleNameInput}
         />

         <MainContent
           toggleFilter={this.toggleFilter}
           isFiltered={this.state.isFiltered}
           totalInvited={totalInvited}
           numberAttending={totalInvited}
           numberUnconfirmed={numberUnconfirmed}
           guests={this.state.guests}
           toggleConfirmationAt={this.toggleConfirmationAt}
           toggleEditingAt={this.toggleEditingAt}
           setNameAt={this.setNameAt}
           removeGuestAt={this.removeGuestAt}
           pendingGuest={this.state.pendingGuest}
          />
    </div>
    );
  }
}

export default App;
