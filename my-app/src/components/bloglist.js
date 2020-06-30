import React from 'react';
import "./bloglist.css"
import Backpainmyths from "./backpainmythpost/backpainmyths.js"
import Emptypage from "./emptypage.js"
import Header from "./header.js"




class Bloglist extends React.Component {

    constructor(props){

        super(props);
        this.backpainmyths = this.backpainmyths.bind(this);
        this.up=this.up.bind(this);
        this.state = {
          blogpost :[
            <div className="title">BlogPost:</div>,
            //first post 
            <div className="postblock">
                <button className="blogpic" onClick={this.backpainmyths}>
                  <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpainmythpost/posture.png'} />
                  <div className="blogdesccription">Top 10 Myths of Low Back<br></br>你對背痛嘅十個誤解</div>
                </button>

            </div>
        
            //second psot 

            ,    

            <div className="postblock">
                <button className="blogpic" onClick={this.sayHello}>
                  <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpainmythpost/backpain.png'} />
                  <div>desciption</div>
                </button>

            </div>
            //third post
            
            
            ,   <div className="postblock">
            <button className="blogpic" onClick={this.sayHello}>
        <img className="blogpic"src={process.env.PUBLIC_URL + '/assets/images/backpainmythpost/backpain.png'} />
        ;<div>desciption</div></button>

        </div>
    
          
          
          
          
          ]
            
            
            ,
                      blog:Emptypage}
        

        
       
    }
    backpainmyths() {
      this.setState({blog:Backpainmyths, blogpost:""})
    }
    up(){
      
      document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
    }
    
   
   
    render() {
     const render = this.state.blogpost
     const blog = this.state.blog
      
      return(
      
     <div>
       <Header/>
       <div className="center">
       <button>All</button>
       <button>Low back</button>
       <button>leg</button>
       </div>
      {render}
      <this.state.blog />
      <button onClick={this.up}className="scrolupbutton"><img className="up"src={process.env.PUBLIC_URL + '/assets/images/up.jpg'} /></button>
      
       
     </div>
                   
         
      
      )
    }
  }

  export default Bloglist