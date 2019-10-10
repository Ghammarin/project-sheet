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
			<h5>Projektansvarig:</h5>
			<div>{data.airtable.data.Projektansvarig[0].data.Namn}</div>
			<h5>Personal bokad:</h5>
				
			<ul>{(data.airtable.data.Personalbokning||[]).map((rad, i) =>(
				<div id="personal">
				<li key={i}>{data.airtable.data.Personalbokning[i].data.Bokad_personal[0].data.Namn}{data.airtable.data..Personalbokning[i].data.Bokad_personal[0].data.Namn.Starttid}{data.airtable.data..Personalbokning[i].data.Bokad_personal[0].data.Namn.Sluttid}</li>
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
		</section>
		<comment>
			<div>
			<h5>Prylar</h5>
				<p>{data.airtable.data.PRYLAR}</p>
			<h5>Anteckningar</h5>
				<p>{data.airtable.data.ANTECKNINGAR}</p>
			</div>
		</comment>	
		
  </Layout>
)

export const query = graphql`
  query GetPage($Path: String!) {
    airtable(table: { eq: "Projekt" }, data: { PROJEKTNAMN: { eq: $Path } }) {
      data {
      		projekt
		PROJEKTNAMN
		PRYLAR
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
  	}
 }
}
  
`


