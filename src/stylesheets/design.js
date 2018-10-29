import { customs } from './styleVariables.js';

const { Blue05, Blue01, BluGradint_H90, TextBlue } = customs.colours;
const { button } = customs;

const iconicBlue = {
}

const Header = {
    fontSize: "42px",
    color: "#434343"
}

const contactRow = {
    background: Blue01,
}

const contactBox = {
  boxShadow: "5px 7px rgba(1, 1, 1, 0.4)",
  right: "0px",
  width:"500px",
  borderRadius: "20px",
  bottom: "-5px",
  boxShadow: Blue01
}

const beachBackground = {
  backgroundSize: "cover",
  backgroundImage: "url(https://a.icons8.com/iobQcnZV/JJHkZO/group-12.png)",
  height: "190px",
  backgroundPosition: "0px",
  backgroundRepeat: "no-repeat",
  width: "130%",
}

const roundedboxes = {
  border: "5px solid white",
  fontSize: "25px",
  background: Blue01,
  borderRadius: "10px",
  color: TextBlue,
}

const contactBoxSmall = {
  borderRadius: "5px",
  height: "450px",
  boxShadow: "5px 7px rgba(1, 1, 1, 0.4)"
}

const orangeButton = {
  ...button,
  width: "251px",
  height: "43px",
}

const orangeButtonSmall = {
  ...button,
  width: "101px",
  height: "40px"
}

const inputDesign = {
  border: "2px solid rgba(1, 1, 1, 0.02)",
  display: "block",
  width: "100%",
  height: "50px"
}

const Navbar = {
}

export const designs = {
    inputDesign: inputDesign,
    contactBoxSmall: contactBoxSmall,
    beachBackground: beachBackground,
    orangeButtonSmall: orangeButtonSmall,
    contactBox: contactBox,
    contactRow: contactRow,
    orangeButton: orangeButton,
    iconicBlue: iconicBlue,
    Header: Header,
    roundedboxes: roundedboxes
}
