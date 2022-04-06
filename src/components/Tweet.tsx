import { Avatar, Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import React from "react";

interface TweetProps {
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps): React.ReactElement => {
  return (
    <Paper
      sx={{ p: 2, cursor: "pointer", ":hover": { backgroundColor: "rgb(245, 248, 250)" } }}
      variant="outlined"
      square
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar alt={`avatar of ${user.fullname}`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="body2" display="inline" sx={{ fontWeight: 700, mr: 1 }}>
            {user.fullname}
          </Typography>
          <Typography variant="body2" display="inline" sx={{ fontWeight: 700, color: "#cecece" }}>
            @{user.username}
          </Typography>

          <Typography variant="body2" display="inline" sx={{ color: "#cecece", ml: 1 }}>
            1 ч
          </Typography>
          <Typography variant="body1" display="inline-block">
            {text}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "450px" }}>
            <IconButton>
              <ChatBubbleOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              <span style={{ fontSize: 12 }}>1</span>
            </IconButton>
            <IconButton>
              <CachedOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              <span style={{ fontSize: 12 }}>1</span>
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              <span style={{ fontSize: 12 }}>1</span>
            </IconButton>
            <IconButton>
              <IosShareOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              <span style={{ fontSize: 12 }}>1</span>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
