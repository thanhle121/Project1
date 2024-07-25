import React from 'react';
import Todo from './components/Todo';
import { Typography } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const appStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  padding: '20px 0',
  backgroundColor: '#ccc',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  maxWidth: 1200,
  color: '#ddd',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '40px',
};

const font: React.CSSProperties = {
  fontWeight: '700',
  fontSize: '50px',
  color: '#005FC5',
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <Content style={contentStyle}>
        <Title type="success" style={font}>
          TODO APP
        </Title>
        <Todo />
      </Content>
    </div>
  );
};

export default App;
