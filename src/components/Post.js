import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component{  
  
  render(){
    //const {key , data} =  this.props;
    const {data} =  this.props;
    console.log(data);          

    return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={data.author.avatar} />
        <div className="details">
          <span>{data.author.name}</span>
          <span>{data.date}</span>
        </div>
      </div>
      <p className="post-content">{data.content}</p>
      <div className="post-comments">
      <div className="divider" />
      {data.comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
    </div>    
      )
    }
    
  }
  
  export default Post;