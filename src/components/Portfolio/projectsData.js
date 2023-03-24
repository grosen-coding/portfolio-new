import Project1 from './project-1.jpeg'
import Project2 from './project-2.jpeg'
import Project3 from './project-3.jpeg'
import Project4 from './project-4.jpeg'
import Project5 from './project-5.jpeg'
import Project6 from './project-6.jpeg'

const projectsData = [
  {
    id: 1,
    title: 'Quick Flick Picker',
    image: Project1,
    description: `Can't decide what to watch? Let Quick Picker decide for you. Technically version 2.0, the Quick Flick Picker app is a custom design, first created as a frontend-only project while attending Juno College, intended to help indecisive users select a random movie or tv show to watch from a list of personal favourites. The entire app has since been completely redesigned and rebuilt into a full-stack MERN app allowing for authenticated user accounts and personal reviews of movies or shows. Styling was done using both the Material UI database, styled-components, and some SASS.`,
    url: 'https://quick-flick-picker.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Ruff Nature Tours',
    image: Project2,
    description:
      'Ruff Nature Tours is a Front-End website, originally built as a fun project as a way to learn and play around with CSS, that actually blossomed into an aspiring dog nature tour company. The website was built using hardcoded HTML, CSS, SASS and Vanilla Javascript, no fancy libraries or frameworks. All pages, content and animations are custom designed.',
    url: 'https://modest-brahmagupta-c4ca2d.netlify.app/',
  },
  {
    id: 3,
    title: 'Daily Retro Planner',
    image: Project3,
    description: `The Retro Daily Planner is an app I created to help plan and organize your busy life. It was built using the MERN stack and a REST API for users to first create an authenticated account, and then input and manage different daily or weekly tasks. The design for the user dashboard was provided for me, with the all other components, menus, animations and styling custom designed by myself.`,
    url: 'https://daily-planner-app.herokuapp.com/',
  },
  {
    id: 4,
    title: 'K9PAWS',
    image: Project4,
    description: `K9PAWS is a company website and client platform for training dogs and educating owners. The website has been completely re-designed from scratch, and has now also been created using the MERN stack to allow for client authentication and data management. Styled-components, SASS, and some Material UI were used on the front-end for designing and styling the user experience. The website also uses both Firebase and MongoDB to manage and create Blog posts and handle backend client data, as well as a Breed search API to provide breed-specific information to clients.`,
    url: 'https://k9paws-incident-reports.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Portfolio Site',
    image: Project5,
    description: `This is an existing portfolio site I created using styled-components and React. The site wasn't created that long ago (late 2022), but I've since learned a lot more about React and decided to completely rebuild my portfolio to match my evolving, creative coding style. I decided to design & build a much more simple, dynamic and interactive website, to minimize reading and maximize user engagement.`,
    url: 'https://gary-rosen.com',
  },
  {
    id: 6,
    title: 'Ryan Browne RMT',
    image: Project6,
    description:
      'Ryan Browne RMT is a massage therapist based in Toronto, Ontario. The website was created using the MERN stack, and styled-components for styling. The site also uses a REST API to manage client data, and a Google Maps API to display the location of the business. Altough the site is still in development, it is currently live and can be viewed at the link below.',
    url: 'https://ryan-browne-rmt.netlify.app/',
  },
]

export default projectsData
