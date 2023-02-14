
const Tweeter = function () {

    const _posts =
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ];



    let postIdCounter = 2
    let commentIdCounter = 6


    const getPosts = function () {
        return _posts;
    }

    const addPost = function (Textpost) {
        postIdCounter += 1
        let newPost = {
            text: Textpost, id: "p" + postIdCounter, comments: []

        }
        _posts.push(newPost);
    }

    const removePost = function (postID) {

        for (let postIndex in _posts) {
            if (_posts[postIndex].id === postID) {
                _posts.splice(postIndex, 1);
            }

        }
    }

    const addComment = function (commenText, postID) {
        commentIdCounter += 1
        const comment = { id: "c" + commentIdCounter, text: commenText }

        for (let post of _posts) {
            if (post.id === postID) {
                post.comments.push(comment)

            }
        }

    }

    const removeComment = function (postID, commentID) {
        for (const post of _posts) {
            if (post.id === postID) {
                for (const indexcomments in post.comments) {
                    if (post.comments[indexcomments].id === commentID) {
                        post.comments.splice(indexcomments, 1)

                    }

                }

            }

        }


    }



    return {
        removePost: removePost,
        addPost: addPost,
        getPosts: getPosts,
        addComment: addComment,
        removeComment: removeComment

    };
}
//const tweeter = Tweeter()





















