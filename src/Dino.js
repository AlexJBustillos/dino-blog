function Dino(props) {
   console.log(props);

   return (
       <div>
           <h1>Title: {props.title} </h1>
           <p>Author: {props.author} </p>
           <p>Body: {props.body} </p>
           <h2>Comments</h2>
       </div>
   )
}

export default Dino;