import React,{ useState, useContext } from 'react'
import { connect } from "react-redux";
import {actionGetUserList} from '../redux/action'
import { UserDetailsContext } from '../context';

const Home=(props)=> {
    const [userDetails, setUserDetails] = useState({});
    const user = useContext(UserDetailsContext);
    const handleChange=(event)=>{
        let {name, value} = event.target;
        setUserDetails((prevState)=>({...prevState, [name]: value}))
        user.setUserDetails((prevState)=>({...prevState, [name]: value}))
    }
    const handleLogin=()=>{
        props.actionGetUserList(userDetails)
        window.history.pushState(userDetails,'','/course')
    }
  return (
    <>
    <div>User Name</div>
    <input type={'text'} name={'userName'} onChange={e=>handleChange(e)}></input>
    <div>Password</div>
    <input type={'password'} name={'password'} onChange={e=>handleChange(e)}></input>
    <div> <button onClick={handleLogin}>login</button></div>
   
    </>
  )
  
}
const mapDispatchToProps = dispatch =>{
    return { actionGetUserList : (data)=> dispatch(actionGetUserList(data))}
}
export default connect(null,mapDispatchToProps)(Home)
// export default Home