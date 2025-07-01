import {Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsum
        autem eveniet rem nostrum eos fugit eligendi cupiditate inventore quos?
      </p>
      <Outlet/>
    </div>
  );
}
