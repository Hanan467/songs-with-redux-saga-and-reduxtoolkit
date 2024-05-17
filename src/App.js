import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSongsFetch, deleteSongRequest, updateSongRequest, createSongRequest } from './songState';
import SongList from './SongList';
import SongForm from './SongForm';
import { BoxContainer, StyledImage, AddButton,Body } from './StyledComponents';
import img from '../src/1.png';

const App = () => {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [editedSong, setEditedSong] = useState({ id: '', title: '', url: '' });
  const [newSong, setNewSong] = useState({ title: '', url: '' });

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handleDeleteSong = (songId) => {
    dispatch(deleteSongRequest(songId));
  };

  const handleUpdateSong = (song) => {
    setEditedSong({ id: song.id, title: song.title, url: song.url });
    setIsEditing(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateSongRequest(editedSong));
      setIsEditing(false);
      setEditedSong({ id: '', title: '', url: '' });
    } else {
      dispatch(createSongRequest(newSong));
      setNewSong({ title: '', url: '' });
      setIsCreating(false);
    }
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditedSong({ id: '', title: '', url: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditedSong({ ...editedSong, [name]: value });
    } else {
      setNewSong({ ...newSong, [name]: value });
    }
  };

  return (
    <Body>
      <BoxContainer>
        <StyledImage src={img} />
        <AddButton onClick={() => setIsCreating(true)}>+</AddButton>
        <SongList songs={songs} onUpdate={handleUpdateSong} onDelete={handleDeleteSong} />
        <SongForm
          isVisible={isCreating || isEditing}
          isEditing={isEditing}
          song={isEditing ? editedSong : newSong}
          onClose={handleCloseForm}
          onSave={handleSaveChanges}
          onChange={handleInputChange}
        />
      </BoxContainer>
    </Body>
  );
};

export default App;
