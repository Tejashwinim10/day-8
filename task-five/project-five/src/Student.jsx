function Student (props){
  return (
    <div className="card">
    <h4>{props.name}</h4>
    <h4>{props.major}</h4>
    <h4>{props.year}</h4>
    </div>
  );
}
 export default Student