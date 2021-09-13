function commentHandler(event) {
  event.preventDefault();
  console.log(event.target.className)

  if (event.target.classList.contains('comment')) {
    console.log(`The post id is ${event.target.id}`)
    document.location.replace(`/comment/${event.target.id}`)
  }
};

document.querySelector('#post-list').addEventListener('click', commentHandler);