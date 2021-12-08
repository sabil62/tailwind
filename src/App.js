/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
const Heading = tw.h1`text-blue-500 text-2xl p-2`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;
function App() {
  return (
    <Container>
      <Heading>My custom heading</Heading>
    </Container>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
