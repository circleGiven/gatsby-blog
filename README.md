### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/circleGiven/gatsby-blog)

## How to configure Google Analytics

Edit `gatsby-config.js` and add your tracking ID

```javascript
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'UA-XXXX-Y',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    },
},
```

## How to edit your site title and description

Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```

## How to adjust pagination

In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.
