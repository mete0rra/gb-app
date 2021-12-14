import { useState, useEffect, useRef } from "react";
import { TextField, Typography, IconButton } from "@mui/material/";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/material/IconButton";
import SendIcon from "@mui/material/IconButton";
import { BoxModal } from "../Utils/Modal";
import { AUTHORS } from "../MessageList/Constants";
import "./MessageForm.css";

export function MessageForm({ messageList, setMessageList }) {
  const author = AUTHORS.ME;
  const [messageText, setMessageText] = useState("");
  const [modal, setModal] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [focus, setFocus] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messageText, focus]);

  const handleTextChange = (e) => setMessageText(e.target.value);
  const handleAddMessage = (e) => {
    if (messageText.trim() === "") {
      setModal(true);
      setMessageAlert("Вы ничего не написали ...");
      return;
    }
    if (author === AUTHORS.BOT) {
      setModal(true);
      setMessageAlert("Вы не можете оставлять сообщения от этого имени");
      return;
    }
    const newMessage = {
      id: uuidv4(),
      author: author,
      text: messageText,
    };

    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };
  const handleReset = (e) => {
    setMessageText("");
    inputRef.current?.focus();
  };

  return (
    <>
      <Typography
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <TextField
          id="outlined-textarea"
          label="написать сообщение..."
          multiline
          value={messageText}
          onChange={handleTextChange}
          inputRef={inputRef}
          size="small"
          sx={{ mb: "0.6em", mt: "0.6em", mr: "10px", flexGrow: 1 }}
        />
        <IconButton
          color="primary"
          aria-label="directions"
          onClick={handleReset}
          sx={{
            p: "10px",
            mb: "7px",
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            p: "10px",
            mb: "7px",
          }}
          aria-label="directions"
          onClick={handleAddMessage}
        >
          <SendIcon />
        </IconButton>
      </Typography>
      <BoxModal
        modal={modal}
        setModal={setModal}
        messageAlert={messageAlert}
        focus={focus}
        setFocus={setFocus}
      />
    </>
  );
}

export function MultilineTextFields() {
  return null;
}
