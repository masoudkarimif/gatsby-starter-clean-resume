# gatsby-starter-clean-resume

Build an online version of your resume in just a few minutes with this clean-resume boilerplate.

Check out the live demo [here](https://gatsby-starter-clean-resume.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/49be9899-b238-49c1-8de3-3f0de450d5bf/deploy-status)](https://app.netlify.com/sites/gatsby-starter-clean-resume/deploys)

Based on [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world). This project uses the [Milligram](https://github.com/milligram/milligram) framework for styling.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/masoudkarimif/gatsby-starter-clean-resume)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/masoudkarimif/gatsby-starter-clean-resume)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the clean-resume starter.

    ```shell
    # create a new Gatsby site using the clean-resume starter
    gatsby new my-resume-starter https://github.com/masoudkarimif/gatsby-starter-clean-resume
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-resume-starter/
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!


    Open the `my-resume-starter` directory in your code editor of choice and edit `gatsby-config.js`. Save your changes and the browser will update in real time!

## Customizing `gatsby-config.js`

All the information that appear on your resume is in this file. With solely changing the content of this file, you can customize the whole website. There's no need to change any other part of the code--although you're more than welcome to do so :)

1. **Name, contact, and social media**

   ```shell
   name: `Luke Skywalker`,
   role: `Software Developer`,
   email: `luke@thelightside.com`,
   socialMedia : [
       {"name": "github", "link": "https://github.com"},
       {"name": "linkedin", "link": "https://linkedin.com"},
       {"name": "facebook", "link": "https://facebook.com"},
       {"name": "twitter", "link": "https://twitter.com"},
       {"name": "instagram", "link": "https://instagram.com"},
     ],
   ```

   You can simply delete any social link you want by removing the corresponding object (line) and it won't appear on your website. You can also add more social media links. This project uses the [react-social-icons](https://www.npmjs.com/package/react-social-icons) library. You can find the list of supported icons [here](http://jaketrent.github.io/react-social-icons/).

<br/>

2. **About**

   ```shell
   about: `<p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala,
    Luke Skywalker was born along with his twin sister Leia in 19 BBY.</p>
    <p>More info <a href="https://starwars.fandom.com/wiki/Luke_Skywalker">here</a></p>`
   ```

   Anything that you put here will appear under About page, which is the main page of the website. As you can see, you can also include `HTML` tags.

<br/>

3. **Education**

   ```shell
   education: [
         {
           degree: "B.Sc.",
           major: "Computer Engineering",
           when: "2008-2012",
           school: "UCLA",
           where: "Los Angeles, CA",
           moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`
       },
   ]
   ```

   Here you will add you educational background by appending similar items to the `education` array. You can also remove fields you don't like (like `major`, or the name of the `school`) and it won't appear on your website.

<br/>

4. **Experience**

   ```shell
   experience: [
           {
             role: "Software Developer",
             when: "2014-Present",
             company: "Facebook",
             where: "Menlo Park, CA",
             moreInfo: `See my work <a href="#">here</a>.`
         },
         {
             role: "Web Developer",
             when: "2010-2014",
             company: "Amazon",
             where: "Vancouver, BC",
             moreInfo: ``
         },
   ]
   ```

   This is where you will talk about your experience.

<br/>

5. **Skills**

   ```shell
   skills: [
         {
           name: "JavaScript",
           level: "85",
           experience: "5 years"
         },
         {
           name: "Python",
           level: "75",
           experience: "2 years"
         },
   ]
   ```

   You will specify your skill set here. The `level` parameter should be between **0** and **100**.

<br/>

6. **Interests**

   ```shell
     interests: [
   	    "Reading",
   	    "Programming",
   	    "Playing the violin",
   	    "Running",
   	    "Watching Monty Python and the Holy Grail"
   	    ],
   ```

   Here you will list your Interests for the Interests page.

<br/>

7. **Themes**

   ```shell
   theme: "great-gatsby"
   ```

   This project comes with 5 themes:

   - `great-gatsby` : purple _(default)_
   - `master-yoda`: light green
   - `wonder-woman`: light red
   - `darth-vader`: black
   - `luke-lightsaber`: light blue

<br/>

8. **Google Analytics**

   ```shell
   plugins: [
       // Make sure this plugin is first in the array of plugins
       {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
           trackingId: "UA-111111111-1",
           head: true,
         },
       },
     ],
   ```

   Add your Google Analytics tracking id here.

<br/>

9. **Fonts**

   ```shell
   font: "default"
   ```

   There are currently two fonts available: `default` which uses the `Helvetica` font; and `programmer` which uses the `IBM Plex Mono` from Google Fonts.

<br/>

10. **Sitemap**

    ```shell
    siteUrl: "YOUR_SITE_URL"
    ```

    Sitemap plugin from Gatsby needs you to put your site url here. Currently, it's the url of the demo site; so just replace it with yours.

## AWS build file

You can use the `buildspec.yml` file in the root directory for AWS CodeBuild. You just need to define an environment variable named `BUCKET` inside your CodeBuild project that points to the S3 bucket you want to deploy your website from.

## Changing profile photo and favicon

Simply replace the `profile.png` and `favicon.ico` files in the `/static` directory.

## Contributions

PRs are welcome!

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)
