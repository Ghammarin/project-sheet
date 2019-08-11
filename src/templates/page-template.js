import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
  <main>
        <h3>{data.airtable.data.projekt}</h3><hr/>
		</main>
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
				Bokad_utrustning
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