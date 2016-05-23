import React from 'react'


var contacts = [
    {"id": 0, "firstName": "Peter", "lastName": "Parker", "number": "555-555-5555", "email": "spidey_luvs-MJ@gmail.com", "city": "Brooklyn, NY", "pic": "Peter_parker.jpg"},
    {"id": 1, "firstName": "Bill", "lastName": "Murray", "number": "555-555-5555", "email": "ghostbusters_rulz@gmail.com", "city": "San Antonio, TX", "pic": "Bill_muarry.jpg"},
    {"id": 2, "firstName": "Bruce", "lastName": "Lee", "number": "555-555-5555", "email": "little__dragon@gmail.com", "city": "Seattle, WA", "pic": "Bruce_lee.jpg",},
    {"id": 3, "firstName": "Tom", "lastName": "Brady","number": "555-555-5555", "email": "GOAT@gmail.com", "city": "Boston, MA", "pic": "Tom_brady.jpg"},

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


    exports.findAll = function (req, res, next) {
        var name = req.query.name;
        if (name) {
            res.send(employees.filter(function(employee) {
                return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
            }));
        } else {
            res.send(employees);
        }
    }

    exports.findById = function (req, res, next) {
        var id = req.params.id;
        res.send(employees[id]);
    };
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
