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
    /* display: block; */
    border-radius: 10px;
    width: auto;
    height: 300px;
  }
  h3{
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`


const ImageLibrary = ({images, setImages, loadImages, clicked}) => {
console.log('clicked', clicked);

const filterImages = (images) => {
  //filter images before map
  if(images){
   return images.filter((v,i,a)=>a.findIndex(t=>(t.etag === v.etag))===i)
  }
};


useEffect(() => {
  loadImages()
  // setImages((previous) => {
  //   return filterImages(images)
  // })
  // filterImages(images);
}, []);

useEffect(() => {
  loadImages()
  // filterImages(images);
}, [clicked]);

  return(
    <ImageLibraryContainer>
      <h3>Community Photo Board</h3>
        {images ?
        filterImages(images).map((image, i) => (
          <div className="ImageContainer"  key={i}>
            <img src={cloudinaryCore.url(`http://res.cloudinary.com/dntf1x5a6/image/upload/${image.public_id}.jpg`)}/>
          </div >)
         )
      : <p>No images to view</p>}
    </ImageLibraryContainer>
  )
}

export default ImageLibrary;