// import React from 'react';

// const IterationSample = () => {
//   return (
//     <ul>
//       <li>눈사람</li>
//       <li>얼음</li>
//       <li>눈</li>
//       <li>바람</li>
//     </ul>
//   );
// };

// export default IterationSample;

// 데이터 배열을 컴포넌트 배열로 변환하기
// import React from 'react';

// const IterationSample = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map(name => <li>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

// export default IterationSample;

// key 설정
// import React from 'react';

// const IterationSample = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

// export default IterationSample;

// 응용
// 초기 상태 설정하기
// import React, { useState } from 'react';

// const IterationSample = () => {
//   const [names, setNames] = useState([
//     { id: 1, text: '눈사람' },
//     { id: 2, text: '얼음' },
//     { id: 3, text: '눈' },
//     { id: 4, text: '바람' }
//   ]);
//   const [inputText, setInputText] = useState('');
//   const [nextId, setNextId] = useState(5);  // 새로운 항목을 추가할 때 사용할 id

//   const onChange = e => setInputText(e.target.value);
//   const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
//   return (
//     <>
//       <input value={inputText} onChange={onChange} />
//       <button>추가</button>
//       <ul>{namesList}</ul>
//     </>
//   );
// };

// export default IterationSample;


// 버튼 click 이벤트 설정하기
// import React, { useState } from 'react';

// const IterationSample = () => {
//   const [names, setNames] = useState([
//     { id: 1, text: '눈사람' },
//     { id: 2, text: '얼음' },
//     { id: 3, text: '눈' },
//     { id: 4, text: '바람' }
//   ]);
//   const [inputText, setInputText] = useState('');
//   const [nextId, setNextId] = useState(5);  // 새로운 항목을 추가할 때 사용할 id

//   const onChange = e => setInputText(e.target.value);
//   const onClick = () => {
//     const nextNames = names.concat({
//       id: nextId,
//       text: inputText
//     });
//     setNextId(nextId + 1);
//     setNames(nextNames);
//     setInputText('');
//   };

//   const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
//   return (
//     <>
//       <input value={inputText} onChange={onChange} />
//       <button onClick={onClick}>추가</button>
//       <ul>{namesList}</ul>
//     </>
//   );
// };

// export default IterationSample;

// 데이터 제거 기능 구현하기
import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);  // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;