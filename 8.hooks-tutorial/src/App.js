
// useState 사용하기, useReducer 사용하기
// import React from 'react';
// import Counter from './Counter';

// const App = () => {
//   return <Counter />;
// };

// export default App;

// useState 여러 번 사용하기, useReducer를 이용해 인풋 상태 관리
// import React from 'react';
// import Info from './Info';

// const App = () => {
//   return <Info />
// };

// export default App;

// 뒷정리 하기
// import React, { useState } from 'react';
// import Info from './Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//           {visible ? '숨기기':'보이기'}
//       </button>
//       <hr />
//       {visible&&<Info/>}
//     </div>
//   );
// };

// export default App;


//useMemo
import React from 'react';
import Average from './Average';

const App = () => {
  return <Average/>
};

export default App;