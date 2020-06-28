import React from 'react';
import "./bloglist.css"
import Backpainmyths from "./backpainmythpost/backpainmyths.js"
import Emptypage from "./emptypage.js"
import Header from "./header.js"




class Bloglist extends React.Component {

    constructor(props){

        super(props);
        this.backpainmyths = this.backpainmyths.bind(this);
        this.state = {
          object :[
            //first post 
            <div >
                <button className="blogpic" onClick={this.backpainmyths}>
                  <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpain.png'} />
                  <div className="blogdesccription">desciption</div>
                </button>

            </div>
        
            //second psot 

            ,    

            <div >
                <button className="blogpic" onClick={this.sayHello}>
                  <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpain.png'} />
                  <div>desciption</div>
                </button>

            </div>
            //third post
            
            
            ,   <div>
            <button className="blogpic" onClick={this.sayHello}>
        <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpain.png'} />
        ;<div>desciption</div></button>

        </div>
    
          
          
          
          
          ]
            
            
            ,
                      blog:Emptypage}
        

        
       
    }
    backpainmyths() {
      this.setState({blog:Backpainmyths, object:""})
    }
    
   
   
    render() {
     const render = this.state.object
     const blog = this.state.blog
      
      return(
      
     <div>
       <Header/>
      {render}
      <this.state.blog />
      
       
     </div>
                   
         
      
      )
    }
  }

  export default Bloglist