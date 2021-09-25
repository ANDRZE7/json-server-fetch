// javascript for details.html

// get the post's id from search params
const id = new URLSearchParams(window.location.search).get('id');

// the container (html elem) to oudput the post's details
const container = document.querySelector('.details');

const deleteBtn = document.querySelector('.delete');

// the uri to which the post and delete requests are sent to
const uri = `http://localhost:3000/posts/${id}`;

const renderDetails = async () => {
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

deleteBtn.addEventListener('click', async (e) => {
  const res = await fetch(uri, {
    method: 'DELETE',
  });
  window.location.replace('/index.html');
});
