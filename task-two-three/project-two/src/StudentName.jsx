function Studentname(props){
    return(
        <div className="card">
         <h2 className="one">{props.name}</h2> 
         <h2 className="two">{props.department}</h2>
        </div>
     );
}

export default Studentname