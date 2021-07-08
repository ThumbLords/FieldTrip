import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {Cloudinary} from 'cloudinary-core';
const cloudinaryCore = new Cloudinary({cloud_name: 'dntf1x5a6'});

const ImageLibraryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

.ImageContainer {
  height: fit-content;
  margin: 1rem 1rem;
  justify-content: center;
  align-items: flex-start;
}
  img{
    border-radius: 10px;
    width: auto;
    height: 300px;
    transition: transform 300ms;
    :hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.9);
    }
  }
  h3{
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`
/**
 * TO DO
 * Determine why image is not loading into image library until refresh
 * - Look at timing and error messages
 *
 */

const ImageLibrary = ({images, setImages, loadImages, clicked}) => {
  return(
    <ImageLibraryContainer>
      <h3>Community Photo Board</h3>
        {images ?
        images.map((image, i) => (
          <div className="ImageContainer"  key={i}>
            <img src={cloudinaryCore.url(`https://res.cloudinary.com/dntf1x5a6/image/upload/${image.public_id}.jpg`)}/>
          </div >)
         )
      : <p>No images to view</p>}
    </ImageLibraryContainer>
  )
}

export default ImageLibrary;