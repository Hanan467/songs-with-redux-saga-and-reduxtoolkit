import React from 'react';
import { Flex } from 'rebass';
import { StyledSongContainer } from './StyledComponents';
import SongItem from './SongItem';

const SongList = ({ songs, onUpdate, onDelete }) => {
  return (
    <Flex>
      <StyledSongContainer>
        {songs.map((song) => (
          <SongItem key={song.id} song={song} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </StyledSongContainer>
    </Flex>
  );
};

export default SongList;
