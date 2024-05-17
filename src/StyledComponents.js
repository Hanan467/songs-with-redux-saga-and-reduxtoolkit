import styled from '@emotion/styled';
import { Box, Button, Card, Image } from 'rebass';

export const Body = styled.body`
background-color:#282828;
`;

export const BoxContainer = styled(Box)`
  background-color: #282828;
  min-height: 100vh;
`;

export const StyledSongContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 1500px;
  height: 700px;
  @media screen and (max-width: 989px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledSongItem = styled(Card)`
  padding: 20px;
  text-align: center;
  background-color: #282828;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 300px;
  border-radius: 20px;
`;

export const EmotionButton = styled(Button)`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

export const StyledFormContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 999;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background-color: red;
  color: white;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const UpdateButton = styled(EmotionButton)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;

export const DeleteButton = styled(EmotionButton)`
  background-color: #ff0000;
  &:hover {
    background-color: #cc0000;
  }
`;

export const AddButton = styled(Button)`
  float: right;
  padding: 10px 20px;
  margin-right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 998;
  &:hover {
    background-color: #0056b3;
  }
`;
