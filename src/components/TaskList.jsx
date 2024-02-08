import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { setItem } from "../utils/localStorage";
import ButtonPrimary from "../utils/Buttons/ButtonPrimary";

import light from "/images/light.png";
import edit from "/images/edit.svg";
import bubble from "/images/bubble.svg";
import deletes from "/images/delete.svg";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);



  useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

  return (
    <div className="bg-[#0a0a0a] pb-16">
      <section className="px-0 sm:px-10 flex flex-col justify-center items-center ">
        <Link to={"/create-note"}>
          <ButtonPrimary
            styles="border-2 border-red-800 px-4 py-2 font-outfit mt-20 text-base transition-all hover:scale-105"
            text="Create Note"
            img={light}
          />
        </Link>
        {tasks.length !== 0 ? (
          <>
            <h2 className="text-white text-3xl mt-10 mb-5">Notes:</h2>
            <ul className="gap-8 columns-1 sm:columns-2 lg:columns-3 font-outfit">
              {tasks.map((task) => (
                <li
                  className="break-inside-avoid flex flex-col justify-between bg-zinc-800 text-white rounded-md w-64 min-h-52 p-4 mb-8"
                  key={task.id}
                >
                  <h3 className="mb-3 bg-[#0a0a0a] w-fit rounded-[3px] px-2 mx-auto">{task.title}</h3>
                  <p className="text-ellipsis overflow-hidden">{task.description}</p>
                  {/* <p className="">{task.completed}</p> */}
                  <div className="flex flex-row-reverse flex-wrap justify-between mt-3">
                    <ButtonPrimary 
                      styles="text-sm border border-red-800 px-2 py-1" 
                      text="Delete" 
                      img={deletes}
                      deleteId={task.id}
                    />
                    <Link to={`/edit-note/${task.id}`}>
                      <ButtonPrimary
                        styles="text-sm border border-red-800 px-2 py-1"
                        text="Edit"
                        img={edit}
                      />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-white font-outfit text-lg">
              The notes list will be seen here.
            </p>
            <h2 className="text-white font-outfit text-lg flex mt-2">
              {" "}
              So... Add new notes!
              <img className="ml-2 w-5" src={bubble} alt="logo" />
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskList;
