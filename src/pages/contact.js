import React from "react"

class Contact extends React.component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    const fields = {"fields": {"Name": this.state.name, "Notes": this.state.notes}}
    fetch("https://api.airtable.com/v0/appVntpV9Sejz9kjg/Projekt ", {
      method: "POST",
      headers: {"Authorization": `Bearer ${process.env.AIRTABLE_API}`,
                "Content-Type": "application/json"},
      body: JSON.stringify(fields)
    })
    .then(() => alert("Form Sent!"))
    .catch(error => alert(error))

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value})

  render() {
    return (
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
    )
  }
}


export default ContactPage