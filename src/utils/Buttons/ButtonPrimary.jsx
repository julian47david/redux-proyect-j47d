/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { deleteTask } from "../tasks/taskSlice";


const ButtonPrimary = ({ styles, text, img, deleteId }) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <button
      onClick={() => handleDelete(deleteId)}
      className={`flex justify-between items-center text-white font-outfit leading-[1px] rounded-md ${styles}`}
    >
      {text}

      {img && <img className="ml-2 w-5" src={img} alt="logo" />}
    </button>
  );
};

export default ButtonPrimary;
