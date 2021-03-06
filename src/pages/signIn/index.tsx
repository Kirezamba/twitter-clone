import {
  Button,
  Typography,
  TextField,
  FormControl,
  DialogActions,
  FormGroup,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box } from "@mui/system";
import { useStyles } from "./SignIn.styles";
import React from "react";
import { ModalBlock } from "../../components/ModalBlock";
import { pushYear, months, days } from "../../constants";
import Select from "../../components/Select";

export const SignIn: React.FC = (): React.ReactElement => {
  const years = pushYear();
  const [currency, setCurrency] = React.useState({
    year: "",
    month: "",
    day: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signOut" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
    setCurrency({
      year: "",
      month: "",
      day: "",
    });
  };
  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
    setCurrency({
      year: "",
      month: "",
      day: "",
    });
  };
  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
    setCurrency({
      year: "",
      month: "",
      day: "",
    });
  };

  const { classes } = useStyles();
  const { wrapper, blueSide, loginSide, loginSideWrapper, blueSideListInfo, blueSideListInfoIcon } =
    classes;
  return (
    <Box className={wrapper}>
      <Box className={blueSide}>
        <TwitterIcon
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "250%",
            height: "250%",
            transform: "translate(-50%, -50%)",
          }}
          color="primary"
        />
        <ul className={blueSideListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={blueSideListInfoIcon} />
              ?????????????? ?? ??????, ?????? ?????? ??????????????????.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleOutlineIcon className={blueSideListInfoIcon} />
              ??????????????, ?? ?????? ?????????????? ?? ????????.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={blueSideListInfoIcon} />
              ?????????????????????????????? ?? ??????????????.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box className={loginSide}>
        <Box className={loginSideWrapper}>
          <TwitterIcon color="primary" fontSize="large" />
          <Typography sx={{ fontWeight: 700, fontSize: 32, marginBottom: "60px" }} variant="h4">
            ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
          </Typography>
          <Typography sx={{ fontWeight: 800 }}>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            sx={{ marginBottom: "1rem" }}
            variant="contained"
            color="primary"
            fullWidth
          >
            ????????????????????????????????????
          </Button>

          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            ??????????
          </Button>
          <ModalBlock
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            title="?????????? ?? ??????????????"
          >
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ mb: 2 }}
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  sx={{ mb: 2 }}
                  autoFocus
                  margin="dense"
                  id="password"
                  label="????????????"
                  type="password"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <DialogActions sx={{ mb: 0 }}>
                <Button fullWidth variant="contained" onClick={handleCloseModal}>
                  ??????????
                </Button>
              </DialogActions>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            title="???????????????? ?????????????? ????????????"
          >
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ mb: 4 }}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="??????"
                  type="name"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  sx={{ mb: 4 }}
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  sx={{ mb: 4 }}
                  autoFocus
                  margin="dense"
                  id="password"
                  label="????????????"
                  type="password"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Select
                  currency={years}
                  onPick={handleChange}
                  value={currency.year}
                  helper="???????????????? ??????"
                  label="??????"
                  name="year"
                />
                <Select
                  currency={months}
                  onPick={handleChange}
                  value={currency.month}
                  helper="???????????????? ??????????"
                  label="??????????"
                  name="month"
                />
                <Select
                  currency={days}
                  onPick={handleChange}
                  value={currency.day}
                  helper="???????????????? ????????"
                  label="????????"
                  name="day"
                />
              </FormGroup>
              <DialogActions sx={{ mb: 0 }}>
                <Button fullWidth variant="contained" onClick={handleCloseModal}>
                  ??????????
                </Button>
              </DialogActions>
            </FormControl>
          </ModalBlock>
        </Box>
      </Box>
    </Box>
  );
};
