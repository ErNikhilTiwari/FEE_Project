import { useState } from "react";
import axios from "../../config/api/axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { toast } from "react-toastify";
import CircleDesign from "../Layouts/CircleDesign";

const TeacherForm = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    qualification: "",
    department: "",
    role: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

   // Regular expression pattern for a valid email address
   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   const spaceRegex = /^\s+/;

   const addTeacher = async (e) => {
     e.preventDefault();
     try {
       // Check if the email is valid
       if (!emailPattern.test(teacher.email)) {
         setError("invalid email error");
         return;
       }
 
       // Check if the name and username do not start with spaces
       if (teacher.name.trim() === "" || teacher.username.trim() === "") {
         setError("Name and username cannot start with spaces.");
         return;
       }
 
       const reqData = JSON.stringify(teacher);
       const response = await axios.post("teacher/123", reqData);
       navigate("../");
       toast.success(response.data.message);
     } catch (err) {
       setError(err);
     }
   };
 

  return (
    <main className="relative z-0 flex h-screen items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 py-8 text-slate-900 light:from-slate-800 light:to-slate-950 light:text-slate-200">
      <CircleDesign />
      <section className="my-8 flex w-[75%] animate-fadeInFast flex-col justify-start rounded-md bg-slate-100 p-4 text-slate-900 opacity-70 hover:opacity-100 focus:opacity-100 light:bg-[#060913] light:text-slate-50 md:p-8 xl:w-1/2 xl:flex-row">
        <div className="mr-8 flex flex-col-reverse justify-between xl:flex-col ">
          <h2 className="my-4 text-4xl font-bold light:text-slate-400 md:text-5xl">
            Teacher
            <br /> Registration
          </h2>
          <Link
            className="flex items-center font-spectral text-xl font-semibold text-slate-900 light:text-slate-50"
            to="../"
          >
            <FaUniversity />
            <p className="decoration-violet-900 decoration-2 hover:underline light:decoration-violet-300">
              Chitkara
            </p>
          </Link>
        </div>
        <form className="w-full font-medium tracking-wide accent-violet-600">
          <label className="block" htmlFor="name">
            Name:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-[1.5px] focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400 "
            type="text"
            name="name"
            required
            id="name"
            value={teacher.name}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400 "
            type="text"
            required
            id="email"
            name="email"
            value={teacher.email}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="qualification">
            Qualification:
          </label>
          <input
            className="mb-4 block h-10  w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400 "
            type="text"
            required
            name="qualification"
            id="qualification"
            value={teacher.qualification}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="department">
            Department:
          </label>
          <select
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-[1.5px] focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400"
            placeholder="select department"
            name="department"
            id="department"
            value={teacher.department}
            required
            onChange={(e) => handleFormChange(e)}
          >
            <option defaultValue hidden>
              Select Department
            </option>

            <option
              className="min-h-[2rem] bg-violet-500 font-semibold leading-8 text-slate-100"
              value="Computer"
            >
              Computer
            </option>
          </select>
          <label className="block" htmlFor="username">
            Username:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400 "
            name="username"
            type="text"
            required
            id="username"
            value={teacher.username}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="password">
            Password:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 light:border-slate-200 light:caret-inherit light:focus:border-violet-400 light:active:border-violet-400 "
            type="password"
            name="password"
            id="password"
            value={teacher.password}
            required
            onChange={(e) => handleFormChange(e)}
          />
          <button
            type="submit"
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 p-1 font-bold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 light:border-violet-300 light:bg-violet-600 light:text-slate-50 light:hover:bg-slate-900 "
            onClick={(e) => addTeacher(e)}
          >
            Register
          </button>
          <p className="m-2 overflow-hidden text-ellipsis whitespace-nowrap text-center font-medium text-red-700">
            {error
              ? error.response && error.response.data
                ? error.response.data.message
                : error === "invalid email error"
                  ? "Please enter a valid email address."
                  : "Name/Username starts with spaces."
              : ""}
          </p>
        </form>
      </section>
    </main>
  );
};

export default TeacherForm;
