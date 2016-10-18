var React = require('react');
var SearchGithub = require('./SearchGithub');
//var ReactDOM = require('react-dom');
//we will use routing

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

//we will use routing
// ReactDOM.render(<Main />, document.getElementById('app'))
module.exports = Main;
