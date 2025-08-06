import { Modal, Form, Input, Select, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string(),
  category: Yup.string().required('Required'),
});

export default function TaskModal({ date, onClose }) {
  const dispatch = useDispatch();

  return (
    <Modal title="Add Task" open={true} onCancel={onClose} footer={null}>
      <Formik
        initialValues={{ title: '', description: '', category: '' }}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(addTask({ ...values, date: date.format('YYYY-MM-DD') }));
          onClose();
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Title" validateStatus={touched.title && errors.title ? 'error' : ''} help={touched.title && errors.title}>
              <Input name="title" value={values.title} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Description">
              <Input name="description" value={values.description} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Category">
              <Select name="category" value={values.category} onChange={(value) => handleChange({ target: { name: 'category', value } })}>
                <Select.Option value="success">Success</Select.Option>
                <Select.Option value="warning">Warning</Select.Option>
                <Select.Option value="issue">Issue</Select.Option>
                <Select.Option value="info">Info</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">Add Task</Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
