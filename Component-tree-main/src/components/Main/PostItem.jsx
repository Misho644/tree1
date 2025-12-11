import React from 'react';

const PostItem = (props) => {
  const { title, description } = props.post;
  return (
    <article style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default PostItem;
