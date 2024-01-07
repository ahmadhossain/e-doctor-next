import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  nid: string;
  bmdc: string;
  type: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Nid",
    dataIndex: "nid",
    key: "nid",
  },
  {
    title: "Registration Number (BMDC)",
    dataIndex: "bmdc",
    key: "bmdc",
  },
  {
    title: "Doctor Type",
    dataIndex: "type",
    key: "type",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>approve</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Buse Solmaz",
    email: "buse.solmaz@example.com",
    mobile: "01646767921",
    gender: "female",
    nid: "658982346975345",
    bmdc: "82346975345",
    type: "Medical",
  },
  {
    key: "2",
    name: "Philippe Grewal",
    email: "philippe.grewal@example.com",
    mobile: "01546364972",
    gender: "male",
    nid: "658982346975345",
    bmdc: "82346975345",
    type: "Dental",
  },
  {
    key: "3",
    name: "Ines Norberg",
    email: "ines.norberg@example.com",
    mobile: "01346517939",
    gender: "female",
    nid: "658982346975345",
    bmdc: "82346975345",
    type: "Veterinary",
  },
];

const dashboard: React.FC = () => (
  <div className="p-10">
    <Table columns={columns} dataSource={data} />
  </div>
);

export default dashboard;
