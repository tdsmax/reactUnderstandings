/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */

/** Component That recieves properties from its parent */
var Comment = React.createClass({
  render: function(){
    return (
        <div className="comment">
          <h2 clasName="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
  }
})

/** Comment List which contain Comment and provides data to the same.*/
var CommentList = React.createClass({
    render: function() {
      return (
        <div className="commentList"> 
            <Comment author="Singh">Hi, Comment From Singh</Comment>
            <Comment author="Piara Singh">Hi, Comment From <em>Singh is King</em> Piara</Comment>
        </div> 
      );
    }
});

var CommentForm = React.createClass({
    render: function() {
      return (
          <div className="commentForm"> 
            <br/>
            <p> Hi This is a Comment Form </p>
          </div>
        );
    }
});


var CmBox = React.createClass({
	render: function(){
		return (
      <div className="CmBox">
  			<h1> 
          Lets Look at commentForm and Comment List 
        </h1>
        <CommentList />
        <CommentForm />
      </div>
		);
	}
});

ReactDOM.render(
	<CmBox />,
	document.getElementById('content')
);
