import React, { Component } from 'react';

class Dino extends Component {
   constructor(props) {
       super(props)

       this.state = {
           body: props.body,
           editBody: ''
       }
   }
   edit = () => {
       const newBody = this.state.editBody
       this.setState({ body: newBody })
   }
   changeBody = (evt) => {
       let newValue = evt.target.value

       this.setState({editBody: newValue})
   }
    render() {
        return (
            <div>
                <h1>Title: {this.props.title} </h1>
                <p>Author: {this.props.author} </p>
                <p>Body: {this.state.body} </p>
                <input value={this.state.edit} onChange={this.changeBody}/>
                <button onClick={this.edit}>Edit</button>
                <h2>Comments</h2>
                <p>{this.props.comments.forEach(element => {return element})}</p>
            </div>
        )
   }

   
}

export default Dino;