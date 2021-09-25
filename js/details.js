// javascript for details.html

// get the post's id from search params
const id = new URLSearchParams(window.location.search).get('id');

// the container (html elem) to oudput the post's details
const container = document.querySelector('.details');

const renderDetails = async () => {
  const uri = `http://localhost:3000/posts/${id}`;
  const res = await fetch(uri);
  const post = await res.json();
  console.log(post);

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;

  container.innerHTML = template;
};

// wait until the DOM content is loaded, then fire renderDetails funtion
window.addEventListener('DOMContentLoaded', () => renderDetails());
