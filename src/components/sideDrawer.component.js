import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 150,
      smooth: true,
      offset: -100
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("Main")}>
          Main
        </ListItem>
        <ListItem button onClick={() => scrollToElement("About")}>
          About Us
        </ListItem>

        <ListItem button onClick={() => scrollToElement("testimonial")}>
          Testimonial
        </ListItem>

        <ListItem button onClick={() => scrollToElement("Technology")}>
          Our Technology Stack
        </ListItem>

        <ListItem button onClick={() => scrollToElement("inTouch")}>
          Get in touch
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
