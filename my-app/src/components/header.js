import React from 'react';
import "./bloglist.css"





class Buttonlist extends React.Component {

    constructor(props){

        super(props);
        this.homepage = this.homepage.bind(this);
        

        
       
    }
    homepage(){
        window.location.reload(true)
    }
    
    render() {
     
        
      return(
      
     <div>
     <button className="logo"onClick={this.homepage}>
       
     <img className="logo"src={process.env.PUBLIC_URL + '/assets/images/y.png'} />
       
       </button>
       
     </div>
                   
         
      
      )
    }
  }

  export default Buttonlist