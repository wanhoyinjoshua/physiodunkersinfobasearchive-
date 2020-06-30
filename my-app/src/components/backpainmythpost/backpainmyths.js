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
    componentDidMount(){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    render() {
      var lanversion = this.state.render
     
        
      return(
      
     <div>
       
       <React.Fragment>
         <div className="center margintoplan">

       
       <button className="lan"onClick={this.changelaneng}>Eng </button>
       <button className="lan"onClick={this.changelanchin}>中</button>
       </div>
     
    </React.Fragment>
       
       

       {lanversion}

       <Comment blog="backpainmyth"/>
       
       
       
     </div>
                   
         
      
      )
    }
  }

  export default Buttonlist