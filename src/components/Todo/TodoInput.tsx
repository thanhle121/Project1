import React, { useState, useRef, FormEvent } from "react";
import { createTodo } from "../../actions/todos";
import { useDispatch } from "react-redux";
import { Input, InputRef  } from 'antd';

const TodoInput: React.FC = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');
    const inputRef = useRef<InputRef>(null);
    const buttonStyle: React.CSSProperties = {
        backgroundColor: '#1890ff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 20px',
        margin: '20px',
        cursor: 'pointer',
        fontSize: '16px',
    };
    const inputStyle: React.CSSProperties = {
        width: '300px',
        marginRight: '10px',
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            dispatch(createTodo(inputValue));
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    return (
        <div className="todo__input">
            <form onSubmit={handleSubmit}>
                <Input
                    style={inputStyle}
                    ref={inputRef}
                    name="content"
                    placeholder="Add new todo"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button style={buttonStyle} type="submit">ADD</button>
            </form>
        </div>
    )
}


export default TodoInput;