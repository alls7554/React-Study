// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 default value 설정하기
//     this.state = {
//       number: 0
//     };
//   }
//   render() {
//     const { number } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때, 호출할 함수 지정
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number:number+1 })
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;


// state 객체 안에 여러 값이 있을 때
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 default value 설정하기
//     this.state = {
//       number: 0,
//       fixedNumber: 0
//     };
//   }
//   render() {
// 		// state를 조회할 때는 this.state로 조회합니다.
//     const { number, fixedNumber } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때, 호출할 함수 지정
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number:number+1 })
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;


// state를 constructor에서 꺼내기
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때, 호출할 함수 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number:number+1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;