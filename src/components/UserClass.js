import React from "react";

export class UserClass extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     name: props.name,
        //     location: props.location,
        //     contact: props.contact
        // };
        this.state = {
            count: 0,
            count2: 1,
            data: null
        };
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/vaishnaviavdhoot');
        const jsonData = await data.json();
        this.setState({ data: jsonData });
    }
    componentDidUpdate(prevProps, prevState){
       this.timer = setInterval(() => {
           console.log("Count updated in class");
       }, 1000);
    }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.count !== this.state.count){
    //         console.log("Count updated");
    //     }
    //     if(prevState.count2 !== this.state.count2){
    //         console.log("Count2 updated");
    //     }
    // }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component unmounted");
    }
    render(){
        const { name, location, contact } = this.props;
        const { count, count2, data } = this.state;
        // debugger;
        return (
            <div className="user-card">
                {/* <p>Count: {count}</p>
                <p>Count2: {count2}</p>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
                <button onClick={() => this.setState({ count: count - 1 })}>Decrement Count</button>
                <button onClick={() => this.setState({ count2: count2 + 1 })}>Increment Count2</button>
                <button onClick={() => this.setState({ count2: count2 - 1 })}>Decrement Count2</button> */}
                <h1> Profile Details</h1>
                <img src={data ? data.avatar_url : "Loading..."} alt="User Avatar" style={{height: '100px'}}/>
                <h2>Id : {data ? data.id : "Loading..."}</h2>
                <h2>Name : {data ? data.name : "Loading..."}</h2>
                <h4>Username : {data ? data.login : "Loading..."}</h4>
                <h4>Bio : {data ? data.bio : "Loading..."}</h4>
                <h4>Contact : vaishnaviavadhoot06@gmail.com</h4>
                <h4>Location : {data ? data.location : "Loading..."}</h4>
                <h4>Account Type : {data ? data.user_view_type : "Loading..."}</h4>
                <h4>Number of Public Repos : {data ? data.public_repos : "Loading..."}</h4>
                <h4>GitHub Url : {data ? data.html_url : "Loading..."}</h4>
                <h4>Created At : {data ? data.created_at : "Loading..."}</h4>
                <h4>Updated At : {data ? data.updated_at : "Loading..."}</h4>
            </div>
        );
    }
}