const dialogCommentButton = document.querySelector(".dialog-comment-button");
const dialogComment = document.querySelector(".dialog-comment");

dialogCommentButton.addEventListener("click", function() {
    dialogComment.showModal();
});

