import { useState } from "react";
import { Checkbox, Input, Radio, Space } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";

import DoctorCard from "@/components/DoctorCard";

const doclist = [
  {
    name: "Dr. Shafwanur Rahman",
    specialities: "General Physician",
    degree: "MBBs",
    working: "Dhaka Shishu Hospital",
    rating: 5,
    experience: 5,
  },
  {
    name: "Dr. Shafwanur Rahman",
    specialities: "General Physician",
    degree: "MBBs",
    working: "Dhaka Shishu Hospital",
    rating: 5,
    experience: 5,
  },
  {
    name: "Dr. Shafwanur Rahman",
    specialities: "General Physician",
    degree: "MBBs",
    working: "Dhaka Shishu Hospital",
    rating: 5,
    experience: 5,
  },
];

const DoctorListPage = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="min-h-screen flex px-8 py-5">
      <div className="min-h-screen w-80 p-10">
        <div className="font-semibold text-lg text-slate-800 py-3">Filters</div>
        <Checkbox onChange={onCheckboxChange}>Online now</Checkbox>
        <Checkbox onChange={onCheckboxChange}>
          Available in next 2 hours
        </Checkbox>
        <div className="font-semibold text-lg text-slate-800 py-3">Sort By</div>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Default</Radio>
            <Radio value={2}>Experience</Radio>
            <Radio value={3}>Rating</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="w-full px-10 py-5">
        {doclist.map((doc) => (
          <DoctorCard {...doc} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListPage;
