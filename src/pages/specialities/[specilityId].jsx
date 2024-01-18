import { useEffect, useState } from "react";
import { Checkbox, Input, Radio, Space } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";

import DoctorCard from "@/components/DoctorCard";
import { useRouter } from "next/router";

const DoctorListPage = () => {
  const [value, setValue] = useState(1);
  const [doctors, setDoctors] = useState([]);

  const router = useRouter();
  const sid = router?.query?.specilityId;

  useEffect(() => {
    const getVerifiedDoctors = async (slug) => {
      const res = await fetch(
        `http://localhost:8080/api/doctors/speciality/${slug}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setDoctors(data);
    };

    if (sid) getVerifiedDoctors(sid);
  }, [sid]);

  useEffect(() => {
    const getVerifiedDoctors = async (filter) => {
      const sid = router?.query?.specilityId;
      const res = await fetch(
        `http://localhost:8080/api/doctors/${filter}/${sid}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setDoctors(data);
    };

    if (value === 2) getVerifiedDoctors("sortByExperience");
    else if (value === 3) getVerifiedDoctors("sortByRating");
  }, [value]);

  const onRadioChange = async (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onCheckboxChange = (e) => {
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
        <Radio.Group onChange={onRadioChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Default</Radio>
            <Radio value={2}>Experience</Radio>
            <Radio value={3}>Rating</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="w-full px-10 py-5">
        {doctors.length !== 0 && doctors?.map((doc) => <DoctorCard {...doc} />)}
      </div>
    </div>
  );
};

export default DoctorListPage;
