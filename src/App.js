import Dino from './Dino'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Dino 
        title={props.post.title}
        author={props.post.author}
        body={props.post.body}
        comments={props.post.comments}
      />
      
    </div>
  );
}

export default App;
