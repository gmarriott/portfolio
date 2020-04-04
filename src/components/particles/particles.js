import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
	  height: "100%",
      background: "linear-gradient(#8b9798 0%, rgb(60, 60, 60) 100%)"
    }}
  >
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 55
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    </div>
);
