
import React from "react";
import { Card, Button } from "@material-ui/core";
import resources from "../../../resources/google.png";


function LoginComp() {

 
  return (
    <Card>
      <Button  style={{width:"23rem",backgroundColor:"#4385f5"}}
      variant="contained" color="primary" href={`https://9aa6c71cc3c0.ngrok.io/auth/google`}>
           <img src={resources}  style={{width:"1.5rem",marginLeft:"-8rem"}}/>
        Continue with Google
      </Button>
    </Card>
  );
};

export default LoginComp;