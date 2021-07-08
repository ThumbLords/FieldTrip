import React, {useState, useEffect} from 'react';
import Passport from './Passport.jsx';
import styled from 'styled-components';
import DialogSelectAvatar from './DialogSelectAvatar.jsx';
import avatarDefaultPurple from '../../assets/avatarDefaultPurple.jpg';
import avatarDefaultGrey from '../../assets/avatarDefaultGrey.jpg';
import axios from 'axios';

const ProfileStyles = styled.div`
  padding-top: 3rem;
  .profileInfo{
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    max-width: 300px;
    text-align: center;
  }
  .profileInfo h3{
    /* padding-top: 1.25rem; */
    padding: 0.5rem;
    width: max-content;
    background: rgba(0,0,0,0);
    backdrop-filter: blur(90px);
    border-radius: 50px;
    justify-content: center;
  }
`;
const Img = styled.div`
  img{
    /* width: 200px; */
    /* height: 200px; */
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    background: rgba(0,0,0,0);
    /* filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6)); */
    backdrop-filter: blur(90px);
  }
`
const Profile = ({user, getStamps, stamps, getBadges, badges}) => {
  const [avatar, setAvatar] = useState(avatarDefaultGrey)

  const getAvatar = () => {
    axios.get(`/avatar/${user.id}`)
    .then(({data}) => {
      setAvatar(data || avatarDefaultGrey);
    })
  }

  const saveAvatar = (avatarToSave) => {
      axios.post(`/avatar/${user.id}`, {avatar: avatarToSave})
      .then(() => {
        getAvatar();
      })
      .catch();
  }


  useEffect(() => {
    getStamps();
    getBadges();
    getAvatar();
  }, []);
  return (
    <ProfileStyles>
      <div className="profileInfo">
        <Img>
          <img src={avatar} alt="Avatar"/>
        </Img>
        <h3>{user.name}</h3>
      </div>
      <DialogSelectAvatar setAvatar={setAvatar} saveAvatar={saveAvatar}/>
      <Passport stamps={stamps} badges={badges}/>
    </ProfileStyles>
  );
};
export default Profile;