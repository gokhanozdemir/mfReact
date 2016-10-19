var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
import Notes from './Notes/Notes';
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
import getGithubInfo from '../utils/helpers';

// v3 of react fire:
// var config = {
//     apiKey: "AIzaSyB4sk3sU6KgUAaoMN8OQ4WHXOtSNn2Iqms",
//     authDomain: "mfreact-58760.firebaseapp.com",
//     databaseURL: "https://mfreact-58760.firebaseio.com",
//     storageBucket: "mfreact-58760.appspot.com",
//   };
//   Firebase.initializeApp(config);

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function(){
    // V2 of reactfire
    this.ref = new Firebase('https://mfreact-58760.firebaseio.com/');
    this.init(this.props.params.username);
  },
  componentWillReceiveProps: function(nextProps){
    //console.log("nProps ", nextProps);
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  init: function(username){
    // V2 of reactfire
    var childRef = this.ref.child(username);
    // v3 of react fire:
    //var childRef= Firebase.database().ref(username);

    this.bindAsArray(childRef, 'notes');

    getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  },
  handleAddNote: function(newNote){
    //upgrade firebase, with the newNote
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-4">
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        {/* {this.props.params.username} */}
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}
            />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
