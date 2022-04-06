import { Divider, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TagsState } from "../store/ducks/tags/state";

interface ActualTweetsProps {
  tags: TagsState["items"];
}

export const ActualTweets: React.FC<ActualTweetsProps> = ({ tags }): React.ReactElement => {
  return (
    <>
      <List sx={{ backgroundColor: "rgb(245, 248, 250)", mt: 1 }}>
        <ListItem>
          <Typography sx={{ fontWeight: 700 }} variant="h6">
            Актуальные темы:
          </Typography>
        </ListItem>
        <Divider />
        {tags.map((tag) => (
          <>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              key={tag._id}
            >
              <Box>
                <Typography variant="body2" sx={{ textAlign: "left", fontWeight: 700 }}>
                  {tag.name}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#cecece", textAlign: "left", fontSize: "12px" }}>
                  Твитов: {tag.count}
                </Typography>
              </Box>
            </ListItemButton>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};
