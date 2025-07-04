import { Form, useNavigation } from "react-router";
import { redirect } from "react-router";

export default function CourseForm({ method, data }) {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method={method}>
      <div className="">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={data ? data.title : ""}
        />
      </div>
      <div className="">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          required
          defaultValue={data ? data.image : ""}
        />
      </div>
      <div className="">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          required
          defaultValue={data ? data.description : ""}
        ></textarea>
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Kayıt ediliyor" : "Kaydet"}
      </button>
    </Form>
  );
}

export async function courseAction({ request, params }) {
  const data = await request.formData();

  let url = "http://localhost:50000/courses";
  const method = request.method;

  if (method == "PUT") {
    const courseid = params.courseid;
    url = url + "/" + courseid;
  }

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (response.ok) {
    return redirect("/courses");
  }
}
