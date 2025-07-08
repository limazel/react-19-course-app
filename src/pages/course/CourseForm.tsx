import { Form, useActionData, useNavigation } from "react-router";
import { redirect } from "react-router";
import { isValidImage, isRequiredCheck } from "../../utils/validations";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const result = useActionData();

  return (
    <Form method={method}>
      {result && result.errors && (
        <ul className="errors">
          {
            Object.values(result.errors).map((err) => (
              <li key={err}>{err}</li>
            ))
          }
        </ul>
      )}
      <div className="">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={data ? data.title : ""}
        />
        {result && result.title && <p>{result.title}</p>}
      </div>
      <div className="">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={data ? data.image : ""}
        />
        {result && result.image && <p>{result.image}</p>}
      </div>
      <div className="">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          defaultValue={data ? data.description : ""}
        ></textarea>
        {result && result.description && <p>{result.description}</p>}

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

  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const errors = {};

  // if (!isRequiredCheck(formData.title)) {
  //   errors.title = "Title alanı zorunlu";
  // };

  // if (!isRequiredCheck(formData.description)) {
  //   errors.description = "Description alanı zorunlu";
  // };

  // if (!isValidImage(formData.image)) {
  //   errors.image = "Image alanı zorunlu ve .jpg, .jpeg, .png olmak zorunda";
  // }

  if(Object.keys(errors).length) {
    return errors;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if(response.status === 403) {
    return response;
  }

  if (response.ok) {
    return redirect("/courses");
  }
}
