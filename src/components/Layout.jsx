import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="bg-[#0a0a0a] w-screen min-h-screen">
      <nav className=" max-w-4xl w-full flex flex-col lg:flex-row justify-between items-center pt-10 px-4 mx-auto mb-0 lg:mb-20 bg-[#0a0a0a]">
        <div className="bg-gradient-to-r from-red-900 w-fit p-2 rounded-md mr-auto">
          <Link to={"/"}>
            <h1 className="text-white text-4xl lg:text-6xl font-outfit bg-[#0a0a0a] p-3 rounded-[4px]">
              Notes Manager
            </h1>
          </Link>
        </div>
        {tasks.length === 0 ? null : (
          <div className="bg-gradient-to-l from-red-800 p-2 rounded-md max-w-48 w-full ml-auto max-lg:mt-4">
            <h2 className="text-white text-xl lg:text-2xl font-outfit bg-[#0a0a0a] p-3 rounded-[4px] text-right">
              Notes: {tasks.length}
            </h2>
          </div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;