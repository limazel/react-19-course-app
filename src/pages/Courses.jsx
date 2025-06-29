import { Link } from "react-router";
import { useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();
  return (
    <>
      <h1>Courses Page</h1>
      <div id="courses">
        {courses.map((item) => (
          <div key={item.id} className="card">
            <img src={`http://localhost:50000/images/${item.image}`} alt="" />
            <div className="">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={"/courses/" + item.id}>Detay</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLoader() {
  const res = await fetch("http://localhost:50000/courses");
  return res.json();
}
