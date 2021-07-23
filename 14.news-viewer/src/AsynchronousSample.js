// 해당 파일은 비동기에 대한 이해를 위한 코드 파일로 에러는 무시하시길 바랍니다ㅣ.

// 콜백 함수
{
  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  increase(0, result => {
    console.log(result);
  });
}

// 지나친 콜백 함수로 인한 콜백 지옥
{
  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  console.log('작업 시작');
  increase(0, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result)
        increase(result, result => {
          console.log(result);
          console.log('작업 완료');
        });
      });
    });
  });
}

// Promise
{
  function increase(number) {
    const promise = new Promise((resolve, reject) => {
      // resolve는 성공, reject는 실패
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          // 50보다 높으면 에러 발생시키기
          const e = new Error('NumberToBig');
          return reject(e);
        }
        resolve(result); // number rkqtdp + 10 후 성공 처리
      }, 1000);
    });
    return promise;
  }

  increase(0)
    .then(number => {
      // Promise에서 resolve된 값은 .then을 통해 받아올 수 있음.
      console.log(number);
      return increase(number);
    })
    .then(number => {
      // 또 .then으로 처리 가능
      console.log(number);
      return increase(number)
    })
    .then(number => {
      console.log(number);
      return increase(number)
    })
    .then(number => {
      console.log(number);
      return increase(number)
    })
    .then(number => {
      console.log(number);
      return increase(number)
    })
    .catch(e => {
      // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
      console.log(e);
    })
}

// async/await
{
  function increase(number) {
    const promise = new Promise((resolve, reject) => {
      // resolve는 성공, reject는 실패
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          // 50보다 높으면 에러 발생시키기
          const e = new Error('NumberToBig');
          return reject(e);
        }
        resolve(result);
      }, 1000)
    });
    return promise;
  }

  async function runTasks() {
    try {
      let result = await increase(0);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}