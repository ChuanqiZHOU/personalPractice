
import { connect } from "react-redux"

const ClassNumber = (props) => {
    return (
        <>
            <div>This is ClassNumber Container: {props.classNumber}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return (
        {classNumber: state.countReducer}
    )
}

const mapDispatchToProps ={}
const ClassNumberContainer = connect(mapStateToProps, mapDispatchToProps)(ClassNumber)

export default ClassNumberContainer