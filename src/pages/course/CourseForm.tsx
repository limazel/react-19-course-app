import { Form } from "react-router";

export default function CourseForm({ data }) {
  return (
    <Form method="post">
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
      <button>Submit</button>
    </Form>
  );
}
