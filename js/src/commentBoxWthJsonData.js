/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */

var data = [
  {  
    idx: 1, 
    author: "Singh Piara",
    text: "This is First Comment"
  },
  {  
    idx: 2, 
    author: "Singh Lakha",
    text: "This is Second Comment"
  },
  {  
    idx: 3, 
    author: "Singh Basant",
    text: "This is Third Comment"
  }
];

/** Component That recieves properties from its parent */
var Comment = React.createClass({
  render: function(){
    return (
        <div className="comment">
          <p className="key">{this.props.key}</p>
          <h2 clasName="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
  }
})


var CommentForm = React.createClass({
    render: function(){
      return (
          <div className="commentForm">
            <h2> Here we will bring a comment Form </h2>
          </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
      var commentNodes = this.props.data.map(function(comment){
      return (
            <Comment author={comment.author} key={comment.idx}>
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


var CommentBox = React.createClass({
    render: function(){
      return (
          <div className="commentBox">
            <h1> Comment </h1>
            <CommentList data={this.props.data} />
            <CommentForm />
          </div>
        );
    }
});


ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById("content")
);