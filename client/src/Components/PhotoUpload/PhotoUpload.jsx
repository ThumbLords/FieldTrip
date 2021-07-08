import React, {useState, useEffect} from 'react'
import ImageLibrary from './ImageLibrary.jsx';
import axios from 'axios';
import styled from'styled-components';
import Button from '@material-ui/core/Button';


const StyledTitle =  styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;

`
const StyledForm = styled.form`
  background-color: rgba(9, 11, 23, 0.87);
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 7px 0px #736bfb;
  button{
    color: whitesmoke;
    margin-right: 2rem;
  }
  input{
    margin-top: 2px;
    justify-content: center;
    margin-left: 2rem;
    border-radius: 5px;

  }
`
const StyledP = styled.p`
  width: 60%;
  margin: 1rem;
  text-align: center;
  background-color: rgba(9, 11, 23, 0.67);
  color: ghostwhite;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  position: relative;
  left: 20%;
  padding: 1rem;
`

const PhotoUpload = ({font}) => {
  // console.log('imageIds', imageIds)
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, useSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [images, setImages] = useState();
  const [clicked, setClicked] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImage(previewSource);
    setPreviewSource('');
    setClicked(!clicked);
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      })
      .then(() => {
        console.log('just above loadimages')
        loadImages();

      })
    } catch (error) {
      console.log(error);
    }
  }

  const loadImages = async () => {
    try {
      const result = await axios.get('/api/images');
      const data = await result.data;
      const res = filterImages(data);
      setImages(res);
      // setLoaded(!loaded);
      console.log('res from load image', res)
    }
    catch (err) {
      console.log(err);
    }
  }

  const filterImages = (images) => {
    //filter images before map
    if(images){
    return images.filter((v,i,a)=>a.findIndex(t=>(t.etag === v.etag))===i)
    }
  };

  useEffect(()=> {
    console.log('click photo upload', clicked);
    loadImages();
  }, [clicked])

  return(
    <div>
      <StyledForm onSubmit={handleSubmitFile}>
        <input
          type="file" name="image" className="form-input" onChange={handleFileInputChange} value={fileInputState}
          />
        <Button variant="outlined" className="btn" type="submit" onClick={()=> uploadImages()}>Submit</Button>
      </StyledForm>
      <StyledTitle>Upload Your Discoveries</StyledTitle>
      <StyledP style={{ fontSize: font }}>When you're out in the world, whether you're traveling, or taking a nature walk, or stargazing, take a look around. Explore your surroundings and upload your discoveries! Share with other Field Trippers and enjoy sharing the beauty of life with other enthusiasts.</StyledP>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{height: '150px'}}/>
      )}
      <ImageLibrary images={images} setImages={setImages} loadImages={loadImages} setClicked={setClicked} clicked={clicked}/>
    </div>
  )
}

export default PhotoUpload;