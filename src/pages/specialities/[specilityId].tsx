import DoctorCard from "@/components/DoctorCard";

const DoctorListPage = () => {
  const doclist = [
    {
      name: "Dr. Shafwanur Rahman",
      specialities: "General Physician",
      degree: "MBBs",
    },
    {
      name: "Dr. Shafwanur Rahman",
      specialities: "General Physician",
      degree: "MBBs",
    },
    {
      name: "Dr. Shafwanur Rahman",
      specialities: "General Physician",
      degree: "MBBs",
    },
  ];
  return (
    <div className="min-h-screen flex px-8 py-5">
      <div className="min-h-screen border w-80 p-10">sidebar</div>
      <div className="border w-full px-10 py-5">
        {doclist.map((doc) => (
          <DoctorCard {...doc} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListPage;
