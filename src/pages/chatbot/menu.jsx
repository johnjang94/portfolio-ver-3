import PropTypes from "prop-types";

export default function ChatMenu({ onMenuClick }) {
  const menuItems = ["FAQ", "General Inquiry"];

  return (
    <div className="fixed bottom-2 w-full flex justify-center">
      <div className="bg-white shadow-md rounded-xl p-3 flex space-x-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onMenuClick(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

ChatMenu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};
