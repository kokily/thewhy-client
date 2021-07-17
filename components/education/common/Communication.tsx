import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';
import List from './List';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;

  img {
    width: 100%;

    ${media.large} {
      max-width: 760px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
  max-width: 720px;

  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h2 {
    font-family: 윤고딕330;
    font-size: 26px;
    font-weight: 600;
    color: #493586;
  }

  p {
    font-family: 윤고딕320;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: #777;
    word-break: keep-all;
    margin: 0 0 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;

  .row {
    display: flex;
    width: 100%;

    ${media.medium} {
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .col {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100px;
        height: auto;
      }
    }

    ul {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
      border-top: 2px solid rgb(73, 53, 134);
      padding-top: 1.2rem;
      margin-bottom: 0.3rem;
      font-family: 윤고딕320;
      font-size: 17px;
      color: #777;

      li {
        line-height: 1.6;
      }
    }
  }
`;

interface Props {
  img: string;
  title: string;
  body: string;
  data: {
    img: string;
    list: string[];
  }[];
}

const Communication: React.FC<Props> = ({ img, title, body, data }) => {
  return (
    <Container>
      <img src={`/images/education/${img}`} alt={`title`} />

      <Title>
        <h2>{title}</h2>
        <p>{body}</p>
      </Title>

      <Contents>
        {data.map((item, i) => (
          <List key={i} img={item.img} list={item.list} />
        ))}
      </Contents>
    </Container>
  );
};

export default Communication;