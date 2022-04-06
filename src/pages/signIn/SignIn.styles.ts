import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      display: "flex",
      height: "100vh",
    },
    blueSide: {
      position: "relative",
      backgroundColor: "#71C0F8",
      flex: "0 0 50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    blueSideBigIcon: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 650,
      height: 650,
    },
    blueSideListInfo: {
      listStyle: "none",
      position: "relative",
      margin: 0,
      padding: 0,
      width: 380,
      "& h6": {
        color: "white",
        fontWeight: 600,
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
      },
    },
    blueSideListInfoIcon: {
      fontSize: 32,
      marginRight: 15,
    },
    loginSide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 50%",
    },
    loginSideWrapper: {
      width: 380,
    },
    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: "60px",
    },
    loginSideFormField: {},
  };
});
