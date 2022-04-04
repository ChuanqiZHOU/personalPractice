import CountContainer from "./containers/CountContainer"
import ClassNumberContainer from "./containers/ClassNumber"
import Person from "./containers/Person"
const App = () => {
    return (
        <div>
            <CountContainer />
            <ClassNumberContainer></ClassNumberContainer>
            <hr></hr>
            <Person></Person>
        </div>
    )
}

export default App