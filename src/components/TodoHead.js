import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 35px;
    color:#333;
  }
  .day {
    margin-top: 5px;
    color: #868e96;
    font-size: 20px;
  }
  .tasks-left {
    color: #FF90B9;
    font-size: 20px;
    margin-top: 35px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday:
      'long'
  });
  //  Date의 toLocaleString 함수를 사용하여 오늘의 날짜를 구현.

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;