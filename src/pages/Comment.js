import React from "react"

class Comment extends React.component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    const fields = {"fields": {"Kommentar": this.state.kommentar, "Notes": this.state.notes}}
    fetch("https://api.airtable.com/v0/appVntpV9Sejz9kjg/Projekt", {
      method: "PATCH",
      headers: {"Authorization": `Bearer ${process.env.AIRTABLE_API}`,
                "Content-Type": "application/json"},
      body: JSON.stringify(fields)
    })
    .then(() => alert("Form Sent!"))
    .catch(error => alert(error))

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.kommentar]: e.target.value})

  render() {
    return (
      <form>
        <label>
          Skriv kommentar
          <input type="text" name="kommentar" onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default CommentPage