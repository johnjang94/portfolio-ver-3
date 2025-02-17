import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    otherJobTitle: "",
    selfEmployed: "",
    organizationType: "",
    inquiryTitle: "",
    inquiryMessage: "",
    attachment: null,
  });
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "jobTitle") {
      setFormData((prev) => ({
        ...prev,
        jobTitle: value,
        otherJobTitle: "",
        selfEmployed: "",
      }));
    } else if (name === "otherJobTitle") {
      setFormData((prev) => ({
        ...prev,
        otherJobTitle: value,
        selfEmployed:
          value.toLowerCase() === "freelancer" ? prev.selfEmployed : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryMessage: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sending", { state: { data: formData } });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-center my-10 text-2xl">Let&#39;s stay in-touch!</h1>
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="jobTitle" className="block mb-1">
          Your occupation
        </label>
        <select
          id="jobTitle"
          name="jobTitle"
          required
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="recruiter">Recruiter</option>
          <option value="ux designer">UX Designer</option>
          <option value="product designer">Product Designer</option>
          <option value="senior designer">Senior Designer</option>
          <option value="head hunter">Head Hunter</option>
          <option value="other">Other</option>
        </select>
      </div>
      {formData.jobTitle === "other" && (
        <div>
          <label htmlFor="otherJobTitle" className="block mb-1">
            Please specify
          </label>
          <input
            id="otherJobTitle"
            name="otherJobTitle"
            type="text"
            required
            value={formData.otherJobTitle}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      )}
      {formData.jobTitle === "other" &&
        formData.otherJobTitle.toLowerCase() === "freelancer" && (
          <div>
            <label htmlFor="selfEmployed" className="block mb-1">
              Are you self-employed?
            </label>
            <select
              id="selfEmployed"
              name="selfEmployed"
              required
              value={formData.selfEmployed}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        )}
      <div>
        <label htmlFor="organizationType" className="block mb-1">
          Company / Organization
        </label>
        <select
          id="organizationType"
          name="organizationType"
          required
          value={formData.organizationType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="company">Company</option>
          <option value="recruiting agency">Recruiting Agency</option>
          <option value="non-profit">Non-profit</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="inquiryTitle" className="block mb-1">
          Inquiry Title
        </label>
        <input
          id="inquiryTitle"
          name="inquiryTitle"
          type="text"
          required
          value={formData.inquiryTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Inquiry Message</label>
        <ReactQuill
          value={formData.inquiryMessage}
          onChange={handleQuillChange}
          modules={modules}
          className="bg-white border rounded shadow-lg"
        />
      </div>
      <div>
        <label htmlFor="attachment" className="block mb-1">
          Attachment (optional)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          onChange={handleFileChange}
          className="w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
