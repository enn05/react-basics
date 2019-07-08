import React from 'react'
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock'
import Toggle from './Toggle'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Kenneth',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div>
        <UserGreeting />
        <Welcome name='Kenneth' />
        <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Clock />
        <Toggle />
      </div>
      
    );
  }
  return <GuestGreeting />;
}

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

export default Greeting;