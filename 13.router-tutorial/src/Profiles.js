// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import Profile from './Profile';
// // import WithRouterSample from './WithRouterSample';

// const Profiles = () => {
//   return (
//     <div>
//       <h3>사용자 목록:</h3>
//       <ul>
//         <li>
//           <Link to="/profiles/velopert">velopert</Link>
//         </li>
//         <li>
//           <Link to="/profiles/charlie">charlie</Link>
//         </li>
//       </ul>

//       <Route
//         path="/profiles"
//         exact
//         render={() => <div>사용자를 선택해 주세요.</div>}
//       />
//       <Route path="/profiles/:username" component={Profile} />
//       {/* <WithRouterSample/> */}
//     </div>
//   );
// };

// export default Profiles;

// 리액트 라우터 부가기능 - NavLink
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/charlie">charlie</Link> */}
          <NavLink activeStyle={activeStyle} to="/profiles/charlie">
            charlie
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요/</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;