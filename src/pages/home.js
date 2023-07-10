import React,{ useState, useContext, useEffect } from 'react'
import { connect } from "react-redux";
import {actionGetUserList} from '../redux/action'
import { UserDetailsContext } from '../context';
import PureComponentInput from './pureComponent';


const Home=(props)=> {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class SingleLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
    prepand(val) {
      let newNode = new Node(val);
      if (this.head == null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
       this.head = newNode;
      }
      this.length++;
    }
    append(val){
      let newNode = new Node(val);
      if(this.head == null){
        this.head = newNode
      }else{
        let prevNode = this.head;
        while(prevNode.next){
          prevNode = prevNode.next
        }
        prevNode.next = newNode;
        this.length++;
      }
    }
    insert(val, index){
      if(index == 0){
        this.prepand(val);
      }else{
        const newNode = new Node(val);
        let prevNode = this.head;
        for(let i=0 ; i<index - 1; i++){
          prevNode = prevNode.next;
        }
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
      }
    }
    removeFrom(index){
      if(index < 0 || index >= this.length){
        return null
      }
      let removedNode;
      if(index === 0){
        removedNode = this.head;
        this.head = this.head.next;
      } else{
        let prevNode = this.head;
        for(let i = 0 ; i < index-1; i++){
          prevNode = prevNode.next;
        }
        removedNode = prevNode.next;
        prevNode.next = removedNode.next;
      }
      this.length--;
    }
    print(){
      if(this.head === null){
        console.log('empty');
      }else{
        let curr = this.head;
        let listedValue = '';
        while(curr){
          listedValue += `${curr.data} `
          curr = curr.next
        }
        console.log(listedValue,'li');
      }
    }
  }
  const list = new SingleLinkedList()
  list.insert(1,0);
  list.insert(2,0);
  list.print()
  list.insert(3,1)
  list.insert(4,2);
  list.print()
  list.removeFrom(0);
  list.removeFrom(1)
  list.print()
  // list.insert(2,0);
  // console.log(list, "list");
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
    <PureComponentInput name={userDetails.userName}></PureComponentInput>
    </>
  )
  
}
const mapDispatchToProps = dispatch =>{
    return { actionGetUserList : (data)=> dispatch(actionGetUserList(data))}
}
export default connect(null,mapDispatchToProps)(Home)
// export default Home