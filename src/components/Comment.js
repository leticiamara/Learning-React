import React from 'react';

const Comment = ({ comment, handleDelete }) => (
    <div>
        <p>{comment.text} - {comment.id}</p>
        <button onClick={() => handleDelete(comment.id)}>Delete</button>
    </div>
)

export default Comment