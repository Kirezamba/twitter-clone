import { Avatar, Box, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { IconButton } from "@mui/material";
import { WhoToReadState } from "../store/ducks/whoToRead/state";
import React from "react";

interface WhoToReadProps {
  items: WhoToReadState["items"];
}

export const WhoToRead: React.FC<WhoToReadProps> = ({ items }): React.ReactElement => {
  return (
    <>
      <List sx={{ backgroundColor: "rgb(245, 248, 250)", mt: 3 }}>
        <ListItem>
          <Typography sx={{ fontWeight: 700 }} variant="h6">
            Кого почитать:
          </Typography>
        </ListItem>
        <Divider />
        {items.map((item) => (
          <Box key={item._id}>
            <ListItemButton>
              <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Avatar alt={`avatar of ${item.username}`} src={item.avatarUrl} />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="body2" display="inline" sx={{ fontWeight: 700, mr: 1 }}>
                      {item.fullname}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="inline"
                      sx={{ fontWeight: 700, color: "#cecece" }}
                    >
                      @{item.username}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mr: "2px" }}>
                  <IconButton>
                    <PersonAddOutlinedIcon color="primary" />
                  </IconButton>
                </Box>
              </Box>
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </List>
    </>
  );
};
