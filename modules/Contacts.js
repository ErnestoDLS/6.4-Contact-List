import React from 'react'


var ContactData =  {
    image: "path/to/image.jpg",
    name: "Thor",
    email: "email",
    number: "(555)555-5555",
    location: "Asgard",
    {
      image: "path/to/image.jpg",
      name: "Peter Parker",
      email: "spidey_luvs-MJ@gmail.com",
      number: "(555)555-5555",
      location: "Brooklyn,New York",
    },
    {
      image: "path/to/image.jpg",
      name: "Goku",
      email: "icantEATthis@gmail.com",
      number: "(555)555-5555",
      location: "Planet Vegeta"

    },
    {
      image: "path/to/image.jpg",
      name: "Gracie",
      email: "graciethegolden@gmail.com",
      number: "(555)555-5555",
      location: "San Antonio, Texas"
    }

}

export default React.createClass({
  render(){
    return <h1>Contacts</h1>
  }
})
