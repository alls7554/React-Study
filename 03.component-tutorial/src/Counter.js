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
// import React, { Component } from 'react';

// class Counter extends Component {
//   state = {
//     number: 0,
//     fixedNumber: 0
//   };
//   render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때, 호출할 함수 지정
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

// this.setState에 객체 대신 함수 인자 전달하기
// import React, { Component } from 'react';

// class Counter extends Component {
//   state = {
//     number: 0,
//     fixedNumber: 0
//   };
//   render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때, 호출할 함수 지정
//           onClick={() => {
            
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             // 이렇게 구현하면 버튼을 눌러도 한번에 숫자가 2씩 올라가지 않습니다.
//             // this.setState({ number: number + 1 });
//             // this.setState({ number: this.state.number + 1 });

//             this.setState(prevState => {
//               return {
//                 number: prevState.number + 1
//               };
//             });
//             // 위와 아래 두 코드는 완전히 똑같은 기능을 합니다.
//             // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
//             this.setState(prevState => ({
//               number: prevState.number + 1
//             }));
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

// this.setState가 끝난 후 특정 작업 실행하기
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
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;