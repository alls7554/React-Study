// import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';

// class App extends Component {
//   render() {
//     return (
//       <ValidationSample/>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <ScrollBox/>
//     );
//   }
// }

// export default App;

// 컴포넌트에 ref 달고 내부 메서드 사용
import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;