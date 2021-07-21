import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';
import Card from './Card';

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;

interface Props {
  stories: StoryType[];
  onDetail: (id: string) => void;
}

const CardList: React.FC<Props> = ({ stories, onDetail }) => {
  return (
    <Container>
      {stories && stories.length > 0 ? (
        <>
          {stories.map((story) => (
            <Card key={story.id} story={story} onDetail={onDetail} />
          ))}
        </>
      ) : (
        <div className="space">아직 작성된 스토리가 없습니다.</div>
      )}
    </Container>
  );
};

export default CardList;
