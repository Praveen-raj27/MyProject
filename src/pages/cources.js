import React, { useContext } from "react";
import { connect } from "react-redux";
import { UserDetailsContext } from "../context";
import Counter from "./counter";
import {useCounterStore, useUpdateUser} from "../store/useStore";
const Courses = (props) => {
  const user = useContext(UserDetailsContext);
  const count1 = useCounterStore((state) => state.count);
  const { userDetails } = useUpdateUser();
  return (
    <div style={{ marginTop: "10%" }}>
      <div>Coursess</div>
      <>{user?.userDetails?.userName}</>
      <div>{props.getUserDetail.userName}</div>
      <Counter />
      <div>Count from Zustand: {count1}</div>

      <div>
        <h3>User Details:</h3>
        <p>Name: {userDetails.userName}</p>
        <p>Email: {userDetails.email}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.userDetails,
  };
};
export default connect(mapStateToProps, null)(Courses);
// export default Courses
