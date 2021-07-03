import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormDialog from './FormDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';
export default function ContentContainer() {
    const [value, setValue] = React.useState('aadhar');
    const [progress, setProgress] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const onChange=(val)=> { setProgress(val)}
    const onChangeSuccess=(val)=> { setSuccess(val)}
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <div className={classes.container}>
      {progress ? <div style={{textAlign:"center"}}> <CircularProgress/></div> :''}
      {success ? <Alert severity="success">Your Document is Uploaded Successfully</Alert> :''}
        <Typography className={classes.heading}>
          SELECT A DOCUMENT TO PROCEED
        </Typography>
        <FormControl className={classes.form}
         component="fieldset">
        <RadioGroup aria-label="document" name="document" value={value} onChange={handleChange} className={classes.radio}>
          <FormControlLabel value="aadhar" control={<Radio style={{color:"#6C63FF"}}/>} label="Aadhar Card" className={classes.heading2}/>
          <FormControlLabel value="pan" control={<Radio style={{color:"#6C63FF"}}/>} label="Pan Card" className={classes.heading2} />
          <FormControlLabel value="voter" control={<Radio style={{color:"#6C63FF"}}/>} label="Voter Identity Card" className={classes.heading2} />
          <FormControlLabel value="passport" control={<Radio style={{color:"#6C63FF"}}/>} label="Passport" className={classes.heading2} />
          <FormControlLabel value="driving" control={<Radio style={{color:"#6C63FF"}}/>} label="Driving Licence" className={classes.heading2} />
        </RadioGroup>
        <FormDialog onProgressChange={onChange} onSuccessChange={onChangeSuccess}/>
      </FormControl>
      </div>
      </div>
    );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    paddingLeft:40,
    // paddingRight:40,
    '@media screen and (max-width: 1024px)': {
      paddingLeft:15,
      paddingRight:15,
      display:"block"
   } 
  },
  heading: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      textAlign: "justify",
      letterSpacing:" 0.05em",
      color: "#6C63FF",
      marginTop:40,
      '@media screen and (max-width: 1024px)': {
        fontSize: "1.1rem",
        marginTop:20,
    } 
  },
  form:{
    marginTop:20,
    marginTop:10,
    marginBottom:10,
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
    width:"100%"
  },
  heading2: {
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
  },
  heading3: {
    marginTop:10,
    marginBottom:10,
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: "0.05em",
    color: "#114433",
  },
  btn:{
    backgroundColor:"#6C63FF",
    color:"white",
    fontWeight: "bold",
    letterSpacing:"0.1em",
    "&:hover": {
      backgroundColor:"#5b52ea",
    }
  },
  responsive: {
    float:"right",
    height:"550px",
    '@media screen and (max-width: 1024px)': {
      width: "100%",
      height: "auto",
      marginBottom:50
   } 
  },
  visible1:{
    display:"none",
    '@media screen and (max-width: 1024px)': {
      display:"block",
   } 
  },
  visible2:{
    display:"block",
    '@media screen and (max-width: 1024px)': {
      display:"none",
   } 
  },
  container:{
    paddingRight:100,
    paddingTop:100,
    '@media screen and (max-width: 1024px)': {
      paddingRight:0,
   } 
  }
}));