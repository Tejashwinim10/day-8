import './App.css'
function StudentCard(props){
    return(
        <div className="caard">
         <h2 className="one">{props.namee}</h2> 
         <h2 className="two">{props.major}</h2>
         <h2 className="three">{props.year}</h2>
        </div>
     );
}

export default StudentCard