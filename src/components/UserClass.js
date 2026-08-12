import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     name: props.name,
    //     location: props.location,
    //     contact: props.contact
    // };
    this.state = {
      count: 0,
      count2: 1,
      data: null,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vaishnaviavdhoot");
    const jsonData = await data.json();
    this.setState({ data: jsonData });
  }
  componentDidUpdate(prevProps, prevState) {
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
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component unmounted");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count, count2, data } = this.state;
    // debugger;
    return (
      <div className="border border-solid border-black p-2 m-2">
        {/* <p>Count: {count}</p>
                <p>Count2: {count2}</p>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
                <button onClick={() => this.setState({ count: count - 1 })}>Decrement Count</button>
                <button onClick={() => this.setState({ count2: count2 + 1 })}>Increment Count2</button>
                <button onClick={() => this.setState({ count2: count2 - 1 })}>Decrement Count2</button> */}
        <h1 className="text-2xl font-bold mb-4"> Profile Details</h1>
        <img
          src={data ? data.avatar_url : "Loading..."}
          alt="User Avatar"
          style={{ height: "100px" }}
        />
        <h2 className="font-bold mt-2">Id : {data ? data.id : "Loading..."}</h2>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Name : </h4>
          <h4>{data ? data.name : "Loading..."}</h4>
        </div>

        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Username :</h4>
          <h4>{data ? data.login : "Loading..."}</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Bio :</h4>
          <h4> {data ? data.bio : "Loading..."}</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Contact : vaishnaviavadhoot06@gmail.com</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Location :</h4>
          <h4> {data ? data.location : "Loading..."}</h4>
        </div>

        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Account Type : </h4>
          <h4>{data ? data.user_view_type : "Loading..."}</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Number of Public Repos : </h4>
          <h4>{data ? data.public_repos : "Loading..."}</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">GitHub Url :</h4>
          <h4> {data ? data.html_url : "Loading..."}</h4>
        </div>
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Created At : </h4>
          <h4>{data ? data.created_at : "Loading..."}</h4>
        </div>  
        <div className="flex mt-2 gap-1">
          <h4 className="font-bold">Updated At :</h4>
          <h4>{data ? data.updated_at : "Loading..."}</h4>
        </div>
      </div>
    );
  }
}
