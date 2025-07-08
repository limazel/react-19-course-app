import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError;
  let title = "Error";
  let message = "Bir hata oluştu. Tekrar deneyiniz.";

  if (error.status === 404) {
    title = "Not Found Error";
    message = "Aradığınız Kaynak Bulunamadı";
  }

  if (error.status === 500) {
    title = "";
    message = "Aradığınız Kaynak Bulunamadı";
  }
  return (
    <div id="error">
      <h1>Not Found</h1>
      <p>Kaynak Bulunamadı.</p>
      <Link to="/">Home</Link>
    </div>
  );
}
