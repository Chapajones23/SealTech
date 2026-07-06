import { useState } from "react";
import { labelFor } from "../utils/navigation.js";
import { Field } from "../components/Shared.jsx";
import {
  submitProject,
  submitCall,
} from "../services/api.js";

function ApiModal({ title, eyebrow, submit, onClose, fields }) {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setStatus("");
    const payload = Object.fromEntries(new FormData(form));
    try {
      await submit(payload);
      form.reset();
      setStatus("Submitted successfully.");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="project-modal is-open" aria-hidden="false">
      <div className="project-modal-backdrop" onClick={onClose}></div>
      <div className="project-modal-card" role="dialog" aria-modal="true">
        <button
          className="project-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <p className="project-modal-eyebrow">{eyebrow}</p>
        <h3 className="project-modal-title">{title}</h3>
        <form className="project-modal-form" onSubmit={handleSubmit}>
          {fields.map((field) =>
            field === "details" || field === "notes" ? (
              <div
                className="project-modal-field project-modal-field-full"
                key={field}
              >
                <label htmlFor={field}>{labelFor(field)}</label>
                <textarea
                  id={field}
                  name={field}
                  rows="4"
                  required={field === "details"}
                />
              </div>
            ) : (
              <Field
                compact
                key={field}
                name={field}
                type={
                  field === "email" ? "email" : field === "date" ? "date" : "text"
                }
                label={labelFor(field)}
                required={field !== "notes"}
              />
            )
          )}
          <div className="project-modal-actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={pending}
            >
              {pending ? "Submitting..." : "Submit"}
            </button>
            <p className="project-modal-message">{status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function ProjectModal({ onClose }) {
  return (
    <ApiModal
      title="Start Your Project"
      eyebrow="New Project"
      submit={submitProject}
      onClose={onClose}
      fields={["fullName", "email", "projectType", "details"]}
    />
  );
}

export function CallModal({ onClose }) {
  return (
    <ApiModal
      title="Schedule a Call"
      eyebrow="Consultation"
      submit={submitCall}
      onClose={onClose}
      fields={["fullName", "email", "phone", "date", "notes"]}
    />
  );
}
