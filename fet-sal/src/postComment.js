// receives text from previous comments

const postComment = (postedComments) => {
  const commentContainer = document.getElementById("posted-comments");

  postedComments.forEach(
    (text) =>
      (commentContainer.innerHTML += `<p>
                        <span class="firstSecond">Comment </span>
                        ${text}
                        </p>`)
  );

  document.addEventListener(
    "click",
    function (event) {
      if (!event.target.matches("#post")) return;

      const comment = document.getElementsByTagName("input")[0].value;

      if (comment.length === 0) return;

      return (
        (commentContainer.innerHTML += `<p>
                  <span class="firstSecond">Comment </span>
                  ${comment}
                  </p>`),
        (document.getElementById("comment").value = "")
      );
    },
    false
  );
};

export default postComment;
