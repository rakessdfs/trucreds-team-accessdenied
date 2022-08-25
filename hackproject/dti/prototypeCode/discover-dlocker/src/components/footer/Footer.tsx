import React from "react";
//DFS React UI Imports
import { styled, LockWhiteSecondaryIcon } from "@dfs-react-ui/core";
//MUI Imports
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
//Image Imports
import PhoneIcon from "../../../assets/images/icons/phone.png";
import AdChoices from "../../../assets/images/icons/AdChoices.png";
import EqualHousingLender from "../../../assets/images/icons/EqualHousingLender.png";
import MemberFDIC from "../../../assets/images/icons/MemberFDIC.png";

const AdChoice = styled("a")(() => ({
  marginLeft: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "12px"
}));
const AdChoiceImage = styled("img")(() => ({
  height: "13px",
  width: "14px",
  verticalAlign: "text-bottom",
  marginRight: "2px"
}));
const Bank = styled("p")(({ theme }) => ({
  lineHeight: "1.3em",
  fontSize: "12px",
  color: "white",
  textAlign: "left",
  whiteSpace: "nowrap",
  [theme.breakpoints.down(800)]: {
    paddingRight: 0,
    textAlign: "center",
    margin: 0
  }
}));
const Container = styled(Grid)(({ theme }) => ({
  fontSize: 13,
  textAlign: "center",
  backgroundColor: "#23233f",
  color: "#75787b",
  width: "100%",
  height: 60,
  position: "relative",
  bottom: 0,
  overflowY: "auto",
  [theme.breakpoints.down(800)]: {
    height: 292,
    paddingTop: "16px",
    paddingBottom: "16px"
  }
}));
const Divider = styled(Grid)(() => ({
  borderTop: "1px solid orange"
}));
const EqualHousingLenderImage = styled("a")(() => ({
  background: `url(${EqualHousingLender})`,
  marginTop: "0px",
  width: "21px",
  height: "22px",
  float: "right",
  marginLeft: "10px"
}));
const EqualLinks = styled(Grid)(({ theme }) => ({
  marginLeft: "5px",
  paddingRight: "5px",
  fontSize: "13px",
  [theme.breakpoints.down(900)]: {
    marginLeft: 2,
    paddingRight: 5
  }
}));
const LeftFooterGrid = styled(Grid)(() => ({
  paddingLeft: "16px"
}));
const RightFooterGrid = styled(Grid)(() => ({
  paddingRight: "16px"
}));
const HorizontalDivider = styled("div")(({ theme }) => ({
  width: "1px",
  height: "12px",
  margin: "6.7px 5px 4px 5px",
  backgroundColor: "#fcb116",
  [theme.breakpoints.down(800)]: {
    margin: "2px 10px"
  }
}));
const Hours = styled("p")(({ theme }) => ({
  textAlign: "right",
  color: "white",
  fontSize: "12px",
  margin: 0,
  letterSpacing: "-0.24px",
  [theme.breakpoints.down(800)]: {
    textAlign: "center"
  }
}));
const Lock = styled(LockWhiteSecondaryIcon)(({ theme }) => ({
  width: "auto",
  height: 16,
  paddingLeft: 3,
  verticalAlign: "top",
  [theme.breakpoints.down(800)]: {
    alignSelf: "self-end",
    verticalAlign: "none"
  }
}));
const Link = styled("a")(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  [theme.breakpoints.down(800)]: {
    fontSize: "12px"
  }
}));
const MemberFDICImage = styled("a")(() => ({
  background: `url(${MemberFDIC})`,
  marginTop: "-2px",
  clear: "left",
  width: "40px",
  height: "22px",
  marginLeft: "10px"
}));
const Phone = styled("span")(() => ({
  fontSize: "14px",
  color: "#FCB116",
  paddingLeft: 5,
  verticalAlign: "text-bottom"
}));
const PhoneImage = styled("img")(() => ({
  width: 16,
  height: 16
}));
const SecureText = styled("p")(() => ({
  fontSize: "12px",
  color: "white",
  letterSpacing: "-0.18px",
  paddingTop: 3,
  margin: 0
}));
const QuestionsText = styled(Grid)(() => ({
  fontSize: "12px",
  color: "white",
  paddingLeft: 5,
  letterSpacing: "-0.24px"
}));

/****************************************************
 * Function:  FooterRevised
 * Purpose:   Creates the footer for the site.
 * Params:    None
 ****************************************************/
const FooterRevised = () => {
  //Variable that tells code to switch from
  //Desktop to Mobile or vice versa (800px)
  const mobile = useMediaQuery("(max-width:799px)");

  return (
    <div>
      {mobile ? (
        //MOBILE VIEW CODE
        <Container id={"Mobile_Footer_Main_Container"}
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          role="contentinfo"
        >
          <Grid container justifyContent="center" id={"Mobile_Footer_Inner_Container"}>
            <Grid item xs={12}>
              <QuestionsText id={"Mobile_Footer_Question_Label"}>Questions? Call Us</QuestionsText>
            </Grid>
            <Grid item xs={12}>
              <PhoneImage id={"Mobile_Footer_Phone_Img"}
                src={PhoneIcon}
                alt="Phone Logo"
                data-mobile-img="phone-logo.png"
              />
              <Phone id={"Mobile_Footer_Phone_Content"}>1-866-248-1255</Phone>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" id={"Mobile_Footer_Hours_Container"}>
            <Grid item xs={12}>
              <Hours id={"Mobile_Footer_Hours_M_F"}>Mon-Fri: 8 a.m.-11 p.m. ET</Hours>
            </Grid>
            <Grid item xs={12}>
              <Hours id={"Mobile_Footer_Hours_S_S"}>Sat-Sun: 9 a.m.-6 p.m. ET</Hours>
            </Grid>
          </Grid>
          <Divider item xs={11} />
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" id={"Mobile_Term_Container"}>
              <EqualLinks item>
                <Link href="https://www.discover.com/personal-loans/terms-of-use.html" id={"Mobile_Term_Link"}>
                  Terms of Use
                </Link>
              </EqualLinks>
              <HorizontalDivider />
              <EqualLinks item>
                <Link href="https://www.discover.com/online-banking/security-center.html" id={"Mobile_Security_Link"}>
                  Security Center
                </Link>
              </EqualLinks>
              <HorizontalDivider />
              <EqualLinks item>
                <Link href="https://www.discover.com/privacy-statement" id={"Mobile_Privacy_Link"}>
                  Privacy
                </Link>
              </EqualLinks>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" id={"Mobile_Ad_Choice_Container"}>
              <AdChoice
                id="bapw-link"
                href="https://info.evidon.com/pub_info/1142?v=1"
                target="_blank"
                rel="noreferrer"
              >
                <AdChoiceImage
                  src={AdChoices}
                  id="_bapw-icon"
                  alt={"AdChoices"}
                />
                AdChoices
              </AdChoice>
              <EqualHousingLenderImage target="_blank" rel="noreferrer" />
              <MemberFDICImage id={"Mobile_FDIC_Link"}
                href="https://www.fdic.gov/"
                target="_blank"
                rel="noreferrer"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Bank id={"Mobile_Bank_CopyRight_Content"}>© 2022 Discover Digital Locker, Member FDIC</Bank>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <SecureText id={"Mobile_Secure_Label"}>Secure</SecureText>
              <Lock />
            </Grid>
          </Grid>
        </Container>
      ) : (
        //DESKTOP VIEW CODE
        <Container id={"Footer_Main_Container"}
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          role="contentinfo"
        >
          <LeftFooterGrid item xs="auto">
            <Bank id={"Bank_CopyRight_Content"}>© 2022 Discover Digital Locker, Member FDIC</Bank>
          </LeftFooterGrid>
          <Grid item xs="auto">
            <Grid container direction="row" alignItems="center">
              <EqualLinks item>
                <Link id={"Term_Link"}
                  href="https://www.discover.com/personal-loans/terms-of-use.html"
                  sx={{ paddingLeft: 0 }}
                >
                  Terms of Use
                </Link>
              </EqualLinks>
              <HorizontalDivider />
              <EqualLinks item>
                <Link href="https://www.discover.com/online-banking/security-center.html" id={"Security_Link"}>
                  Security Center
                </Link>
              </EqualLinks>
              <HorizontalDivider />
              <EqualLinks item>
                <Link href="https://www.discover.com/privacy-statement" id={"Privacy_Link"}>
                  Privacy
                </Link>
              </EqualLinks>
              <HorizontalDivider />
              <AdChoice
                id="bapw-link"
                href="https://info.evidon.com/pub_info/1142?v=1"
                target="_blank"
                rel="noreferrer"
              >
                <AdChoiceImage
                  src={AdChoices}
                  id="_bapw-icon"
                  alt={"AdChoices"}
                />
                <span>AdChoices</span>
              </AdChoice>
              <EqualHousingLenderImage target="_blank" rel="noreferrer" />
              <MemberFDICImage id={"FDIC_Link"}
                href="https://www.fdic.gov/"
                target="_blank"
                rel="noreferrer"
              />
            </Grid>
          </Grid>
          <RightFooterGrid item xs="auto">
            <Grid container direction="row" alignItems="center">
              <SecureText id={"Secure_Label"}>
                Secure <Lock />
              </SecureText>
            </Grid>
          </RightFooterGrid>
        </Container>
      )}
    </div>
  );
};

export default FooterRevised;
