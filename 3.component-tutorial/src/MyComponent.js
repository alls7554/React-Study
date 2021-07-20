// 부모 컴포넌트에서 지정한 props 값 사용하기
// import React from 'react';
// import PropTypes from 'prop-types';

// const MyComponent = (props) => {
//   return (
//     <div>
//       {/* 부모컴포넌트에서 보낸 props 사용 */}
//       안녕하세요, 제 이름은 '{props.name}'입니다.
//       {/* children 사용법 */}
//       children 값은 '{props.children}'입니다.
//     </div>
//   );
// };

// 비구조화 할당 문법을 통해 props 내부 값 추출하기
// const MyComponent = (props) => {
//   const { name, children } = props;

//   return (
//     <div>
//       안녕하세요, 제 이름은 '{name}'입니다.<br/>
//       children 값은 '{children}'입니다.
//     </div>
//   );
// }
// 아래와 같이도 가능
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 '{name}'입니다.<br/>
//       children 값은 '{children}'입니다.<br/>
//       제가 가장 좋아하는 숫자는 '{favoriteNumber}'입니다.
//     </div>
//   );
// }

// 클래스형 컴포넌트에서 props사용하기
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 '{name}'입니다.<br/>
        children 값은 '{children}'입니다.<br/>
        제가 가장 좋아하는 숫자는 '{favoriteNumber}'입니다.
      </div>
    );
  }
}

// props 기본값 설정: defaultProps
MyComponent.defaultProps = {
  name: '기본 이름'
};

// props 타입 검증하기, isRequired를 이용한 필수 설정
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;