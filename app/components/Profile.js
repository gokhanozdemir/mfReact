var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [1,2,4],
      bio: {
        name: 'Ahmet Tosun'
      },
      repos: ['a','B','a']
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://mfreact-58760.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-4">
        User Profile Component -->
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        {this.props.params.username}
        </div>
        <div className="col-md-4">
          Repos Component
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          Notes Component
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
