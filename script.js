function grow(event) {
  const cartoon = event.target;
  const cartoonRect = cartoon.getBoundingClientRect();
  const mouseX = event.clientX;

  if (mouseX < cartoonRect.left + cartoonRect.width / 2) {
    cartoon.classList.remove("grow-right");
    cartoon.classList.add("grow-left");
  } else {
    cartoon.classList.remove("grow-left");
    cartoon.classList.add("grow-right");
  }
}
