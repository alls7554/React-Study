// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from '../../node_modules/axios/index';
// import NewsItem from './NewsItem';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width:768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const NewsList = ({ category }) => {

//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // async를 사용하는 함수는 따로 선언
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a0268e16656e44959deb0c2ad9ec3936`
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false)
//     }
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>
//   }
//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map(article => (
//         <NewsItem key = {article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };


// export default NewsList;


// usePromise 사용하기
import React from 'react';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width:768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {

  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a0268e16656e44959deb0c2ad9ec3936`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }
  
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key = {article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};


export default NewsList;