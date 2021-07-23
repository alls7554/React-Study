// import React from 'react';
// import { Route } from 'react-router-dom';
// import about from './About';
// import home from './Home';

// const App = () => {
//   return (
//     <div>
//       <Route path="/" component={home} />
//       <Route path="/about" component={about}/>
//     </div>
//   );
// };

// export default App;


// home을 위한 route 설정
// import React from 'react';
// import { Route } from 'react-router-dom';
// import about from './About';
// import home from './Home';

// const App = () => {
//   return (
//     <div>
//       <Route path="/" component={home} exact={true}/>
//       <Route path="/about" component={about}/>
//     </div>
//   );
// };

// export default App;

// Link 컴포넌트를 사용하여 다른 주소로 이동하기
// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//       </ul>

//       <hr/>
//       <Route path="/" component={Home} exact={true}/>
//       <Route path="/about" component={About}/>
//     </div>
//   );
// };

// export default App;

// Route 하나에 여러 개의 path 설정하기
// import React from 'react';
// import { Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// const App = () => {
//   return (
//     <div>
//       <Route path="/" component={Home} exact={true}/>
//       <Route path={["/about", "/info"]} component={About} />
//     </div>
//   );
// };

// export default App;

// URL 파라미터 사용하기
// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Profile from './Profile';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profile/velopert">velopert 프로필</Link>
//         </li>
//         <li>
//           <Link to="/profile/charlie">charlie 프로필</Link>
//         </li>
//       </ul>
//       <hr/>
//       <Route path="/" component={Home} exact={true}/>
//       <Route path={["/about", "/info"]} component={About} />
//       <Route path="/profile/:username" component={Profile} />
//     </div>
//   );
// };

// export default App;

// 서브 라우터 사용하기
// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Profiles from './Profiles';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profiles">프로필</Link>
//         </li>
//       </ul>
//       <hr/>
//       <Route path="/" component={Home} exact={true}/>
//       <Route path={["/about", "/info"]} component={About} />
//       <Route path="/profiles" component={Profiles} />
//     </div>
//   );
// };

// export default App;

// 리액트 라우터 부가기능 - history
// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import About from './About';
// import HistorySample from './HistorySample';
// import Home from './Home';
// import Profiles from './Profiles';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profiles">프로필</Link>
//         </li>
//         <li>
//           <Link to="/history">History 예제</Link>
//         </li>
//       </ul>
//       <hr/>
//       <Route path="/" component={Home} exact={true}/>
//       <Route path={["/about", "/info"]} component={About} />
//       <Route path="/profiles" component={Profiles} />
//       <Route path="/history" component={HistorySample} />
//     </div>
//   );
// };

// export default App;

// 리액트 라우터 부가기능 - Switch
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됩니다.
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>    
          )}
        />
      </Switch>
    </div>
  );
};

export default App;