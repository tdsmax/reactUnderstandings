/**
 * @author Tarandeep Singh
 * @description ReactJs Lessons
 */


var  XhrReqHandler = function(url,callback){

    /*
      Description:
      XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.
    
      XMLHttpRequest was originally designed by Microsoft and adopted by Mozilla, Apple, and Google. It's now being standardized at the WHATWG. Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML, and it supports protocols other than HTTP (including file and ftp).
    
      Syntax:
      var myRequest = new XMLHttpRequest();
    */


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