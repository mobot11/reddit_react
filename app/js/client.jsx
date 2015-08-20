var React = require('react');

var data = [
  { title: "The other languages on this hot coffee sleeve are fake-French and fake-German",
    author: "nombski",
  subreddit: "/r/funny"},
  {title: "An athletic beer pong dunk",
    author: "darinda777",
  subreddit: "/r/gifs"},
  {title: "Paris shooting survivor suing French media for giving away his location while he hid from shooters",
    author: "speaksthetruthalways",
  subreddit: "/r/worldnews"}
];

var SiteHeader = React.createClass({
  render: function() {
    return (
    <header className='siteHeader'>
        <span><h4>HOT</h4><h4>NEW</h4><h4>TOP</h4><h4>WIKI</h4><h4>PROMOTED</h4></span>
    </header>
  )
  }
})


var ArticleList = React.createClass({
  render: function() {
    var articleNodes = this.props.data.map(function (article) {
      return (
        <Article title={article.title}>
          {article.author}  {article.subreddit}
        </Article>
      )
    })
    return (
      <div className="articleList">
        {articleNodes}
      </div>
    );
  }
});


var Article = React.createClass({
  render: function() {
    return (
      <div className="article">
        <h2 className="articleTitle">
        <a href="www.reddit.com">{this.props.title}</a>

        </h2>
        {this.props.children}
      </div>
    );
  }
});
var ArticleBox = React.createClass({
  render: function() {
    return (
      <div className="articleBox">
      <SiteHeader />
        <ArticleList data={this.props.data} />
      </div>
    );
  }
});
React.render(
  <ArticleBox data={data}/>,
  document.getElementById('content')
);
