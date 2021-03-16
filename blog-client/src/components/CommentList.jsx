function CommentList({ comments }) {
  let content;
  const renderedComments = comments.map((comment) => {
    switch (comment.status) {
      case 'PENDING':
        content = 'This comment is awaiting moderation.';
        break;
      case 'APPROVED':
        content = comment.content;
        break;
      case 'REJECTED':
        content = 'This comment has been rejected';
        break;
      default:
        content = comment.content;
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
