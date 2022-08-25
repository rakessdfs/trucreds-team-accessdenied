import React, {useEffect, useState} from "react";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/review-and-accept-loan-comp/FooterRevised/FooterRevised";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import {styled, Button, Input, Link} from "@dfs-react-ui/core";
import spinnerIcon from '../../../assets/images/images/loader.gif';

// Material UI Styling Overrides.
const styles = makeStyles((theme) => ({
    appContainer: {
        width: "85%",
        margin: "0 auto",
        position: "relative",
    },

    gridItem: {
        alignItems: 'center',
    },
    innerContainer: {
        width: "75%",
    },
    [theme.breakpoints.down('sm')]: {
        backgroundColor: "green",
    },
    mobileAppContainer: {
        width: "100%",
        margin: "0 auto",
        position: "relative"
    },
    text: {
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    pageHeadingDiv: {
        paddingTop: "20px",
        width: "100%"
    },
    orangeSpinner: {
        width: "100px",
        height: "100px",
        mixBlendMode: "multiply",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
}));

const PageHeading = styled("h1")(({ theme }) => ({
    color: theme.palette.main.midnight,
    textAlign: "center",
    fontSize: "32px",
    paddingLeft: "40px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        paddingLeft: "20px",
        fontSize: "25px",
    }
}));

const SubPageHeading = styled("h1")(({ theme }) => ({
    color: theme.palette.main.midnight,
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",
        marginBottom: "30px",
        paddingLeft: "0px",
    }
}));

const WelcomeHeading = styled("h1")(({ theme }) => ({
    color: theme.palette.main.midnight,
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "18px",
        marginBottom: "30px",
        paddingLeft: "0px",
    }
}));

const GridLabel = styled("h1")(({ theme }) => ({
    color: theme.palette.main.midnight,
    textAlign: "left",
    fontSize: "18px",
    marginBottom: "20px",
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "17px",
        marginBottom: "30px",
        paddingLeft: "0px",


    }

}));

const InfoHeading = styled("h1")(({ theme }) => ({
    color: "green",
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",
        marginBottom: "30px",
        paddingLeft: "20px",
        marginTop: "20px"

    }

}));

const ErrorHeading = styled("h1")(({ theme }) => ({
    color: "red",
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",
        marginBottom: "30px",
        paddingLeft: "20px",
        marginTop: "20px"

    }

}));

const Goto = styled("a")(({ theme }) => ({
    color: theme.palette.main.midnight,
    textDecoration: "none",
    fontSize: "14px",
    [theme.breakpoints.down(800)]: {
        fontSize: "12px"
    }
}));

const OrangeText = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main
}));

const GridOuterContainer = styled(Grid)(({ theme }) => ({
    //border: "1px solid red",
    borderRadius: "12px",
    width: "100%",
    textAlign: "center",
    paddingTop: "20px"
}));

const GridInnerContainer = styled(Grid)(({ theme }) => ({
    //border: "1px solid blue",
    borderRadius: "12px",
    width: "50%",
    textAlign: "left",
    paddingTop: "10px",
    paddingBottom: "40px",
    paddingLeft:"120px",
    paddingRight:"20px",
    marginLeft: "350px",
        [theme.breakpoints.down(767)]: {
            width: "100%",
            marginLeft: "0px",
            paddingLeft:"10px",
}
}));

const GridUserDetails = styled(Grid)(({ theme }) => ({
    paddingLeft: "180px",
    [theme.breakpoints.down(767)]: {
        paddingLeft: "50px"
}
}));

const GridForgotLockerId = styled(Grid)(({ theme }) => ({
    paddingLeft: "70px",
    paddingTop: "25px",
    [theme.breakpoints.down(767)]: {
        whiteSpace: "nowrap",
        paddingLeft: "0px"
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px"
}));

const StyledButtonRtrLockerId = styled(Button)(({ theme }) => ({
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    [theme.breakpoints.down(767)]: {
        whiteSpace: "nowrap",
        marginRight: "20px",
    }
}));

export const DLocker = () => {
    const classes = styles();
    const[authenticateLockerId, setAuthenticateLockerId] = useState(false);
    const[authenticateYourSelf, setAuthenticateYourSelf] = useState(false);
    const[showLogin, setShowLogin] = useState(false);
    const[hideWelcomeScreen, setHideWelcomeScreen] = useState(true);
    const[showTempPhraseGrid, setShowTempPhraseGrid] = useState(false);
    const [loading, setLoading] = useState(false);
    const[showLockerIdMsg, setShowLockerIdMsg] = useState(false);
    const[pageChange, setPageChange] = useState(false);
    const[accessLocker, setAccessLocker] = useState(false);
    let counter=0;
    const[didErrorMsg, setDidErrorMsg] = useState(false);

    const[retrieveLocker, setRetrieveLocker] = useState(false);

    useEffect(() => {
        if(authenticateLockerId || showTempPhraseGrid || authenticateYourSelf || pageChange) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [authenticateLockerId, authenticateYourSelf, showTempPhraseGrid, pageChange]);

    const handleLoginShowfromAccess = () => {
        setAccessLocker(true);
        setHideWelcomeScreen(false);
        setShowLogin(true);
        setRetrieveLocker(false);

    }
    const handleLoginShowfromRecover = () => {
        setRetrieveLocker(true);
        setHideWelcomeScreen(false);
        setShowLogin(true);
        setAccessLocker(false);
    }

    const handleLoginSubmit = () => {

        setShowLogin(false);
        setAuthenticateLockerId(false);
        setAuthenticateYourSelf(false);
        if(accessLocker){
            setAuthenticateLockerId(true);
        } else if(retrieveLocker){
            setAuthenticateLockerId(true);
        }
    }

    const handleVerify = () => {
        counter = counter + 1;
        setAuthenticateYourSelf(false);
        setAuthenticateLockerId(true);
        setShowTempPhraseGrid(false);
        setShowLockerIdMsg(false);
        if(counter === 1) {
            setDidErrorMsg(true);
        } else {
            setAuthenticateLockerId(false);
            setShowTempPhraseGrid(true);
        }

    }

    const handleRetrieveLockerId = () => {
        setAuthenticateYourSelf(false);
        setAuthenticateLockerId(true);
        setShowLockerIdMsg(true);
    }

    const handleValidateTempPhrase = () => {
        setShowTempPhraseGrid(false);
        setHideWelcomeScreen(false);
        setPageChange(true);
    }

    const handleCancel = () => {
        setAuthenticateYourSelf(false);
        setHideWelcomeScreen(true);
        setShowLogin(false);
        setShowTempPhraseGrid(false);
        setShowLockerIdMsg(false);
        setAuthenticateLockerId(false);
        setDidErrorMsg(false);
    }

    const handleAuthenticateThruPII = () => {
        setAuthenticateYourSelf(true);
        setAuthenticateLockerId(false);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            minHeight: "100vh"
        }}>
                <Header />
                <Grid className={classes.appContainer} role="main" style={{ flexGrow: 1 }}>
                    <Grid container direction={"column"}>
                        <Grid className={classes.pageHeadingDiv}>
                            <PageHeading>
                                Discover<OrangeText> dLocker </OrangeText>
                            </PageHeading>
                            {!loading && !pageChange && <><div></div></>}
                        </Grid>
                        {loading &&
                        <Grid className={classes.text}>
                          <img src={spinnerIcon} className={classes.orangeSpinner} alt='discover digital locker'/>
                        </Grid>
                        }

                        {hideWelcomeScreen &&
                        <Grid className={classes.text}>
                          <GridUserDetails container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingTop: "30px"}}>
                            <Grid item xs={12}>
                              <Grid><StyledButton onClick={handleLoginShowfromAccess}>Access Locker</StyledButton></Grid>
                            </Grid>
                            <Grid item xs={12} style={{paddingTop: "30px"}}>
                              <Grid> <StyledButton>Create Locker</StyledButton> </Grid>
                            </Grid>
                            <Grid item xs={12} style={{paddingTop: "30px"}}>
                              <Grid><StyledButton onClick={handleLoginShowfromRecover}>Recover Locker</StyledButton></Grid>
                            </Grid>
                          </GridUserDetails>
                        </Grid>
                        }

                        {!loading && showLogin &&
                        <Grid container direction={'row'}>
                          <GridOuterContainer>
                            <WelcomeHeading>
                              Sign In
                            </WelcomeHeading>
                            <GridInnerContainer container direction={'row'} spacing={1}>
                              <GridUserDetails container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingRight: "20px"}}>
                                  <Grid item xs={12}>
                                    <Grid><Input label="Discover Username" /></Grid>
                                  </Grid>
                                <Grid item xs={12}>
                                  <Grid> <br/>  </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid><Input type="password" label="Discover Password" /></Grid>
                                  </Grid>
                              </GridUserDetails>
                                <Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingLeft: "0px",paddingTop: "30px"}}>
                                      <Grid item xs={6} md={6} style={{textAlign: "right"} }>
                                        <Grid><StyledButton onClick={handleCancel}> Cancel </StyledButton></Grid>
                                      </Grid>

                                      <Grid item xs={6} sm={6} style={{textAlign: "left"}}>
                                        <Grid><StyledButton onClick={handleLoginSubmit}>Login</StyledButton></Grid>
                                      </Grid>
                                </Grid>

                            </GridInnerContainer>
                          </GridOuterContainer>
                        </Grid>
                        }

                        {!loading && authenticateLockerId &&
                        <Grid container direction={'row'} style={{paddingTop: "20px", paddingBottom:"20px"}}>
                          <GridOuterContainer>

                            <WelcomeHeading>
                              Hello <OrangeText> Lakshmi </OrangeText>
                            </WelcomeHeading>

                              {didErrorMsg &&
                              <ErrorHeading>
                                Digital IDs entered does not match. Please check and try again
                              </ErrorHeading>
                              }

                              {showLockerIdMsg &&
                                  <InfoHeading>
                                    Please use the DAuth and DLocker Digital Ids you received on your registered communication channel
                                  </InfoHeading>
                              }
                              {!showLockerIdMsg &&
                              <WelcomeHeading>
                                Let us first verify your digital identity
                              </WelcomeHeading>
                              }
                            <GridInnerContainer container direction={'row'} spacing={1}>
                              <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                <Grid><GridLabel>DAuth digital id: </GridLabel></Grid>
                              </Grid>
                              <Grid item xs={6} sm={6}>
                                <Grid><Input label="DAuth DiD" /></Grid>
                              </Grid>

                              <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                <Grid><GridLabel>DLocker digital id: </GridLabel></Grid>
                              </Grid>
                              <Grid item xs={6} sm={6}>
                                <Grid><Input label="DLocker DiD" /></Grid>
                              </Grid>
                                {retrieveLocker &&
                                    <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                      <Grid><GridLabel>Recovery Phrase: </GridLabel></Grid>
                                    </Grid>
                                }

                                {retrieveLocker &&
                                    <Grid item xs={6} sm={6}>
                                      <Grid><Input label="Recovery Phrase" type={"password"}/></Grid>
                                    </Grid>
                                }

                                {retrieveLocker &&
                                    <Grid item xs={12}>
                                      <Grid><Goto href="#" onClick={handleAuthenticateThruPII}><WelcomeHeading>Forgot your digital ids? No Problem.
                                        Please <span style={{textDecoration: "underline"}}>Click</span> Here </WelcomeHeading></Goto></Grid>
                                    </Grid>
                                }
                              <Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingLeft: "30px"}}>
                                <Grid item xs={6} md={6} style={{textAlign: "center"} }>
                                  <Grid><StyledButton onClick={handleCancel}>Cancel</StyledButton></Grid>
                                </Grid>
                                <Grid item xs={6} sm={6} style={{textAlign: "left"}}>
                                  <Grid><StyledButton onClick={handleVerify}>Verify</StyledButton></Grid>
                                </Grid>
                              </Grid>
                            </GridInnerContainer>
                          </GridOuterContainer>
                        </Grid>
                        }

                        {!loading && authenticateYourSelf &&
                            <Grid container direction={'row'} style={{paddingTop: "20px", paddingBottom:"20px"}}>
                                <GridOuterContainer>
                                  <WelcomeHeading>
                                    Let us first verify your identity in system
                                  </WelcomeHeading>
                                  <GridInnerContainer container direction={'row'} spacing={1}>
                                  <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                    <Grid><GridLabel>First Name: </GridLabel></Grid>
                                  </Grid>
                                  <Grid item xs={6} sm={6}>
                                    <Grid><Input label="First Name" /></Grid>
                                  </Grid>

                                  <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                    <Grid><GridLabel>Last Name: </GridLabel></Grid>
                                  </Grid>
                                  <Grid item xs={6} sm={6}>
                                    <Grid><Input label="Last Name" /></Grid>
                                  </Grid>

                                  <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                    <Grid><GridLabel>Date of birth: </GridLabel></Grid>
                                  </Grid>
                                  <Grid item xs={6} sm={6}>
                                    <Grid><Input label="MM/DD/YYYY" /></Grid>
                                  </Grid>

                                  <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                    <Grid><GridLabel>SSN - last 4 digits : </GridLabel></Grid>
                                  </Grid>
                                  <Grid item xs={6} sm={6}>
                                    <Grid><Input label="XXX-XX-XXXX"/></Grid>
                                  </Grid>
                                    <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                      <Grid><GridLabel>Phone Number: </GridLabel></Grid>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                      <Grid><Input label="(XXX)-XXX-XXXX"/></Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{paddingTop: "25px"}}>
                                      <Grid><GridLabel>Registered Email: </GridLabel></Grid>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                      <Grid><Input label="a@x.com"/></Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{paddingTop: "15px"}}>
                                      <Grid><GridLabel>Mother Maiden Name: </GridLabel></Grid>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                      <Grid><Input label="Mother Maiden Name"/></Grid>
                                    </Grid>
                                    <Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingLeft: "0px"}}>
                                    <Grid item xs={5} md={6} style={{textAlign: "center"} }>
                                      <Grid><StyledButton onClick={handleCancel}>Cancel</StyledButton></Grid>
                                    </Grid>
                                    <Grid item xs={6} sm={6} style={{textAlign: "left"}}>
                                      <Grid><StyledButtonRtrLockerId onClick={handleRetrieveLockerId}>Retrieve Digital IDs</StyledButtonRtrLockerId></Grid>
                                    </Grid>
                                    </Grid>
                                  </GridInnerContainer>
                                </GridOuterContainer>
                            </Grid>
                        }

                        {!loading && showTempPhraseGrid &&
                        <Grid container direction={'row'} style={{paddingTop: "20px", paddingBottom:"20px"}}>


                          <GridOuterContainer>
                            <InfoHeading>
                              Please enter the one time temporary phrase you received on your registered communication channel
                            </InfoHeading>
                            <GridInnerContainer container direction={'row'} spacing={1}>
                              <Grid item xs={6} md={6} style={{whiteSpace: "nowrap", paddingTop: "25px", textAlign: "right"}}>
                                <Grid><GridLabel>Temporary Phrase: </GridLabel></Grid>
                              </Grid>
                              <Grid item xs={6} sm={6} style={{paddingLeft: "20px"}}>
                                <Grid><Input label="" /></Grid>
                              </Grid>
                              <Grid item xs={6} md={6} style={{textAlign: "right"} }>
                                <Grid><StyledButton onClick={handleCancel}>Cancel</StyledButton></Grid>
                              </Grid>
                              <Grid item xs={6} sm={6} style={{textAlign: "left"}}>
                                <Grid><Link href={"./DLockerRecovery"}><StyledButton onClick={handleValidateTempPhrase}>Validate</StyledButton></Link></Grid>
                              </Grid>
                            </GridInnerContainer>
                          </GridOuterContainer>
                        </Grid>
                        }

                    </Grid>


                </Grid>
                <Footer />
        </div>
    );
};
