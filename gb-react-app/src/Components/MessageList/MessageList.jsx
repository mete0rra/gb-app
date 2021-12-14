import React from "react";

import { Avatar, Box, Typography, List, ListItem } from "@mui/material/";
import "./MessageList.css";

export function MessageList({ messageList }) {
  return (
    <List>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        className="message_list__title"
      ></Typography>
      {messageList.map(({ id, author, text }) => (
        <ListItem key={id}>
          <Avatar
            className="message_list-img"
            src="/broken-image.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Box className="message_list__block">
            <Typography className="message_list__author">{author}</Typography>
            <Typography className="message_list__text">{text}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
