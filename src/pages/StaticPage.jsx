import { Link } from "../components/Link.jsx";

export function StaticPage({ title }) {
  return (
    <main className="static-page">
      <div className="container">
        <h1 className="section-title">{title}</h1>
        <p className="section-desc">
          This page is now served by the React app. Move the old static page
          content into a component or load it from your API when ready.
        </p>
      </div>
    </main>
  );
}
