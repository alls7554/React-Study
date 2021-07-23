// axios로 API 호출해서 데이터 받아오기 연습
// import React, { useState } from 'react';
// import axios from '../node_modules/axios/index';

// const App = () => {

//   const [data, setData] = useState(null);
//   const onClick = () => {
//     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//       setData(response.data);
//     });
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };

// export default App;

// 위 예제 async 적용
// import React, { useState } from 'react';
// import axios from '../node_modules/axios/index';

// const App = () => {

//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos/1'
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };

// export default App;

// 뉴스 API
// import React, { useState } from 'react';
// import axios from '../node_modules/axios/index';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=a0268e16656e44959deb0c2ad9ec3936'
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e)
//     }
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };

// export default App;

// import React, { useCallback, useState } from 'react';
// import Categories from './components/Categories';
// import NewsList from './components/NewsList';

// const App = () => {

//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}/>;
//     </>
//   );
// };

// export default App;

// 리액트 라우터 사용하기
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';
const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;