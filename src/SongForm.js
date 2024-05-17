import React from 'react';
import { Text } from 'rebass';
import { StyledFormContainer, StyledInput, EmotionButton, CloseButton } from './StyledComponents';

const SongForm = ({ isVisible, isEditing, song, onClose, onSave, onChange }) => {
  return (
    <StyledFormContainer isVisible={isVisible}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Text>{isEditing ? 'Edit Song' : 'Create New Song'}</Text>
      <form onSubmit={onSave}>
        <StyledInput
          type="text"
          name="title"
          placeholder="Enter song title"
          value={song.title}
          onChange={onChange}
          required
        />
        <StyledInput
          type="text"
          name="url"
          placeholder="Enter image URL"
          value={song.url}
          onChange={onChange}
          required
        />
        <EmotionButton type="submit" bg="#007bff">{isEditing ? 'Save Changes' : 'Create Song'}</EmotionButton>
      </form>
    </StyledFormContainer>
  );
};

export default SongForm;
