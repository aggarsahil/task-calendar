import CalendarView from './components/CalendarView';
import ChartView from './components/ChartView';
import { Layout } from 'antd';

function App() {
  return (
    <Layout style={{ padding: 24 }}>
      <h1>📅 Task Calendar</h1>
      <CalendarView />
      <ChartView />
    </Layout>
  );
}

export default App;
