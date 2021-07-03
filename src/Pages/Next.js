import React from 'react'
import Tick from "../images/tick-success.gif"
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Next = () => {
    const classes = useStyles();
  return (
    <>
       <div className={classes.root}>
          <Typography align="center">
          <img src={Tick} className={classes.tick}></img>
          </Typography>
          <Typography style={{textAlign:"center"}}className={classes.heading}>UPLOADED SUCCESSFULLY</Typography>
       </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
      root:{
        marginTop:40
      },
      heading: {
        fontWeight: "bold",
        fontSize: "1.4rem",
        textAlign: "justify",
        letterSpacing:" 0.05em",
        color: "#6C63FF",
        '@media screen and (max-width: 1024px)': {
          fontSize: "1.1rem",
          marginTop:20
       } 
    },
      tick:{
        height:100
      }
  }));
export default Next
