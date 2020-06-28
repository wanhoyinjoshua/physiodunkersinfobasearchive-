import React from 'react';
import "./index.css"
import Chin from "./chin.js"
import Eng from "./eng.js"
import Comment from "../comment"





class Buttonlist extends React.Component {

    constructor(props){

        super(props);
        this.state = {render:<Chin/>}
        this.changelaneng = this.changelaneng.bind(this);
        this.changelanchin = this.changelanchin.bind(this);
        

        
       
    }

    changelanchin(){
    this.setState({render:<Chin/>})

    }
    changelaneng(){
      this.setState({render:<Eng/>})

    }
    
    render() {
      var lanversion = this.state.render
     
        
      return(
      
     <div>
       
       <React.Fragment>
         <div className="center">

       
       <button className=""onClick={this.changelaneng}>Eng</button>
       <button className=""onClick={this.changelanchin}>Chin</button>
       </div>
     
    </React.Fragment>
       
       

       {lanversion}

       <Comment blog="backpainmyth"/>
       
       
       
     </div>
                   
         
      
      )
    }
  }

  export default Buttonlist