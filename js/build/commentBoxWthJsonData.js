/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */

var data = [{
  idx: 1,
  author: "Singh Piara",
  text: "This is First Comment"
}, {
  idx: 2,
  author: "Singh Lakha",
  text: "This is Second Comment"
}, {
  idx: 3,
  author: "Singh Basant",
  text: "This is Third Comment"
}];

/** Component That recieves properties from its parent */
var Comment = React.createClass({
  displayName: "Comment",

  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "p",
        { className: "key" },
        this.props.key
      ),
      React.createElement(
        "h2",
        { clasName: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      React.createElement(
        "h2",
        null,
        " Here we will bring a comment Form "
      )
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.idx },
        comment.text
      );
    });

    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        " Comment "
      ),
      React.createElement(CommentList, { data: this.props.data }),
      React.createElement(CommentForm, null)
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById("content"));