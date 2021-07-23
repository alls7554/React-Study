// import React from 'react';
// import ColorBox from './contexts/ColorBox';

// const App = () => {
//   return (
//     <div>
//       <ColorBox />
//     </div>
//   );
// };

// export default App;


// Provider
// import React from 'react';
// import ColorContext from './contexts/color';
// import ColorBox from './contexts/ColorBox';

// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: 'red' }}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// };

// export default App;

// 새로워진 Context를 프로젝트에 반영하기
// import React from 'react';
// import { ColorProvider } from './contexts/color';
// import ColorBox from './contexts/ColorBox';

// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <ColorBox/>
//       </div>
//     </ColorProvider>
//   );
// };

// export default App;

// 색상 선택 컴포넌트 만들기
import React from 'react';
import ColorBox from './contexts/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;