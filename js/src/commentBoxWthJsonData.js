/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */


var  XhrReqHandler = function(url,callback){

    var xhrProgress = function(ev){
      if(ev.lengthComputable){
        var percComplete = ev.loaded/ev.total;
        console.log(percComplete);
      }else {
        console.log("Progress Can not be tracked");
      }
    };
    var xhrComplete = function(ev){
      callback.call(this,xhr.responseText);
    };
    var xhrFailed = function(ev){
      console.log("Error in Xhr Request " + xhr.status);
    };
    var xhrCanceled = function(ev){
      console.log("Cancelled Request");
    };


    var xhr = new XMLHttpRequest();

    url = "http://localhost:90/ReactLearnings/" + url;
    xhr.addEventListener("progress", xhrProgress);
    xhr.addEventListener("load", xhrComplete);
    xhr.addEventListener("error", xhrFailed);
    xhr.addEventListener("abort", xhrCanceled);
    xhr.open("GET",url);
    xhr.send();

    



}

var  XhrPostHandler = function(url,callback,data){

    var xhrProgress = function(ev){
      if(ev.lengthComputable){
        var percComplete = ev.loaded/ev.total;
        console.log(percComplete);
      }else {
        console.log("Progress Can not be tracked");
      }
    };
    var xhrComplete = function(ev){
      callback.call(this,xhr.responseText);
    };
    var xhrFailed = function(ev){
      console.log("Error in Xhr Request " + xhr.status);
    };
    var xhrCanceled = function(ev){
      console.log("Cancelled Request");
    };


    var xhr = new XMLHttpRequest();

    url = "http://localhost:90/ReactLearnings/" + url;
    xhr.addEventListener("progress", xhrProgress);
    xhr.addEventListener("load", xhrComplete);
    xhr.addEventListener("error", xhrFailed);
    xhr.addEventListener("abort", xhrCanceled);
    xhr.open("POST",url);
    xhr.send(data);

}

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
    getInitialState: function(){
      return {author: '', text: ''}
    },
    handleAuthorChange: function(e){
      this.setState({author: e.target.value});
    },
    handleCommentChange: function(e){
      this.setState({text: e.target.value});
    },
    handleSubmit: function(e){
      e.preventDefault();
      var author = this.state.author.trim(),
        text = this.state.text.trim();
        if(!text || !author){
          return;
        }
      this.props.onCommentSubmit({author: author, text: text});
      this.setState({author: '', text: ''});
    },
    render: function(){
      return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <h2> Here we will bring a comment Form </h2>
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} placeholder="enter your full name" />
            <input type="text" value={this.state.text} onChange={this.handleCommentChange} placeholder="Say something" />
            <input type="submit" value="post" />
          </form>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
      var commentNodes = this.props.data.map(function(comment){
      return (
            <Comment author={comment.author} key={comment.idx}>
              {comment.text} {comment.idx}
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
    getInitialState: function(){
      return {data: []};
    },
    loadFromServer: function(){
       XhrReqHandler(this.props.url,this.tester)
    },
    componentDidMount: function(){
        this.loadFromServer();
        setInterval(this.loadFromServer, this.props.pollInterval)
    },
    handleCommentSubmit: function(comment){
      var comments = this.state.data;
      comment.idx = parseInt(comments[comments.length-1].idx) + 1;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
      XhrPostHandler(this.props.postUrl,this.tester,comment);
    },
    tester: function(data){
      this.setState({data: JSON.parse(data)})
    },
    render: function(){
      return (
          <div className="commentBox">
            <h1> Comment </h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
          </div>
        );
    }
});


ReactDOM.render(
  <CommentBox pollInterval={2000} postUrl="server/postComments.php" url="js/json/data.json"/>,
  document.getElementById("content")
);