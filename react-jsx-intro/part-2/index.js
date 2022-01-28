const Tweet = (props) => {
    return(<div> <p>Username: <b>{props.username}</b></p>
        <p>Name: {props.name}</p>
        <p>Date: {props.date}</p>
        <p>Message: {props.message}</p>
    </div>
    )
}