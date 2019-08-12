import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
	const post = data.airtable.data
	return(
  <Layout>
  <main>
        <h3>{post.projekt}</h3><hr/>
		</main>
	<section>
	<p>Projektansvarig: {post.Projektansvarig[0].data.Namn}</p>
			<h5>Personal bokad:</h5>
	
		<ul>{post.Personalbokning.map((rad, i) =>(
		<li key={i}>{post.Personalbokning[i].data.Bokad_personal[0].data.Namn}</li>
		))}</ul>
		<h5>Packlista!</h5>
		<ul>{post.Bokat.map((rad, i) =>(
		<li key={i}>{post.Bokat[i].data.Bokad_utrustning}</li>
		))}</ul>
		<p>{post.Bokat[0].data.Kommentar}</p>
		<p>{post.ANTECKNINGAR}</p>
		</section>
		<aside>
		<h5>Kund:</h5>
		<div>{post.KONTAKTPERSON.map((person, i) =>(
			<div key={i}>
				<p>{post.KONTAKTPERSON[i].data.Namn}</p>
				<p>{post.KONTAKTPERSON[i].data.Telefonnummer}</p>
				<small>{post.KONTAKTPERSON[i].data.Mailadress}</small>
			</div> 
		))}</div>
		</aside>
	
  </Layout>
)
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
  }
	}
  }
  
`
