const App = () => {
    return (<div>
        
        <Tweet username = "nn" name = "nabin" date="01/28/2022" message="fun" />
        <Tweet username = "md" name = "Mohammad" date = "01/28/2022" message = "learn coding"/>
        <Tweet username = "me" name = "learner" date = "long time" message="hard to learn coding"/>

    </div>)
}
// insert it in DOM
ReactDOM.render(<App/>, document.getElementById("root"));