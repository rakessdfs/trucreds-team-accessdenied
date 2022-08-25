import React from "react";
//MUI Imports
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
//Image Imports
import PhoneIcon from "../../assets/images/icons/phone.png";
import DiscoverLogo from "../../assets/images/images/DicoverDigitalLocker.png";
import DiscoverLogoMobile from "../../assets/images/images/DicoverDigitalLocker.png";
//Component Imports
import { styled } from "@mui/system";
const Availability = styled(Grid)(({ theme }) => ({
  paddingLeft: 10,
  paddingRight: 10,
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));

const Container = styled(Grid)(() => ({
  width: "100%"
}));
const RightContainer = styled(Grid)(({ theme }) => ({
  color: "#75787b",
  float: "right",
  marginTop: "5px",
  maxInlineSize: "fit-content",
}));
const CallusContainer = styled(Grid)(({ theme }) => ({
  color: "#75787b",
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));
const DFS = styled("img")(({ theme }) => ({
  paddingTop: 10,
  width: 250,
  height: 120,
  paddingLeft: 24,
  paddingBottom: 10,
  [theme.breakpoints.down(800)]: {
    width: 150,
    height: 120,
    paddingLeft: 0,
    paddingTop: 20
  }
}));
const HorizontalDivider = styled("div")(() => ({
  width: "1px",
  height: "40px",
  opacity: "0.2",
  backgroundColor: "white",
  margin: "6.7px 20px 4px 20px"
}));
const InnerContainer = styled(Grid)(() => ({
  backgroundColor: "#23233f",
  borderBottom: "solid 4px #ec6b29",
  minHeight: 60
}));
const Hours = styled("p")(() => ({
  textAlign: "right",
  color: "white",
  fontSize: "12px",
  margin: 0,
  letterSpacing: "-0.24px"
}));
const Phone = styled("span")(() => ({
  fontSize: "14px",
  color: "#FCB116",
  paddingLeft: 5
}));
const PhoneImage = styled("img")(() => ({
  width: 16,
  height: 16
}));
const Text = styled(Grid)(() => ({
  fontSize: "12px",
  color: "white",
  letterSpacing: "-0.24px"
}));
const MobileImgContainer = styled(Grid)(() => ({
  textAlign: "center"
}));
const MobileBtnContainer = styled(Grid)(() => ({
  textAlign: "end"
}));

/****************************************************
 * Function:  Header
 * Purpose:   Creates the header for the site.
 * Params:    None
 ****************************************************/
const Header = () => {
  //Variable that tells code to switch from
  //Desktop to Mobile or vice versa (800 px)
  const mobile = useMediaQuery("(min-width:767px)");

  return (
    <Container id={"Header_Container"}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      role="banner"
    >
      {mobile ? (
        //DESKTOP VIEW CODE
        <InnerContainer id={"Header_InnerContainer"}
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <DFS id={"Header_DFS_Img"}
            src={DiscoverLogo}
            alt="Discover Personal Loans Logo"
            data-mobile-img="discover-logo.png"
          />
          <RightContainer container direction="row" alignItems="center">
            <CallusContainer id={"Header_CallUsContainer"}>
              <Text id={"Header_CallUs_Question_Label"}>Questions? Call Us</Text>
              <Grid container alignItems="center">
                <PhoneImage id={"Header_Phone_Img"}
                  src={PhoneIcon}
                  alt="Phone Logo"
                  data-mobile-img="phone-logo.png"
                />
                <Phone id={"Header_Phone_label"}>1-866-248-1255</Phone>
              </Grid>
            </CallusContainer>
            <HorizontalDivider id={"Header_Divider"} />
            <Availability id={"Header_AvailabilityContainer"}>
              <Hours id={"Header_Hours_M_F"}>Mon-Fri: 8 a.m.-11 p.m. ET</Hours>
              <Hours id={"Header_Hours_S_S"}>Sat-Sun: 9 a.m.-6 p.m. ET</Hours>
            </Availability>
          </RightContainer>
        </InnerContainer>
      ) : (
        //MOBILE VIEW CODE
        <InnerContainer id={"Mobile_Header_InnerContainer"}
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4} />
          <MobileImgContainer item xs={4}>
            <DFS id={"Mobile_Header_DFS_Img"}
              src={DiscoverLogoMobile}
              alt="Discover Digital Locker Logo"
              data-mobile-img="discover-logo.png"
            />
          </MobileImgContainer>
          <MobileBtnContainer item xs={4}/>
        </InnerContainer>
      )}
    </Container>
  );
};

export default Header;
