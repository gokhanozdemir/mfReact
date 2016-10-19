import axios from 'axios'

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos?username=95ac33ba6201222a44c6a97e9bf8ea36f5072645`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}?username=95ac33ba6201222a44c6a97e9bf8ea36f5072645`);
}

// var promiseObj = getRepos('tylermcginnis');
// promiseObj.then(function(data){
//   console.log("Repo Data ", data)
// })

//let const

export default function getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
    .then((arr) => ({repos: arr[0].data, bio: arr[1].data}));
  }
