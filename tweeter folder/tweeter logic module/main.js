

const tweeter = Tweeter()
const renderer = Renderer()


renderer.renderPosts(tweeter.getPosts())

$('#post').on('click', function () {

    let postText = $('#input').val();
    tweeter.addPost(postText);

    renderer.renderPosts(tweeter.getPosts())
})
/*
The Twit button
The Delete Post button
The Comment button
The X next to each comment
*/

$('body').on('click', '.delete', function () {

    let postId = $(this).closest('.post').data('id')
    tweeter.removePost(postId)

    renderer.renderPosts(tweeter.getPosts())
})

$('body').on('click', '.add-comment', function () {

    let postId = $(this).closest('.post').attr('id')
    let postText = $(this).siblings('.comment-input').val();
    tweeter.addComment(postText, postId)

    renderer.renderPosts(tweeter.getPosts())
})

$('body').on('click', '.delete-comment', function () {

    let postId = $(this).closest('.post').attr('id')
    let commentId = $(this).closest('.comments').attr('id')
    tweeter.removeComment(postId, commentId)

    renderer.renderPosts(tweeter.getPosts())
})
