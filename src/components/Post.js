import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {

    state = {
        comments: [],
        newCommentText: '',
        id: 0
    }

    handleSubmit = (event) => {
        this.setState( {
            comments: [
                ...this.state.comments,
                { 
                    text: this.state.newCommentText,
                    id: this.state.id
                }
            ],
            newCommentText: '', 
            id: this.state.id + 1
        } )
        event.preventDefault()
    }

    handleTextChange = (event) => {
        this.setState({ newCommentText: event.target.value })
    }

    handleDelete = (id) => {
        console.log(id, this.state.comments.filter((item) => item.id !== id));
        const newComments = this.state.comments.filter((item) => item.id !== id)
        this.setState( {
            comments: newComments
        })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                     />
                    <button type="submit">Comentar</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} comment={comment} handleDelete={(id) => this.handleDelete(id)}/>
                }) }
            </div>
        );
    }
}