var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      Hello, world! I am a CommentBox.
      <h1>Comments</h1>
      <CommentList data={this.props.data}/>
      <CommentForm/>
      </div>
    );
  }
});

var data = [{id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}]

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
        {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
       </h2>
          {this.props.children}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
       Hello, world! I am a CommentForm.
      </div>
    );
  }
})

ReactDOM.render(
  <CommentBox url="/api/comments"/>, document.getElementById('content'));
