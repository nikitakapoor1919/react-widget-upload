import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Tick from "../images/tick.gif"
import { Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from 'react-router-dom';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const hiddenFileInput = React.useRef(null);
  const [SelectedFile, setSelectedFile] = React.useState(null);
  const [Show, setShow] = React.useState(false);
  const history=useHistory()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    props.onSuccessChange(false)
    const fileUploaded = event.target.files[0];
    setSelectedFile(event.target.files[0])
    const timer1 = setTimeout(() => {
      props.onProgressChange(true)
    }, 1000);  
    const timer = setTimeout(() => {
      props.onProgressChange(false)
      props.onSuccessChange(true)
      setShow(true)
    }, 7000);  
  };
  const handleChangeUpload = event => {
    props.onProgressChange(true)
    props.onSuccessChange(false)
    const timer = setTimeout(() => {
      handleClickOpen()
    }, 7000);  
    const timer3=setTimeout(() => { 
     history.push('/next');
  }, 5000)
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {SelectedFile ? <div>
          <p>File Name: {SelectedFile.name}</p>        
          <p>File Type: {SelectedFile.type}</p> 
          <p>Document: {props.card}</p>         
       </div>:""}
      <div style={{textAlign:"center"}}>
      {Show ? 
       <div className={classes.btnBox}>
          <Button variant="contained"  className={classes.btn2} onClick={handleChangeUpload} startIcon={<CloudUploadIcon />}>
            UPLOAD
          </Button>
          <Button variant="contained" className={classes.btn3} onClick={handleClick} startIcon={<CloudUploadIcon />}>
            CHOOSE FILE
          </Button>
        </div>
     :SelectedFile ?
       <Button variant="contained" disabled  className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
       CHOOSE FILE
     </Button>
       :
       <Button variant="contained"  className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
         CHOOSE FILE
     </Button>}
      </div>
    <input type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display:'none'}} 
    /> 
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    marginBottom:80,
  },
  btn:{
      backgroundColor:"#6C63FF",
      color:"white",
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:250,
      "&:hover": {
        backgroundColor:"#5b52ea",
      }
    },
    btn2:{
      backgroundColor:"#6C63FF",
      color:"white",
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:175,
      "&:hover": {
        backgroundColor:"#5b52ea",
      }
    },
    btn3:{
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:175,

    },
    heading: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      textAlign: "justify",
      letterSpacing:" 0.05em",
      color: "#6C63FF",
      '@media screen and (max-width: 1024px)': {
        fontSize: "1.1rem",
        marginTop:20
     } 
  },
  btnBox:{
    display:"flex",
    justifyContent:"space-evenly",
    '@media screen and (max-width: 550px)': {
      display:"block",
   } 
  }
}));