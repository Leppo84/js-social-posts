const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=16"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const myNode = document.getElementById("container");

posts.forEach(post => {

    let newDiv = document.createElement("div");
    myNode.append(newDiv);
    
    var postId = post.id;
    var postCont = post.content;
    var postPic = post.media;
    var postAuthor = post.author;
    let authorName = postAuthor.name;
    let authorPic = postAuthor.image;
    var postLikes = post.likes;
    let americanDate = post.created;
    let genYear = americanDate.slice(0,4);
    let genMonth = americanDate.slice(5,7);
    let genDay = americanDate.slice(8,10);
    var postDate = (genDay) + " - " + (genMonth) + " - " + (genYear);

    newDiv.outerHTML = `        <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${authorPic}" alt="${authorName}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${authorName}</div>
                <div class="post-meta__time">${postDate}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${postCont}</div>
    <div class="post__image">
        <img src="${postPic}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" id="${postId}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${postId}" class="js-likes-counter">${postLikes}</b> persone
            </div>
        </div> 
    </div>            
    </div>`;

    // const likeBtn = document.querySelector("a.like-button");
    // likeBtn.dataset.postId

    const likeBtn = document.getElementById(postId);

    console.log(postId);

    var likeList = [];

    likeBtn.addEventListener("click",
        function () {
            let counter = document.querySelector("b.js-likes-counter");
            if (likeBtn.className == "like-button js-like-button") {
                likeBtn.className = "like-button  like-button--liked js-like-button"
                likeList.push(postId);
                counter.innerHTML=postLikes + 1;

            } else {
                likeBtn.className = "like-button js-like-button"
                counter.innerHTML = (postLikes);

            }
        }
    )
})



/*<div class="likes js-likes">
<div class="likes__cta">
    <a class="like-button  js-like-button" href="#" data-postid="1">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    </a>
</div>
<div class="likes__counter">
    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
</div>
</div> */