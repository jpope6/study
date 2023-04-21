// Code Block to make footer adjustable
const footer = document.getElementById("footer");
const footerHandle = document.getElementById("footerHandle");
let isResizing = false;
let startY;

footerHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startY = e.clientY;
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const footerHeight = footer.offsetHeight + (startY - e.clientY);
    footer.style.height = `${footerHeight}px`;
    startY = e.clientY;
});

document.addEventListener("mouseup", (e) => {
    isResizing = false;
});

