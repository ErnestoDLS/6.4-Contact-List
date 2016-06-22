import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    var detail = this.props.params;

    return(
      <div>
        <div className="detail__head">
          <h2><Link to="/"><i className="fa fa-arrow-left"/></Link></h2>
          <img className="detail__img" src="{`/images/${detail.image}`}"/>
        </div>
          <ul className="detail__items">
            <li className="detail__li detail__name"><i className="fa fa-user"/>{detail.name}</li>
            <li className="detail__li"><i className="fa fa-envelope"/>{detail.email}</li>
            <li className="detail__li"><i className="fa fa-mobile"/>{detail.phone}</li>
            <li className="detail__li"><i className="fa fa-globe"/>{detail.location}</li>
          </ul>
      </div>
    )
  }
})
