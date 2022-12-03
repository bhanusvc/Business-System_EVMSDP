import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Ceremonies",
    subTitle: "The phrase the honor of your presence is requested is typically reserved for ceremonies taking place at a house of worship, (temple, church, synagogue, other places of worship). The phrase you are invited to atten is typically used for ceremonies not taking place in religious setting.",
    button:<Button variant='contained' href='/Ceremonies' >eXplore</Button>
  },
  {
    id: uuidv4(),
    title: "Parties",
    subTitle: "A party is a gathering of people who have been invited by a host for the purposes of socializing, conversation, recreation, or as part of a festival Lorem",
    button:<Button variant='contained' href='/Parties' >eXplore</Button>
  },
 
  {
    id: uuidv4(),
    title: "Celebrations",
    subTitle: "A celebration is a special enjoyable event that people organize because something pleasant has happened or because it is someone's birthday or anniversary.",
    button:<Button variant='contained' href='/Celebrations' >eXplore</Button>
  },
  {
    id: uuidv4(),
    title: "Business Events",
    subTitle: "any public or private activity consisting of a minimum of 15 persons with a common interest or vocation, held in a specific venue or venues, and hosted by an organisation (or organisations).",
    button:<Button variant='contained' href='BusinessEvents' >eXplore</Button>
  },
 
];


export default dataSlider;