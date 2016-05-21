import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    <div>
      <h1 className="heading">Hello!</h1>
      <ul role="nav">
        <li><Link to="/contacts">Contacts</Link></li>

      </ul>
      {this.props.children}
    </div>
    )
  }
});

var ContactListItems = React.createClass({
  render(){
    return (
      <li className="ViewAll">
        <a href={"#contacts/" + this.props.contact.id}>
          <img className="Picture" src={"image/to/path" + this.props.contact.firstName + "_" + this.props.contact.lastName + ".jpg"}/>
          <p>{this.props.contact.title}</p>
        </a>
      </li>
    );
  }
});

var ContactList = React.createClass({
  render() {
    var items = this.props.contacts.map(function(contact){
      return (
        <ContactsListItems key={contact.id} contact={contact}/>
      );
    });
    return (
      <ul className="contact-view">
        {items}
      </ul>
    )
  }
});

var HomePage = React.createClass({
  render() {
    return(
      <div className={"page" + this.props.position}>
        <Header text="Contact List" back="false"/>
          <div className="content">
            <ContactList contacts={this.props.contacts}/>
          </div>
      </div>
    )
  }
});

var ContactPage = React.createClass({
  getInitialState() {
    return {contact: {}};
  },
  componentDidMount() {
    this.props.service.findBYID(this.props.contactId).done(function(result){this.setState({contact:result});

  }.bind(this));
},
render(){
  return(
    <div className={"page" + this.props.position}>
      <ul className="table-view>">
        <li className="table-view-cell">
          <img className="Picture" src={"pics/" + this.state.contact.firstName + "_" + this.state.contact.lastName + "jpg"}/>
          <h1>{this.state.contact.firstName} {this.state.conact.lastName}</h1>
          <p>{this.state.contact.number}</p>
        </li>
      </ul>
    </div>
  )
}
})
