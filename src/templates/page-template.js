import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
  <main>
        <h3>{data.airtable.data.projekt}</h3><hr/>
		</main>

		<section>
				<aside>
		<h5>Kontaktperson hos kund:</h5>
		<div>{(data.airtable.data.KONTAKTPERSON||[]).map((person, i) =>(
			<div key={i}>
				<p>{data.airtable.data.KONTAKTPERSON[i].data.Namn}</p>
				<p>{data.airtable.data.KONTAKTPERSON[i].data.Telefonnummer}</p>
				<small>{data.airtable.data.KONTAKTPERSON[i].data.Mailadress}</small>
			</div> 
		))}</div>
		</aside>
			<p>Projektansvarig: {data.airtable.data.Projektansvarig[0].data.Namn}</p>
			<h5>Personal bokad:</h5>
				
			<ul>{(data.airtable.data.Personalbokning||[]).map((rad, i) =>(
				<div id="personal">
				<li key={i}>{data.airtable.data.Personalbokning[i].data.Bokad_personal[0].data.Namn}</li>
				</div>				
			))}</ul>
			
			<h5>Packlista!</h5>
			<ul>{(data.airtable.data.Bokat||[]).map((rad, i) =>(
			<li key={i}>{data.airtable.data.Bokat[i].data.Bokad_utrustning}</li>
			))}</ul>	
			
			<h5>Kommentar</h5>
			<ul>{(data.airtable.data.Bokat||[]).map((rad, i) =>(
			<li key={i}>{data.airtable.data.Bokat[i].data.Kommentar}</li>
			))}</ul>

			<div>
			<h5>Anteckningar</h5>
				<p>{data.airtable.data.ANTECKNINGAR}</p>
			</div>
			
		</section>

			
			
		
  </Layout>
  
 
)

export const query = graphql`
  query GetPage($Path: String!) {
    airtable(table: { eq: "Projekt" }, data: { PROJEKTNAMN: { eq: $Path } }) {
      data {
      		projekt
		PROJEKTNAMN
       		ANTECKNINGAR
		Plats{
			data{
				Platsnamn
				}
		}
		Bokat{
			data{
				Inventarielista{
					data{
						Namn
						Produktnamn
						Description
					}
				}
				Bokad_utrustning
				Kommentar
			}
		}
		Projektansvarig{
			data{
				Namn
    			}
  		}
	  	Personalbokning{
			data{
				Bokad_personal{
					data{
						Namn
						Starttid(formatString: "DD/MM HH:mm")
						Sluttid(formatString: "DD/MM HH:mm")
    					}
  				}
			}
		}
		KONTAKTPERSON{
			data{
				Namn
				Telefonnummer
				Mailadress
    			}
  		}
		Kommentar
  	}
 }
}
  
`
class Contact extends React.component {
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
    return() (
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


