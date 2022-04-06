import { EmojiEmotions, ImageOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const AddTweetForm: React.FC = (): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const symbolLimit = 279 - text.length;

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText("");
  };

  return (
    <Grid sx={{ p: 2 }} container spacing={3}>
      <Grid item xs={1}>
        <Avatar
          alt={`avatar for `}
          src="https://images.unsplash.com/photo-1581599129568-e33151627628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Grid>
      <Grid item xs={11}>
        <TextField
          onChange={handleChangeTextArea}
          value={text}
          fullWidth
          multiline
          placeholder="Что происходит?"
          sx={{ ml: 1 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}>
          <Box>
            <IconButton color="primary">
              <ImageOutlined sx={{ fontSize: "26px" }} />
            </IconButton>
            <IconButton color="primary">
              <EmojiEmotions sx={{ fontSize: "26px" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {text && (
              <>
                <Typography variant="caption">{symbolLimit}</Typography>
                <CircularProgress
                  color="secondary"
                  size={25}
                  variant="determinate"
                  value={text.length >= 280 ? 100 : textLimitPercent}
                  sx={{ mr: 2, ml: 2 }}
                  style={text.length >= 280 ? { color: "red" } : undefined}
                />
              </>
            )}

            <Button
              onClick={handleClickAddTweet}
              disabled={textLimitPercent >= 100}
              color="primary"
              variant="contained"
            >
              Твитнуть
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
