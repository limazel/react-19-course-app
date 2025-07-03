import {Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="course-layout">
      <h1>Courses</h1>
      <Link to={"create"}>Course Create</Link>
      <Outlet/>
    </div>
  );
}
