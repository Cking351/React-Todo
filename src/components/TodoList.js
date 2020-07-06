import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.things.map(item => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
            <button onClick={props.clearItems}>Clear Task</button>
        </div>
    )
}

export default TodoList;