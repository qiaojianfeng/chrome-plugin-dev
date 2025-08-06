import "./index.css";
import { init } from "./init";
init();
// Example: Add a border to all images
function addImageBorder() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.border = '2px solid red';
  });
}

// Run when document is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addImageBorder);
} else {
  addImageBorder();
}