import { customs } from './styleVariables.js';

const { Blue05, Blue01 } = customs.colours;

const blueheaderbanner = {
    background: Blue05,
    top:"0px",
    width: "-webkit-fill-available"
}

const roundedboxes = {
    height: "100%",
    border: "2px solid white",
    borderRadius: "20px",
}

const headerBanner = {
    background: "url('https://a.icons8.com/qoTlVjif/KX824D/group-8.png') no-repeat center",
    backgroundSize: "cover",
    height: "-webkit-fill-available",
    maxHeight:"700px"
}

const contactformbox = {
    right: "200px",
    position: "absolute",
    bottom: "0px",
    background: "navajowhite"
}

const Navbar = {
    marginLeft: "auto",
    position: "relative"
}


const articleContainer = {
    height: "-webkit-fill-available",
    maxHeight: "550px",
    paddingInlineStart: "0px"
}

const articleBoxes = {
    backgroundSize: "cover",
    height: "100%",
    display: "inline-block"
  }

 const articleHover = {
   background: customs[0],
 }

  const articleHoverParent = {
      width:"96%",
      height:"96%",
  }


export const layouts = {
    articleHoverParent: articleHoverParent,
    articleHover: articleHover,
    headerBanner: headerBanner,
    Navbar: Navbar,
    contactformbox: contactformbox,
    roundedboxes: roundedboxes,
    blueheaderbanner: blueheaderbanner,
    articleContainer: articleContainer,
    articleBoxes: articleBoxes
}
