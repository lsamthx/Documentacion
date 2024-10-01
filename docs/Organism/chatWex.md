---
sidebar_position: 133
---

# ChatWex.js

El componente ChatWex es un componente de chat que muestra mensajes y permite a los usuarios enviar nuevos mensajes. 

```js 
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { MessageRight } from "../molecules/MessageRight";
import { MessageLeft } from "../molecules/MessageLeft";
import ChatStyle from "../../styles/Chat/ChatStyle";
import TextMessage from "../molecules/TextMessage";

function ChatWex (props) {
  const { sx, titleChat, messageChat = [], isPrinciopalUser = false } = props;
  const [showMesages, setShowMesages] = useState(false);
 
  return (
  <Stack
  sx={{
  ...ChatStyle.BazChat,
  ...sx
  }}
  >
  <Typography
  sx={ChatStyle.HeaderChat}
  onClick={() => setShowMesages(!showMesages)}
  >
  {titleChat}
  </Typography>

  <Stack
  sx={{
  width: '320px',
  height: showMesages ? '400px' : '0px',
  padding: showMesages ? '10px' : 'none',
  overflow: 'auto',
  backgroundColor: '#FFFFFF',
  transition: 'height 0.10s ease-in-out 0.05s',
  "&::-webkit-scrollbar": {
  width: 0,
  },
  "&::-webkit-scrollbar-track": {
  },
  "&::-webkit-scrollbar-thumb": {
  },
  }}
  >
  {messageChat.map((item, index) => {
  return (
  <div key={index}>
  {item.isUser ?
  <MessageRight
  message={item.message}
  hourMessage={item.hourMessage}
  userName={isPrinciopalUser ? 'Repartidor' : 'Usuario'}
  /> :
  <MessageLeft
  message={item.message}
  hourMessage={item.hourMessage}
  />
  }
  </div>
  )
  })
  }
  </Stack>
  <Stack
  sx={{
  backgroundColor: '#FFFFFF',
  border: '1px solid #efefef',
  width: '320px',
  display: showMesages ? 'block' : 'none',
  transition: 'display 0.10s ease-in-out 0.05s',
  padding: '10px',
  margin: 'auto'
  }}
  >
  <TextMessage />
  </Stack>
  </Stack>
  );
};

export default ChatWex;
```