// import React from 'react';
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <div style={{ display: 'flex' }}>
//         {colors.map(color => (
//           <div
//             key={color}
//             style={{
//               background: color,
//               width: '24px',
//               height: '24px',
//               cursor: 'pointer'
//             }}
//           />
//         ))}
//       </div>
//       <hr/>
//     </div>
//   );
// };

// export default SelectColors;


// 색상 선택 컴포넌트 사용하기
// import React from 'react';
// import { ColorConsumer } from '../contexts/color';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
  // return (
    // <div>
    //   <h2>색상을 선택하세요.</h2>
    //   <ColorConsumer>
    //     {({actions}) => (
    //       <div style={{ display: 'flex' }}>
    //         {colors.map(color => (
    //           <div
    //             key={color}
    //             style={{
    //               background: color,
    //               width: '24px',
    //               height: '24px',
    //               cursor: 'pointer'
    //             }}
    //             onClick={() => actions.setColor(color)}
    //             onContextMenu={e => {
    //               e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
    //               actions.setSubcolor(color);
    //             }}
    //           />
    //         ))}
    //       </div>
    //     )}
    //   </ColorConsumer>
    //   <hr/>
    // </div>
  // );
// };

// export default SelectColors;

// static contextType 사용하기
import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  }

  handleSetSubcolor = color => {
    this.context.actions.setSubcolor(color);
  }

  render() {
    return (
      <div>
      <h2>색상을 선택하세요.</h2>
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '72px',
                  height: '72px',
                  cursor: 'pointer'
                }}
                onClick={() => this.handleSetColor(color)}
                 onContextMenu={e => {
                  e.preventDefault(); // 마우스 우클릭 시 메뉴 뜨기 무시
                  this.handleSetSubcolor(color)
                 }}
              />
            ))}
          </div>
      <hr/>
    </div>
    );
  }
}

export default SelectColors;