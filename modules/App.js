import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Trello</h1>
          <article role="nav">
            <h2 className="board">My Boards</h2>
              <Link to="/about">JS Chat</Link>
          </article>

          {this.props.children}

      </div>
    )
  }
})
