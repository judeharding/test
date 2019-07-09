const posts = [
    { title: 'Post One', body: 'This is the first post' },
    { title: 'Post Two', body: 'This is the second post' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("stream").innerHTML = output;
    }, 1000);
}

function createPost(post) {
    // CREATE NEW PROMISE
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('ERROR!!! Something went wrong.');
            }
        }, 2000);
    });
}

// ASYNC / AWAIT

async function init() {
    await createPost(
        { title: 'Post Five', body: 'This is the fifth post' }
    );
    getPosts();
}

init();

// ASYNC / AWAIT w/ FETCH
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
};

fetchUsers();