import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { fontFamily } from "../constants";
import { theme } from "../theme";
import { ModalBlock } from "./ModalBlock";
import { AddTweetForm } from "./AddTweetForm";

// interface SideMenuProps {

// }

export const SideMenu: React.FC = (): React.ReactElement => {
  const icons = [
    { component: <HomeIcon />, text: "Главная" },
    { component: <SearchIcon />, text: "Поиск" },
    { component: <NotificationsIcon />, text: "Уведомления" },
    { component: <EmailIcon />, text: "Сообщения" },
    { component: <BookmarkIcon />, text: "Закладки" },
    { component: <ListAltIcon />, text: "Список" },
    { component: <PersonIcon />, text: "Профиль" },
  ];

  const [visiblAddTweet, setVisibleAddTweet] = React.useState(false);
  const handleOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };
  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 180, mr: 1 }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <TwitterIcon color="primary" />
          </ListItemIcon>
        </ListItem>
        {icons.map((item) => (
          <ListItem
            disablePadding
            key={item.text}
            sx={{ ":hover": { color: theme.palette.primary.main } }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ ":hover": { color: theme.palette.primary.main } }}>
                {item.component}
              </ListItemIcon>
              <Hidden smDown>
                <ListItemText
                  sx={{
                    fontFamily: fontFamily,
                    fontWeight: 700,
                  }}
                  disableTypography
                  primary={item.text}
                />
              </Hidden>
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          onClick={handleOpenAddTweet}
          sx={{ mt: 2 }}
          fullWidth
          color="primary"
          variant="contained"
        >
          Твитнуть
        </Button>
        <ModalBlock title="" visible={visiblAddTweet} onClose={handleCloseAddTweet}>
          <AddTweetForm />
        </ModalBlock>
      </List>
    </Box>
  );
};
