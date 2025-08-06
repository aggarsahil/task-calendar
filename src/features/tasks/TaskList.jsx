import { useSelector, useDispatch } from 'react-redux';
import { Tag, Button, List } from 'antd';
import { deleteTask } from './tasksSlice';

const categoryColors = {
  success: 'green',
  warning: 'orange',
  issue: 'red',
  info: 'blue',
};

export default function TaskList({ date }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.filter(t => t.date === date));

  return (
    <List
      header={`Tasks for ${date}`}
      dataSource={tasks}
      renderItem={item => (
        <List.Item
          actions={[
            <Button onClick={() => dispatch(deleteTask(item.id))} danger>Delete</Button>,
          ]}
        >
          <Tag color={categoryColors[item.category]}>{item.category}</Tag> {item.title}
        </List.Item>
      )}
    />
  );
}
