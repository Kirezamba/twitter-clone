import { Box } from "@mui/system";
import { Divider, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { ActualTweets } from "../../components/ActualTweets";
import { WhoToRead } from "../../components/WhoToRead";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import { selectTweetsItems, selectTweetsIsLoading } from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionCreators";
import { selectTagsItems } from "../../store/ducks/tags/selectors";
import { Loader } from "../../components/Loader";
import { fetchWhoToRead } from "../../store/ducks/whoToRead/actionCreators";
import {
  selectWhoToReadIsLoading,
  selectWhoToReadItems,
} from "../../store/ducks/whoToRead/selectors";

export const Home = () => {
  const dispatch = useDispatch();

  const tweets = useSelector(selectTweetsItems);
  const tweetsIsLoading = useSelector(selectTweetsIsLoading);

  const tags = useSelector(selectTagsItems);
  const tagsIsLoading = useSelector(selectTweetsIsLoading);

  const whoToRead = useSelector(selectWhoToReadItems);
  const whoToReadIsLoading = useSelector(selectWhoToReadIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
    dispatch(fetchWhoToRead());
  }, [dispatch]);

  return (
    <Container sx={{ height: "100vh", display: "flex" }} maxWidth="lg">
      <SideMenu />
      <Paper sx={{ width: "100%", maxWidth: 650, height: "100%" }}>
        <Paper>
          <Typography sx={{ fontWeight: 800, p: 1 }} variant="h6">
            Главная
          </Typography>
          <Divider />
          <AddTweetForm />
        </Paper>

        {tweetsIsLoading ? (
          <Loader />
        ) : (
          tweets.map((tweet) => <Tweet key={tweet._id} text={tweet.text} user={tweet.user} />)
        )}
      </Paper>

      <Box sx={{ ml: 2, width: "100%", maxWidth: 250 }}>
        <TextField variant="standard" fullWidth label="Поиск в Твиттере" />
        {tagsIsLoading ? <Loader /> : <ActualTweets tags={tags} />}

        {whoToReadIsLoading ? <Loader /> : <WhoToRead items={whoToRead} />}
      </Box>
    </Container>
  );
};
