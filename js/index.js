// javascript for index.html

// the container where to output posts
const container = document.querySelector('.blogs');

const renderPosts = async () => {
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

  const res = await fetch(uri); // the res object is not a json, see next line to get json data from response
  const posts = await res.json();
  console.log(posts);

  // prepare the html to display post by iterating json posts
  let template = '';
  posts.forEach((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} like(s)</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="details.html?id=${post.id}">read more...<a/>
      </div>
    `;
  });

  // inject the html template
  container.innerHTML = template;
};

// After DOM Content is loaded fire a function to load posts.
window.addEventListener('DOMContentLoaded', () => renderPosts());
