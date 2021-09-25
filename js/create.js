// javascript for create.html

const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault(); // prevent the default action which is page reload

  // prepare the json object of the blog's post to be posted to server
  const doc = {
    // don't add id for json server creats the id
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });

  window.location.replace('/index.html');
};

form.addEventListener('submit', createPost);
