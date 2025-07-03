import { useRouteLoaderData } from "react-router";

export default function CourseDetailsPage() {
  const course = useRouteLoaderData("course-details");
  return (
    <>
      <div className="course-details">
        <h1>{course.title}</h1>
        <div className="course-desc">
          <img src={`http://localhost:50000/images/${course.image}`} alt="" />
          <div className="">
            <div className="">{course.description}</div>
          <div className="icons">
            <span>
              <i className="fa-regular fa-user"></i> {course.users}
            </span>
            <span>
              <i className="fa-regular fa-thumbs-up"></i> {course.likes}
            </span>
            <span>
              <i className="fa-regular fa-comment"></i> {course.comments}
            </span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function courseDetailsLoader({params}) {
  const {courseid} = params;
  const res = await fetch("http://localhost:50000/courses/" + courseid);
  return res.json();
}