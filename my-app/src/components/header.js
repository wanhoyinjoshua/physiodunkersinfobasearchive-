import React from 'react';
import "./bloglist.css"
import "./header.css"
import Home from './home.js'
import Contact from './contact.js'





class Buttonlist extends React.Component {

    constructor(props){

        super(props);
        this.homepage = this.homepage.bind(this);
        this.ig = this.ig.bind(this);
        this.utube= this.utube.bind(this);
        
       
        

        
       
    }
    homepage(){
        window.location.reload(true)
        document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
       
    }
    ig(){
      window.location.href = "http://stackoverflow.com";
      console.log("hi")

    }
    utube(){

      window.location.href = "http://stackoverflow.com";
     

    }
    
    render() {


     
        
      return(
   
    <React.Fragment>
  
            
    <div className="header">
    <button className="logo"onClick={this.homepage}>
       
       <img className="logo"src={process.env.PUBLIC_URL + '/assets/images/y.png'} />
         
         </button>
    <div class="header-right">
      
      <button onclick={this.utube}className="headword" ><a target="_blank"href="https://www.instagram.com/physiodunkers/"><img className="socialmediahandles"src={process.env.PUBLIC_URL + '/assets/images/ig.jpg'} /></a></button>
      <button onclick={this.ig}className="headword"><a target="_blank"href="https://www.youtube.com/channel/UCF_gWxwPXEVE_D2McTP-BTA/featured"><img className="socialmediahandles"src={process.env.PUBLIC_URL + '/assets/images/utube.png'} /></a></button>
    </div>

    

    
  </div>
 

  </React.Fragment>   
      
      )
    }
  }

  export default Buttonlist