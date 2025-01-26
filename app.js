let id = 0;
const posts = [];
const postList = document.querySelector('.posts');

function addPost() {
    const text = document.getElementById('text').value;

    if (text.length < 3) {
        alert('Текст слишком короткий!!!');
    } else {
        const newPost = { id: id++, text: text };
        posts.push(newPost);
        console.log(posts);

        displayPosts();
        document.getElementById('text').value = '';
    }
}

function displayPosts() {
    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postId = document.createElement('p');
        postId.innerText = post.id;

        const postText = document.createElement('p');
        postText.innerText = post.text;

        postElement.appendChild(postId);
        postElement.appendChild(postText);

        postList.appendChild(postElement);
    });
}
