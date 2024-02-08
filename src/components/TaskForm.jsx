import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../utils/tasks/taskSlice";
import good from "/images/task.svg";
import { v4 as uuid } from "uuid";
import ButtonPrimary from "../utils/Buttons/ButtonPrimary";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const pathname = useLocation();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
      navigate("/");
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <>
      {pathname.pathname === "/create-note" ? (
        <h2 className="text-white text-xl md:text-3xl">Create Note:</h2>
      ) : (
        <h2 className="text-white text-xl md:text-3xl">Edit Note:</h2>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mx-auto rounded-md font-outfit text-white w-full max-w-80 mt-4"
      >
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={task.title}
          className="mb-7 bg-[#1e1e1e] w-full pl-2 py-1 mx-auto rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-red-950"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
          className="bg-[#1e1e1e] w-full min-h-36 pl-2 py-1 mx-auto rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-red-950"
        />

        <ButtonPrimary
          styles="border-2 border-green-600 px-4 py-2 font-outfit mt-7 text-base transition-all hover:scale-105"
          text="Save"
          img={good}
        />
      </form>
    </>
  );
};

export default TaskForm;
