
//data-id
const Containerpost = $('#posts');

const Renderer = function () {

    const renderPosts = function (posts) {

        $('#posts').empty();

        for (let post of posts) {
            Containerpost.append(`<div id=${post.id} class=post></div>`)

            let ContainerIDPost = $(`#${post.id}`);
            ContainerIDPost.append(`<div class=delete> X </div>`)
            ContainerIDPost.append(`<h1 class=post-text> ${post.text} </h1>`)
            ContainerIDPost.append(`<input class=comment-input type=text>`)
            ContainerIDPost.append(`<button class=add-comment> Comment </button>`)

            for (let comment of post.comments) {
                ContainerIDPost.append(`<div id="${comment.id}" class=comments > ${comment.text} </div>`)
                $(`#${comment.id}`).append(`<div class=delete-comment> X </div>`)
            }
        }
    }

    return {
        renderPosts: renderPosts
    };
}










