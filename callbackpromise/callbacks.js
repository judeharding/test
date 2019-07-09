const posts = [
    { title: 'Post One', body: 'This is the first post' },
    { title: 'Post Two', body: 'This is the second post' }
];

// ES5
// function getPosts() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post, index) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// ES6
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("stream").innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost(
    { title: 'Post Three', body: "this is the third post" },
    // removed the getPost call above and added here
    getPosts
);