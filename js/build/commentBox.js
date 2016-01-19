/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */

/** Component That recieves properties from its parent */
var Comment = React.createClass({
  displayName: "Comment",

  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { clasName: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }
});

/** Comment List which contain Comment and provides data to the same.*/
var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentList" },
      React.createElement(
        Comment,
        { author: "Singh" },
        "Hi, Comment From Singh"
      ),
      React.createElement(
        Comment,
        { author: "Piara Singh" },
        "Hi, Comment From ",
        React.createElement(
          "em",
          null,
          "Singh is King"
        ),
        " Piara"
      )
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      React.createElement("br", null),
      React.createElement(
        "p",
        null,
        " Hi This is a Comment Form "
      )
    );
  }
});

var CmBox = React.createClass({
  displayName: "CmBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "CmBox" },
      React.createElement(
        "h1",
        null,
        "Lets Look at commentForm and Comment List"
      ),
      React.createElement(CommentList, null),
      React.createElement(CommentForm, null)
    );
  }
});

ReactDOM.render(React.createElement(CmBox, null), document.getElementById('content'));