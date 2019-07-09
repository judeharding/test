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

createPost(
    { title: 'Post Four', body: 'This is the fourth post' }
)
    // THIS IS THE PROMISE SECTION
    .then(getPosts)
    .catch(err => {
        console.log(err);
    });
;

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then(values =>
        console.log(values));



// ANOTHER PROMISE
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log('this is from the THEN ' + message)
}).catch((message) => {
    console.log('this is from the catch ' + message)
});