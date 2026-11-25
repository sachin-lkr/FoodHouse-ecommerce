import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// toast function
const showToast = (message, type = "success") => {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "center",

    style: {
      background:
        type === "success" ? "#16a34a" : "#ef4444",
      borderRadius: "12px",
      padding: "10px",
      fontWeight: "600",
    },
  }).showToast();
};

export default showToast;
