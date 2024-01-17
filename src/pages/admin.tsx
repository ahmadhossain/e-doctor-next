import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
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

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "Buse Solmaz",
//     email: "buse.solmaz@example.com",
//     mobile: "01646767921",
//     gender: "female",
//     nid: "658982346975345",
//     bmdc: "82346975345",
//     type: "Medical",
//   },
//   {
//     key: "2",
//     name: "Philippe Grewal",
//     email: "philippe.grewal@example.com",
//     mobile: "01546364972",
//     gender: "male",
//     nid: "658982346975345",
//     bmdc: "82346975345",
//     type: "Dental",
//   },
//   {
//     key: "3",
//     name: "Ines Norberg",
//     email: "ines.norberg@example.com",
//     mobile: "01346517939",
//     gender: "female",
//     nid: "658982346975345",
//     bmdc: "82346975345",
//     type: "Veterinary",
//   },
// ];

const AdminPage = () => {
  const [data, setData] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <div className="text-blue-500">{text}</div>,
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
      dataIndex: "regNumBMDC",
      key: "regNumBMDC",
    },
    {
      title: "Doctor Type",
      dataIndex: "doctorType",
      key: "doctorType",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleSubmit(record.email)}
            className="text-green-500"
          >
            approve
          </Button>
        </Space>
      ),
    },
  ];

  const handleSubmit = async (email: string) => {
    const res = await fetch(
      `http://localhost:8080/api/doctors/verify/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    const getUnverifiedDoctor = async () => {
      const res = await fetch(`http://localhost:8080/api/doctors/unverified`, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data);
      setData(data);
    };

    getUnverifiedDoctor();
  }, []);

  return (
    <div className="p-10">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AdminPage;
