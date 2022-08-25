import React, {useEffect, useState} from "react";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/review-and-accept-loan-comp/FooterRevised/FooterRevised";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import {styled, Button, Link} from "@dfs-react-ui/core";
import { Checkbox } from "@dfs-react-ui/core";
import spinnerIcon from '../../../assets/images/images/loader.gif';
import dl from '../images/license.gif';
import ss from '../images/sscard.gif';
import ins from '../images/insurance.gif';
import Countdown from "react-countdown";




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
    },
    removeBorder: {
        border: "none",
    },
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
    paddingLeft: "55px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",
        paddingLeft: "20px",

    }
}));

const ConfirmationHeading = styled("h1")(({ theme }) => ({
    color: "blue",
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",


    }
}));

const SucccessDownloadMsg = styled("h1")(({ theme }) => ({
    color: "green",
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "20px",
    [theme.breakpoints.down(767)]: {
        width: "100%",
        fontSize: "16px",
        marginBottom: "30px",

    }
}));

const OrangeText = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main
}));

const GridOuterContainer = styled(Grid)(({ theme }) => ({
    borderRadius: "12px",
    width: "100%",
    textAlign: "left",

}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px"
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
        marginBottom: "10px",
        paddingLeft: "0px",
    }
}));

export const DLockerRecovery = () => {
    const classes = styles();
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(showConfirm) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [showConfirm]);

    const handleClick = () => {
        setShowConfirm(true);
    }

    return (
        <>
            <Grid
                  container
                  direction="column"
                  justifyContent="center"
            >
                <Header />
                <Grid className={classes.appContainer} role="main">
                    <Grid container direction={"column"}>
                        <Grid className={classes.pageHeadingDiv}>
                            <PageHeading>
                                Discover <OrangeText>dLocker </OrangeText> Dashboard
                            </PageHeading>
                        </Grid>
                        <Grid item xs={12} style={{paddingTop: "20px"}}>
                            <ConfirmationHeading><Grid>Session expires in </Grid><Grid><Countdown date={Date.now() + 900000}/></Grid></ConfirmationHeading>
                        </Grid>

                        <Grid container direction={"column"} style={{paddingLeft: "15px", paddingBottom:"10px"}}>
                            <Grid item xs={8} sm={12}>
                                <Grid><GridLabel>Name: Lakshmi Narayan</GridLabel></Grid>
                            </Grid>
                            <Grid item xs={4} sm={12}>
                                <Grid><GridLabel>Date of Birth: 01/01/1980</GridLabel></Grid>
                            </Grid>
                            <Grid item xs={4} sm={12}>
                                <Grid><GridLabel>SSN: XXX-XX-1234</GridLabel></Grid>
                            </Grid>
                        </Grid>

                        <Grid>
                          <WelcomeHeading>Please choose the digital identities to download:</WelcomeHeading>
                        </Grid>
                        {loading && !showConfirm &&
                        <Grid className={classes.text}>
                          <img src={spinnerIcon} className={classes.orangeSpinner} alt='discover digital locker'/>
                        </Grid>
                        }
                        <Grid container direction={'column'}>
                          <GridOuterContainer>
                            <Grid container direction={'row'}>
                                <Grid container>
                                    <Grid item xs={8} sm={2}>
                                        <Grid><Checkbox/></Grid>
                                    </Grid>
                                    <Grid item xs={4} sm={10}>
                                        <Grid><img src={dl} style={{height: "170px"}}/></Grid>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Grid><Checkbox/></Grid>
                                    </Grid>
                                    <Grid item xs={8} sm={10}>
                                        <Grid ><img src={ss} style={{height: "160px"}}/></Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} >
                                      <Grid item xs={12} md={12} style={{textAlign: "center", paddingLeft: "30px"} }>
                                        <Grid><StyledButton onClick={handleClick}>Download digital Identities</StyledButton></Grid>
                                      </Grid>
                                </Grid>
                                {loading &&
                                <Grid style={{paddingLeft: "120px", paddingBottom: "20px"}}>
                                  <img src={spinnerIcon} className={classes.orangeSpinner} alt='discover digital locker'/>
                                </Grid>
                                }

                                {!loading && showConfirm ?
                                    <Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} style={{paddingLeft: "20px"}}>
                                        <Grid item xs={12} md={12} style={{textAlign: "center"} }>
                                            <SucccessDownloadMsg>You have successfully downloaded your digital identities. Remember to safely discard the local downloaded copies from misuse after reinstating your wallet.</SucccessDownloadMsg>
                                        </Grid>
                                    </Grid>
                                 : <div></div>}
                            </Grid>

                          </GridOuterContainer>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Grid>
        </>
    );
};
