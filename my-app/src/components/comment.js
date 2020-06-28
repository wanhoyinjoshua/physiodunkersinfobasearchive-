import React from 'react';
import "./comment.css"





class Comment extends React.Component {

    constructor(props){

        super(props);
        this.submitcomment = this.submitcomment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        /*this.latestcomment = this.latestcomment.bind(this);*/
        
        this.state={comment:"",typecomment:""}

        
       
    }
    submitcomment(e){
      e.preventDefault();
      console.log(e.target.value)
   
if (this.state.typecomment==""){
  window.alert("Hello frineds !! Please Give us some feedback!")
}
else{
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment:  this.state.typecomment })
    };

    fetch(`/api/${this.props.blog}`, requestOptions)
      .then(res => res.json())
      .then(hh=>this.setState({comment:hh.comment}))
      
      
    
        this.setState({typecomment:""})
  }
        
  


       
    }
    handleChange(e){
      this.setState({typecomment:e.target.value})

    }

    componentDidMount(){
      fetch(`/api/${this.props.blog}`)
      .then(res => res.json())
      .then(res=>this.setState({comment:res}) )


      
      
      
 
    
      
     
      
     
  
      
      
      

   

      .catch(error=> console.log(error))
      
    }
   /* latestcomment(){

      var myarray = [...this.state.comment]

      if(myarray.length>20){

        return myarray.splice(0,myarray.length-20)

      }
      else{
        return myarray
      }

      

    }*/

    
    render() {
    

 var myarray = [...this.state.comment]
 

var hi= myarray.map(item=><li key={item.toString()}className="commentstyle">{item}</li>)
     
      return(
      
     <div className="commentbox">
       <div className="commentheader">
         Comment 
       </div>
       <div className="pretty">
       <div className="comment">

       
     
{hi}

</div>

       </div>
     
     <div className="typecomment">

       <form onSubmit={this.submitcomment} >
         <input type={Text} className="commentinput"value={this.state.typecomment} placeholder="comment here"  onChange={this.handleChange}></input>
         <button className="submitcomment"> Submit</button>


       </form>
     </div>
       
     </div>
                   
         
      
      )
    }
  }

  export default Comment