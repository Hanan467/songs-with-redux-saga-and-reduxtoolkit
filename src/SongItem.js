import React from 'react';
import { Text } from 'rebass';
import { StyledSongItem, StyledImage, UpdateButton, DeleteButton } from './StyledComponents';

const SongItem = ({ song, onUpdate, onDelete }) => {
  return (
    <StyledSongItem>
      <StyledImage src={song.url} alt={song.title} />
      <Text>{song.title}</Text>
      <div>
        <UpdateButton onClick={() => onUpdate(song)}>Update</UpdateButton>
        <DeleteButton onClick={() => onDelete(song.id)}>Delete</DeleteButton>
      </div>
    </StyledSongItem>
  );
};

export default SongItem;
