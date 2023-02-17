import React from 'react'
import { Form, Input, Select, Button, DatePicker} from "antd";
import "antd/dist/antd.css";

const SearchForm = () => {
  const { RangePicker } = DatePicker;
  return (
    <div>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 18,
            }}
            layout="horizontal"
            style={{ padding: "5px 50px 5px 0px" }}
          >
            <Form.Item label="Location">
              <Select>
                <Select.Option value="demo">Kenya</Select.Option>
                <Select.Option value="demo">Tanzania</Select.Option>
                <Select.Option value="demo">Uganda</Select.Option>
                <Select.Option value="demo">Rwanda</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Currency">
              <Select>
                <Select.Option value="demo">KSH</Select.Option>
                <Select.Option value="demo">USD</Select.Option>
                <Select.Option value="demo">EURO</Select.Option>
                <Select.Option value="demo">TSH</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Budget">
              <Input />
            </Form.Item>
            <Form.Item label="Date">
              <RangePicker />
            </Form.Item>
          </Form>
          <Button type="primary" style={{ marginLeft: "10px" }}>
            Submit
          </Button>
    </div>
  )
}

export default SearchForm