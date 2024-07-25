import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdCheckmark } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { FaUndo } from 'react-icons/fa';
import { completedTodo, deleteTodo, undoTodo } from '../../actions/todos';
import { List, Button, Typography } from 'antd';
import { RootState } from '../../reducers';

const { Text } = Typography;

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  const handleCompleted = (id: number) => {
    dispatch(completedTodo(id));
  };

  const handleUndo = (id: number) => {
    dispatch(undoTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todoList && (
        <div className="todo__list--container">
          <List
            className="todo__list"
            dataSource={todoList}
            renderItem={(item: Todo) => (
              <List.Item
                key={item.id}
                actions={[
                  item.completed ? (
                    <Button onClick={() => handleUndo(item.id)} icon={<FaUndo />} />
                  ) : (
                    <Button onClick={() => handleCompleted(item.id)} icon={<IoMdCheckmark />} />
                  ),
                  <Button onClick={() => handleDelete(item.id)} icon={<IoCloseSharp />} danger />
                ]}
              >
                <Text
                  className={`todo__content ${item.completed ? 'todo__content--completed' : ''}`}
                  style={{ fontSize: '24px' }}
                >
                  {item.content}
                </Text>
              </List.Item>
            )}
          />
        </div>
      )}
    </>
  );
};

export default TodoList;
