// import React from 'react'
// import {Link} from 'react-router'
//
// export default React.createClass({
//   getDefaultProps(){
//     return {
//       contacts: [
//         {
//           contact_name: "Peter Parker",
//           contact_image: "avatar",
//           contact_email: "spideyluvsMJ@yahoo.com",
//           contact_phone: "(830)-324-3456",
//           contact_location: "Queens,NY"
//         },{
//           contact_name: "Steve Rogers",
//           contact_image: "avatar",
//           contact_email: "usacap@yahoo.com",
//           contact_phone: "(123)-324-3456",
//           contact_location: "Brooklyn,NY"
//         },{
//           contact_name: "Bruce Lee",
//           contact_image: "avatar",
//           contact_email: "be_water@yahoo.com",
//           contact_phone: "(210)-324-3456",
//           contact_location: "Seattle,WA"
//         },{
//           contact_name: "Tupac Shakur",
//           contact_image: "avatar",
//           contact_email: "thugLIFE@yahoo.com",
//           contact_phone: "(555)-324-3456",
//           contact_location: "Baltimore,MD"
//         }
//       ]
//     }
//   },
//
//   render() {
//     return(
//       <ul className="contacts__list">
//         {this.props.contacts.map(function(contact, i){
//           console.log(contact);
//           return <li key={i} className="contact__li">
//             <Link to={`/Detail/${contact.contact_image}/${contact.contact_name}/${contact.contact_email}/${contact.contact_phone}/${contact.contact_location}`}>
//               <img className="contact__image--preview" src={`../images/${contact.contact_image}.png `}/>
//               <h2 className="contact__name--preview">{contact.contact_contact_name}</h2>
//             </Link>
//           </li>
//         })}
//       </ul>
//     )
//   }
// })
