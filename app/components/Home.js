import React from'react';

//if our component does NOT have a state
//and ONLY HAS A Render Method
const Home = () => {
  return (
    <h2 className="text-center">
      Search by Github Username Above
    </h2>
  )
}
//
// class Home extends React.Component {
//   render(){
//     return (
//       <h2 className="text-center">
//         Search by Github Username Above
//       </h2>
//     )
//   }
// }

export default Home;
