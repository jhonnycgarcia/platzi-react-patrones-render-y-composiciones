import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunct = props.children || props.render;
  return (
    <section className='TodoList-container'>
        {props.error && props.onError()}

        {props.loading && props.onLoading()}
        
        {(!props.loading && !props.totalTodos) && props.onEmpty()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunct)}
    </section>
  );
}

export { TodoList };
