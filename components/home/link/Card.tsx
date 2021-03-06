import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 5px;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;

  ${media.medium} {
    flex: 1 1 50%;
    max-width: 47.5%;
  }

  ${media.small} {
    flex: none;
    max-width: 95%;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 0;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.06);
    word-wrap: break-word;
    background: white;
    border-radius: 0.25rem;

    img {
      cursor: pointer;
      transition: all 0.2s ease 0s;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
      flex-shrink: 0;
      -ms-flex-shrink: 0;
      width: 100%;
      vertical-align: middle;
      border-style: none;

      &:hover {
        filter: grayscale(80%);
        -webkit-filter: grayscale(80%);
      }
    }
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2rem 0.2rem;

  h4 {
    font-family: '윤고딕340';
    font-size: 23px;
    color: #463884;
    text-align: center;
    padding-top: 0.25rem;
    margin: 0;
    letter-spacing: -0.05rem;
    font-weight: 600;
    line-height: 27px;
    margin: 0 0 14px 0;

    &:before {
      content: '';
      display: block;
      border-top: 3px solid rgb(34, 139, 230);
      width: 100px;
      margin: -20px auto 5px;
    }
  }

  p {
    margin: 0 0 20px;
    text-align: center;
    max-width: 100%;
    height: 52px;
    word-break: keep-all;
    font-family: '윤고딕310';
    font-size: 19px;
    color: #000000;
    line-height: 1.3;
  }
`;

interface Props {
  item: MainLinkType;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <div className="card">
        <img src={item.img} alt={item.title} />

        <Content>
          <h4>{item.title}</h4>
          <p>{item.sub}</p>
        </Content>
      </div>
    </Container>
  );
};

export default Card;
