// // import React, { useState } from 'react';

// // const Info = () => {
// //   const [name, setName] = useState('');
// //   const [nickname, setNickname] = useState('');

// //   const onChangeName = e => {
// //     setName(e.target.value);
// //   }

// //   const onChangeNickname = e => {
// //     setNickname(e.target.value);
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <input value={name} onChange={onChangeName} />
// //         <input value={nickname} onChange={onChangeNickname} />
// //       </div>
// //       <div>
// //         <div>
// //           <b>이름:</b> {name}
// //         </div>
// //         <div>
// //           <b>닉네임:</b> {nickname}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Info;

// // useEffect 사용하기
// // import React, { useEffect, useState } from 'react';

// // const Info = () => {
// //   const [name, setName] = useState('');
// //   const [nickname, setNickname] = useState('');
// //   // useEffect(() => {
// //   //   console.log('렌더링이 완료되었습니다!');
// //   //   console.log({
// //   //     name,
// //   //     nickname
// //   //   });
// //   // });

// //   // 마운트될 때만 실행하고 싶을 떄
// //     // useEffect(() => {
// //     //   console.log('렌더링이 완료되었습니다!');
// //     // }, []);

// //   // 특정 값이 업데이트될 때만 실행하고 싶을 때
// //   // useEffect(() => {
// //   //   console.log(name);
// //   // }, [name]);

// //   // 뒷정리하기
// //   useEffect(() => {
// //     console.log('effect');
// //     return () => {
// //       console.log('cleanup');
// //     };
// //   }, []);

// //   const onChangeName = e => {
// //     setName(e.target.value);
// //   }

// //   const onChangeNickname = e => {
// //     setNickname(e.target.value);
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <input value={name} onChange={onChangeName} />
// //         <input value={nickname} onChange={onChangeNickname} />
// //       </div>
// //       <div>
// //         <div>
// //           <b>이름:</b> {name}
// //         </div>
// //         <div>
// //           <b>닉네임:</b> {nickname}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Info;

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: '',
//     nickname: ''
//   });
//   const { name, nickname } = state;
//   const onChange = e => {
//     dispatch(e.target);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

import React from 'react';
import useInputs from './useInput';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;