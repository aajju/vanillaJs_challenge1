// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const obj = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: () => {
    obj.innerText = "Mouse is here!!";
    obj.style.color = colors[0];
  },

  handleMouseLeave: () => {
    obj.innerText = "Mouse is gone!";
    obj.style.color = colors[1];
  },

  handleWindowResize: () => {
    obj.innerText = "You just resized!!";
    obj.style.color = colors[2];
  },

  handleWindowRightClick: () => {
    obj.innerText = "That was a right click!";
    obj.style.color = colors[3];
  }
};

obj.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
obj.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleWindowRightClick
);
