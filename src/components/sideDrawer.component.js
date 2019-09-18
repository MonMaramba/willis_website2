import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Main")}>
          Main
        </ListItem>
        <ListItem button onClick={() => console.log("About")}>
          About Us
        </ListItem>
        <ListItem button onClick={() => console.log("Techonology Stack")}>
          Our Technology Stack
        </ListItem>

        <ListItem button onClick={() => console.log("Testimonial")}>
          Testimonial
        </ListItem>

        <ListItem button onClick={() => console.log("Get in touch")}>
          Get in touch
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
