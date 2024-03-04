import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Layout from "./components/Layout.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "/create-note",
        element: <TaskForm />,
      },
      {
        path: "/edit-note/:id",
        element: <TaskForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
