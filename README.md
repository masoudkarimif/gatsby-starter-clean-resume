<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's clean-resume starter
</h1>

Build an online version of your resume in just a few minutes with this clean-resume boilerplate.

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
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-resume-starter` directory in your code editor of choice and edit `gatsby-config.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside the `gatsby-config.js`?

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


2. **About**
	```shell
	about: `<p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala,
	 Luke Skywalker was born along with his twin sister Leia in 19 BBY.</p>
	 <p>More info <a href="https://starwars.fandom.com/wiki/Luke_Skywalker">here</a></p>`
	```
	Anything that you put here will appear under About page, which is the main page of the website. As you can see, you can also include `HTML` tags.


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


## 🧐 What's inside a Gatsby project?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
