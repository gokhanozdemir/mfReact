var React = require('react');
var Router = require('react-router');

var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: [1,2,3,4],
      bio: {
        name: 'Ahmet Tosun'
      },
      repos: ['a','B','C']
    }
  },
  render: function(){
    console.log(this.props);
    return(
      <div className="row">
        <div className="col-md-4">
        User Profile Component -->
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        {this.props.params.username}
        </div>
        <div className="col-md-4">
          Repos Component
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          Notes Component
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
