import React, {Component} from 'react';
import axios from 'axios';


class Postdata extends Component {
    state = {
        posts: [],
        x: false,
        p: " "
    }

    componentDidMount(){
        axios.get('https://genesis-forger.firebaseio.com/medical.json')
        .then(response => {
            console.log(response.data[Object.keys(response.data)])
            const posts = response.data
            
            const updatedPost = Object.keys(posts).map(post => {
                //console.log(post.id);
                return {
                    ...response.data[post]
                    
                }
            })
            
            this.setState({posts: updatedPost});
            console.log(posts.data);
        });
    }

    
    
    getHandler = () => {
        this.setState({x: true})
        console.log(this.state.posts)
       
    }

    

   
    render(){
        let post = " "
        if(this.state.x){
            
             post = this.state.posts;
        }
        return(
            <div>
                <button onClick={this.getHandler}>Get Data</button>
                    {post}
            </div>
          
        )
    }
}

export default Postdata;