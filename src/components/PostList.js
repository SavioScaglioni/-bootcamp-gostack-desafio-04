import React, {Component} from 'react';

import Post from './Post';

import perfil_user from '../assets/perfil.jpg';

class PostList extends Component{
  state =  {
    posts: [
      {
        id: 1,
        author:{
          name: 'Savio Rezende',
          avatar: {perfil_user}
        },
        date: '01/03/2020',
        content: 'Teste',
        comments:[
          {
            id: 1,
            author:{
              name: 'Higor rezende',
              avatar: '',
            },
            content: 'Teste comentário'
          }
        ]
      }
    ]    
  };
  
  render(){ 
    const { posts } = this.state;
    return (      
      <div className="postlist">
      {posts.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </div> 
      );
      
    }
    
  }
  
  export default PostList;