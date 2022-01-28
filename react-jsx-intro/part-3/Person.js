const Person = (props) => {
    let vote = props.age >= 18? "Go vote" : "You must be 18";
    let hobbies = props.hobbies.map(hobby => <li> {hobby}</li>);
    return (
        <div>
            <p>Learn something about this person</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    hobbies
                    {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
 
}