// import React from 'react';
// import ColorContext from './color';

// const ColorBox = () => {
//   return (
//     <ColorContext.Consumer>
//       {value => (
//         <div
//           style={{
//             width: '64px',
//             height: '64px',
//             background: value.color
//           }}
//         />
//       )}
//     </ColorContext.Consumer>
//   );
// };

// export default ColorBox;

// 새로워진 Context를 프로젝트에 반영하기
// import React from 'react';
// import { ColorConsumer } from './color';

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {value => (
//         <>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: value.state.color
//             }}
//           />
//           <div
//             style={{
//               width: '32px',
//               height: '32px',
//               background: value.state.subcolor
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// export default ColorBox;


// 새로워진 Context를 프로젝트에 반영하기 - 객체 비구조화 할당 문법 사용
// import React from 'react';
// import { ColorConsumer } from './color';

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {({state}) => (
//         <>
//           <div
//             style={{
//               width: '256px',
//               height: '256px',
//               background: state.color
//             }}
//           />
//           <div
//             style={{
//               width: '128px',
//               height: '128px',
//               background: state.subcolor
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// export default ColorBox;


// useContext Hook 사용하기
import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '256px',
          height: '256px',
          background: state.color
        }}
      />
      <div
        style={{
          width: '128px',
          height: '128px',
          background: state.subcolor
        }}
      />
    </>
  );
};

export default ColorBox;