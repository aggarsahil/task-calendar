import { Calendar } from 'antd';
import { useState } from 'react';
import TaskModal from '../features/tasks/TaskModal';
import dayjs from 'dayjs'; // Required for date comparisons

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date, { source }) => {
    // Only open modal if the user clicked on a date cell (not header/month/year selector)
    if (source === 'date') {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Calendar
        fullscreen={true}
        onSelect={handleSelect}
      />
      {selectedDate && (
        <TaskModal date={selectedDate} onClose={() => setSelectedDate(null)} />
      )}
    </>
  );
}
