import PropTypes from "prop-types";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import { MdOutlineMarkChatUnread } from "react-icons/md";

export default function ChatButton({ status, onClick }) {
  const getIcon = () => {
    switch (status) {
      case "message-read":
        return <MdChatBubbleOutline />;
      case "unread-message":
        return <MdOutlineMarkChatUnread />;
      default:
        return <MdChatBubble />;
    }
  };

  return (
    <div
      className="fixed bottom-10 right-10 shadow-lg p-4 cursor-pointer bg-white rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      {getIcon()}
    </div>
  );
}

ChatButton.propTypes = {
  status: PropTypes.oneOf(["default", "message-read", "unread-message"])
    .isRequired,
  onClick: PropTypes.func.isRequired,
};
