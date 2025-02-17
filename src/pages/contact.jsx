import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  AtomicBlockUtils,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaLink,
  FaImage,
  FaPalette,
  FaTextHeight,
  FaQuoteLeft,
  FaListOl,
  FaListUl,
  FaIndent,
  FaOutdent,
} from "react-icons/fa";

const customStyleMap = {};
function addStyle(styleKey, styleValue) {
  if (!customStyleMap[styleKey]) {
    customStyleMap[styleKey] = styleValue;
  }
}

export default function Contact() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(14);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Occupation: "",
    Other: "",
    SelfEmployed: "",
    Organization: "",
    Inquiry: "",
    Message: "",
    attachment: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) =>
    setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    const html = stateToHTML(newEditorState.getCurrentContent());
    setFormData((prev) => ({ ...prev, Message: html }));
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const onColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    const styleKey = `COLOR_${newColor}`;
    addStyle(styleKey, { color: newColor });
    toggleInlineStyle(styleKey);
  };

  const onFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    const styleKey = `FONTSIZE_${newSize}`;
    addStyle(styleKey, { fontSize: newSize });
    toggleInlineStyle(styleKey);
  };

  const promptForLink = () => {
    const url = window.prompt("Enter URL");
    if (!url) return;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newContentState = Modifier.applyEntity(
      contentStateWithEntity,
      selection,
      entityKey
    );
    setEditorState(
      EditorState.push(editorState, newContentState, "apply-entity")
    );
  };

  const promptForImage = () => {
    const url = window.prompt("Enter image URL");
    if (!url) return;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );
    setEditorState(newEditorState);
  };

  const handleIndent = () => {
    alert("Indent 기능은 직접 구현해야 합니다.");
  };
  const handleOutdent = () => {
    alert("Outdent 기능은 직접 구현해야 합니다.");
  };

  const handleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/sending", { state: { data: formData } });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-center my-10 text-2xl">Let&#39;s stay in touch!</h1>

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
        <label htmlFor="Occupation" className="block mb-1">
          Occupation
        </label>
        <input
          id="Occupation"
          name="Occupation"
          type="text"
          required
          value={formData.Occupation}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="Organization" className="block mb-1">
          Organization
        </label>
        <input
          id="Organization"
          name="Organization"
          type="text"
          required
          value={formData.Organization}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="Inquiry" className="block mb-1">
          Inquiry
        </label>
        <input
          id="Inquiry"
          name="Inquiry"
          type="text"
          required
          value={formData.Inquiry}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="Message" className="block mb-1">
          Message
        </label>
        {/* 리치 텍스트 툴바: 아이콘과 인풋만 표시 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <button
            type="button"
            onClick={() => toggleInlineStyle("BOLD")}
            title="Bold"
          >
            <FaBold />
          </button>
          <button
            type="button"
            onClick={() => toggleInlineStyle("ITALIC")}
            title="Italic"
          >
            <FaItalic />
          </button>
          <button
            type="button"
            onClick={() => toggleInlineStyle("UNDERLINE")}
            title="Underline"
          >
            <FaUnderline />
          </button>
          <button type="button" onClick={promptForLink} title="Insert Link">
            <FaLink />
          </button>
          <button type="button" onClick={promptForImage} title="Insert Image">
            <FaImage />
          </button>
          <div
            title="Font Color"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaPalette />
            <input
              type="color"
              value={color}
              onChange={onColorChange}
              style={{ marginLeft: "2px" }}
            />
          </div>
          <div
            title="Font Size"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaTextHeight />
            <select
              value={fontSize}
              onChange={onFontSizeChange}
              style={{ marginLeft: "2px" }}
            >
              {[12, 14, 16, 18, 24, 32, 48].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => handleBlockType("blockquote")}
            title="Blockquote"
          >
            <FaQuoteLeft />
          </button>
          <button
            type="button"
            onClick={() => handleBlockType("ordered-list-item")}
            title="Ordered List"
          >
            <FaListOl />
          </button>
          <button
            type="button"
            onClick={() => handleBlockType("unordered-list-item")}
            title="Unordered List"
          >
            <FaListUl />
          </button>
          <button type="button" onClick={handleIndent} title="Indent">
            <FaIndent />
          </button>
          <button type="button" onClick={handleOutdent} title="Outdent">
            <FaOutdent />
          </button>
        </div>
        <div className="border p-2 rounded min-h-[150px] bg-white">
          <Editor
            editorState={editorState}
            onChange={handleEditorChange}
            customStyleMap={customStyleMap}
            placeholder="Write your message..."
          />
        </div>
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
