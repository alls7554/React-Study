// 클래스형 컴포넌트 
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }


// 함수형 컴포넌트
// import React from 'react';

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Counter from './Counter';
// import MyComponent from './MyComponent';

// MyComponent 모듈 불러오기
// const App = () => {
//   return <MyComponent/>;
// };

// 컴포넌트 사용할 때 props 값 지정하기
// const App = () => {
//   return <MyComponent name="React"/>;
// };

// 태그 사이의 내용을 보여주는 children
// const App = () => {
//   return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
// }

// 클래스형 컴포넌트에서 state 사용하기
const App = () => {
  return <Counter/>
}

export default App;