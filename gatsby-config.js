module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Luke Skywalker`,
    role: `Software Developer`,
    email: `luke@thelightside.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/masoudkarimif/gatsby-starter-clean-resume",
      },
      { name: "linkedin", link: "https://linkedin.com" },
      { name: "facebook", link: "https://facebook.com" },
      { name: "twitter", link: "https://twitter.com" },
      { name: "instagram", link: "https://instagram.com" },
    ],
    about: `
      <p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala,
      Luke Skywalker was born along with his twin sister Leia in 19 BBY.
      As a result of Amidala's death and Anakin's fall to the dark side of the Force,
      the Skywalker children were separated and sent into hiding,
      with Leia adopted by the royal family of Alderaan while Luke was raised by his relatives on Tatooine.
      Longing for a life of adventure and purpose,
      Skywalker joined the Rebellion and began learning the ways of the Force under the guidance of Jedi Master Obi-Wan Kenobi,
      whose first apprentice was Luke's own father.
      During the Battle of Yavin in 0 BBY, Skywalker saved the Alliance from annihilation by destroying the Empire's planet-killing superweapon,
      the Death Star. He continued his training in the years that followed,
      determined to become a Jedi Knight like his father before him,
      and found a new mentor in Grand Master Yoda. After his master's death,
      Skywalker participated in the Battle of Endor in 4 ABY,
      during which he confronted the Sith Lord Darth Vader,
      whom he learned was in fact his father, Anakin Skywalker.
      With Luke's help, Anakin returned to the light side of the Force by destroying the Emperor at the cost of his own life,
      fulfilling his destiny as the Chosen One. You can find more information <a href="https://starwars.fandom.com/wiki/Luke_Skywalker" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>See the PDF version of my resume <a href="#">here</a>.</p>
      <p>As you can see, it's possible to add HTML tags in your about page.</p>
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Computer Science",
        when: "2014-2018",
        school: "Harvard University",
        where: "Cambridge, MA",
        moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        See my thesis <a href="#">here</a>.</p>`,
      },
      {
        degree: "M.Sc.",
        major: "Software Engineering",
        when: "2012-2014",
        school: "Stanford University",
        where: "Stanford, CA",
        moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`,
      },
      {
        degree: "B.Sc.",
        major: "Computer Engineering",
        when: "2008-2012",
        school: "UCLA",
        where: "Los Angeles, CA",
        moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`,
      },
      {
        degree: "High School Diploma",
        when: "2000-2008",
        school: "Awesome High School",
        where: "Los Angeles, CA",
      },
    ],
    experience: [
      {
        role: "Software Developer",
        when: "2014-Present",
        company: "Facebook",
        where: "Menlo Park, CA",
        moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        role: "Web Developer",
        when: "2010-2014",
        company: "Amazon",
        where: "Vancouver, BC",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Playing the violin",
      "Running",
      "Watching Monty Python and the Holy Grail",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
  ],
}
