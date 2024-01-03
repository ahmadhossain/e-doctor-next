import { specialityFields } from "@/data/specialityFields";
import Link from "next/link";

const SpecialityPage = () => {
  return (
    <div className="h-screen px-10 pt-8">
      <h2>Please select a speciality</h2>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {specialityFields.map((el) => (
          <Link href={`/lobby`}>
            <div className="min-h-[150px] shadow-md border rounded-lg p-6">
              <div className="font-semibold text-2xl pb-3">{el.name}</div>
              <div className="text-slate-500">{el.details}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityPage;
