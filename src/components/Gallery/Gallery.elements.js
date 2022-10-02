import styled from "styled-components";

import {
  IoArrowRedoCircleOutline,
  IoArrowUndoCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

export const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
`;

export const GalleryItem = styled.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 160px;
  height: 160px;
  cursor: pointer;
  transition: all 0.1s ease;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  :hover {
    transform: scale(1.02);
    transition: all 0.1s ease;
  }
`;

export const SliderWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--color-gray90);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const FullScreenImages = styled.div`
width: calc(100%);
height: calc(100%);
display: flex;
align-items: center;
justify-content: center;

img {
  max-width: 80%;
  max-height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;

export const IconPrev = styled(IoArrowUndoCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.4;
  color: var(--color-white);
  z-index: 9999;
  font-size: 4rem;

  top: 50%;
  transform: translateY(-50%);
  left: 1%;

  :hover {
    opacity: 1;
  }
`;
export const IconNext = styled(IoArrowRedoCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.4;
  color: var(--color-white);
  z-index: 9999;
  font-size: 4rem;


  top: 50%;
  transform: translateY(-50%);
  right: 1%;

  :hover {
    opacity: 1;
  }
`;
export const IconClose = styled(IoCloseCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.6;
  color: var(--color-white);
  z-index: 9999;
  font-size: 3rem;


  top: 2%;
  right: 1%;

  :hover {
    opacity: 1;
  }
`;
