import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { UserDetailsContext } from '../context'

const Courses = (props) => {
  const user = useContext(UserDetailsContext)
  return (
    <>
    <div>Courses</div>
    <>{user?.userDetails?.userName}</>
    <div>{props.getUserDetail.userName}</div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    getUserDetail: state.userDetails
  }
}
export default connect(mapStateToProps, null)(Courses)
// export default Courses
