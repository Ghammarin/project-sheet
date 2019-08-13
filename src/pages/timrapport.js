import React from "react"
import { Link } from "gatsby"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    console.log(this.state);

    e.preventDefault();
  }

  handleChange = e => {
	  this.setState({ [e.target.name]: e.target.value});
	}

  
    export default ({data}) => (
      <form>
        <label>
          Name
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Notes
          <input type="text" name="notes" onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  
}
