import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Button, Input, Select, BackButton, Label } from "../components";
import { registerFieldData } from "../constants";

const RegisterPage = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { dirstrict: "", gender: "" },
    mode: "onTouched",
    criteriaMode: "all",
  });

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        role: "doctor",
      }),
    });
    reset();
  };

  const renderedInput = registerFieldData.map((field) => {
    return (
      <div key={field.name}>
        <Label label={field.label} required={field.required} />
        {field.type === "select" ? (
          <Select
            name={field.name}
            register={register}
            required={field.required}
            options={field.options}
          />
        ) : (
          <Input
            name={field.name}
            register={register}
            required={field.required}
            pattern={field.pattern}
            defaultValue={field.defaultValue}
            getFieldState={getFieldState}
          />
        )}
        <ErrorMessage
          errors={errors}
          name={field.name}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p class="px-2 pb-1 text-red-600" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
    );
  });

  return (
    <div className="bg-primary w-full pt-14 pb-7 md:pb-20 shadow-2xl shadow-blue-300 ">
      <div className="hidden md:flex">
        <BackButton />
      </div>
      <div className={`flex justify-center items-center flex-col`}>
        <div className="w-full md:w-1/2 ">
          <form
            className="px-10 md:px-14 py-5  rounded-lg border border-blue-300"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="my-2 rounded-full mx-auto">
              <h3 className="py-1.5 font-bold text-center">
                Doctor Registration
              </h3>
            </div>
            {renderedInput}
            <div className="flex justify-end">
              <Button className="mt-3" success>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
