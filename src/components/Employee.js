function Employee(props){
    return (
    <>
        <h3>Hello, {props.name}!!</h3>
        <p>{props.role ? props.role : "No role"}</p>
    </>
    )
}

export default Employee;