module.exports = {
  siteMetadata: {
    title: `SoundLevel`,
    description: `Infoblad för varje projekt, data hämtas från Airtable`,
    author: `Arne`,
  },
  pathPrefix: `/internt/react_Arnetestar/Gatsby`,
  plugins: [
  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    'gatsby-transformer-remark',
  
    {
  resolve: 'gatsby-source-airtable',
  options: {
    apiKey: 'keyEmPlXlN7GLHT4d',
	tables: [
          {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Projekt`,
            tableView: `Programmeringsvy`,
			defaultValues: [`KUND`,`Plats`,`KONTAKTPERSON`,`Projektansvarig`,`Personalbokning`,`Bokat`,`Omkostnader`,`ANTECKNINGAR`,`BILAGOR`,`Yearly`,`Kommentar`],
            mapping: { 'Bokat': `array`  },
			tableLinks: [`Plats`,`Bokat`,`Projektansvarig`,`Personalbokning`,`KONTAKTPERSON`]
          },
		  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Platser`,
            tableView: `All`,
			defaultValues: [`Platsnamn`,`Adress`,`Telefonnummer`,`Attachments`,`Info`],
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`]
          },
		  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Bokningsrader`,
            tableView: `Programmeringsvy`,
			defaultValues: [`F_rdiga_kit`,`Inventarielista`,`Kommentar`,`Antal_bokat`,`Pris`,`Bokad_utrustning`,`Klart?`,`Antal_i_kit`],
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`, `Inventarielista`]
          },
		  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Personal`,
            tableView: `All`,
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`]
          },
		  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Personalbokning`,
            tableView: `All`,
			defaultValues: [`Bokad_personal`,`Antal_timmar`,`Starttid`,`Sluttid`],
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`,`Bokad_personal`]
          },
		  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Kontaktpersoner`,
            tableView: `All`,
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`]
          },
				  {
            baseId: `appVntpV9Sejz9kjg`,
            tableName: `Inventarielista`,
            tableView: `All`,
			defaultValues: [`Namn`,`Produktnamn`,`Description`],
//            mapping: { 'ANTECKNINGAR': `text/markdown` },
			tableLinks: [`Projekt`]
          },

         ],
  }
},
	
`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  
  ],//plugins
}
