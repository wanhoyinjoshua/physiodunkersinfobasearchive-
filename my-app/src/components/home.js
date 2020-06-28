import React from 'react';
import Bloglist from './bloglist.js'




class Home extends React.Component {

    constructor(props){

        super(props);
      
        this.state = {pagetorender: Bloglist};
        

        
       
    }
    
    render() {
     
        
        
      return(
      <div>

        <this.state.pagetorender/>
       

        

      </div>
      
                   
         
      
      )
    }
  }

  export default Home