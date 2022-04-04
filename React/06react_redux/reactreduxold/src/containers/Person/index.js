import React, {useRef} from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux';
import {personAction} from '../../redux/actioncreators/person'
const Person = (props) => {
    const nameNode = useRef();
    const ageNode = useRef();
    const addPerson = () => {
        const name = nameNode.current.value;
        const age = ageNode.current.value;
        const personObj = { id: nanoid(), name, age };
        props.addOnePerson(personObj);
        nameNode.current.value = "";
        ageNode.current.value=""
    }
    return (
      <>
        <div>
                <h2>I am Person Container: { props.renshu}</h2>
        <input ref={nameNode} type="text" placeholder="input name" />
        <input ref={ageNode} type="text" placeholder="input age" />
        <button onClick={addPerson}>ADD</button>
          <ul>
                    {props.persons.map(item => (
                        <li key={item.id}>{item.id}---{item.name}---{item.age}</li>

            ))}
          </ul>
        </div>
      </>
    )
   
}
const mapStateToProps = (state) => {
    return {
        persons: state.personReducer, renshu:state.countReducer
    }
}
const mapDispatcheToProps = {
    addOnePerson: personAction
}
const PersonContainer = connect(mapStateToProps, mapDispatcheToProps)(Person)
export default PersonContainer