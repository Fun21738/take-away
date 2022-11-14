import React, {useState} from 'react' 

 

function Component { 

 

    state= { 

        posts:[], 

        id:'2' 

    } 

 

    function componentDidMount(){ 

        this.fetchPost() 

      

    } 

 

    componentDidUpdate(prevprops, prevstate){ 

        if(prevstate.id!== this.state.id){ 

            this.fetchPost() 

        } 

    } 

 

    function fetchPost(){ 

        const response= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.id}`) 

        const data= await response.json() 

        this.setState({posts:data}) 

            

    } 

 



    return ( 

        

      <div> 

         <input type="text" value={this.state.id}  

         onChange={(e)=>this.setState({id:e.target.value})} /> 

         <p>{JSON.stringify(this.state.posts)}</p> 

      </div> 

    ) 

  

} 