import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { Select, Button } from 'antd';

export default function ChartView() {
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('');

  const categoryCount = tasks
    .filter(task => !filter || task.category === filter)
    .reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + 1;
      return acc;
    }, {});

  const data = Object.entries(categoryCount).map(([category, count]) => ({
    category,
    count,
  }));

  return (
    <div style={{ height: 300 }}>
      <Select value={filter} onChange={setFilter} allowClear placeholder="Filter by Category" style={{ marginRight: 10 }}>
        <Select.Option value="success">Success</Select.Option>
        <Select.Option value="warning">Warning</Select.Option>
        <Select.Option value="issue">Issue</Select.Option>
        <Select.Option value="info">Info</Select.Option>
      </Select>
      <Button onClick={() => setFilter('')}>Reset</Button>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#1890ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
