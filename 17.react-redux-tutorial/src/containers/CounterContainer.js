// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//   // 임시 함수
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase());

//   },
//   decrease: () => {
//     // console.log('decrease');
//     dispatch(decrease());
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     ),
// )(CounterContainer);

// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease
//   },
// )(CounterContainer);

// useSelector로 상태 조회하기
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  // return <Counter number={number}/>
  
  // useDispatch 사용
  // return (
  //   <Counter
  //     number={number}
  //     onIncrease={() => dispatch(increase())}
  //     onDecrease={() => dispatch(decrease())}
  //   />
  // );

  // useCallback으로 성능 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;