import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Spartan', sans-serif;
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
    height: 100vh;
  }
  //test
  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    margin: 0;
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px #736bfb;
    opacity: 87%;
    backdrop-filter: blur(8px);
  }
  .logo{
    opacity: 100% !important;
  }
  .component{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video-responsive{
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .youtube{
    padding-bottom: 250px;
  }
  .news-container{
    display: flex;
    position: center;
    align-items: center;
    padding-top: 3rem;
  }
  .card-top img{
    max-width: 200px;
  }
  #basicTabs{
      background: rgb(9, 11, 23);
      color: #736bfb;
      margin-top: 0;
      opacity: 100%;
      box-shadow: 0px 0px 7px 0px #736bfb;
    }
    #tab{
      color: whitesmoke;
      backdrop-filter: blur(8px);
    }
    #news-card-paper{
      background-color: rgb(9, 11, 23);
      opacity: 87%;
    }
    .MuiMobileStepper-dot{
      width: 6px;
      height: 6px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: #5e5e5e;
    }
    .MuiMobileStepper-dotActive{
      background-color: #736bfb;
    }
    .MuiButton-root.Mui-disabled{
      color: #5e5e5e;
    }
    #arrows{
      font-size: 1.75rem;
    }
    .container, .container-lg, .container-md, .container-sm, .container-xl{
      max-width: 80%;
    }
    .MuiDialog-paperWidthSm{
      max-width: 600px;
      background-color: rgb(9, 11, 23);
      box-shadow: 0px 0px 13px 1px ghostwhite;
      color: ghostwhite;
      border-radius: 10px;
    }
    .MuiDivider-inset{
      margin-left: 90px;
      background-color: ghostwhite;
      opacity: 0.45;
    }
    .makeStyles-avatar-16{
      color: rgb(9, 11, 23);
      background-color: ghostwhite;
    }
    .MuiSelect-icon{
      color: ghostwhite;
    }
    .choose-avatar-btn {
      margin: 15px auto;
      display: flex;
      border-radius: 10px;
      backdrop-filter: blur(90px);
      box-shadow: 0px 0px 6px 2px ghostwhite;
      font-size: 0.95rem;
      font-weight: 500;
      color: ghostwhite;
      text-align: center;
      overflow: hidden;
      background-size: 400% 400%;
      background-color: rgba(0,0,0,0);
      backdrop-filter: blur(144px);
      :hover{
        background-image: linear-gradient(to bottom, #FF00DD 0%, #B254FB 50%, #736BFB 100%);
        box-shadow: 0px 0px 24px 8px #736BFB;
        font-weight: 600;
        cursor: help;
        transform: scale(1.1);
        z-index: 1;
        font-size: 1rem;
        animation: transitioningBackground 6s infinite ease-in-out;
        transition: 0.6s;
      }
    }
    .access-ctrl {
      font-size: large;
      color: #736bfb;
      background: ghostwhite;
    }
    /* .color-changing{
      font-size: 1rem;
      font-weight: 600;
      color: ghostwhite;
      text-align: center;
      width: 200px;
      height: 60px;
      border-radius: 10px;
      overflow: hidden;
      background-image: linear-gradient(135deg, #FBFBFB 0%, #BFB3FB 38%, #736BFB 100%);
      background-size: 400% 400%;
      animation: transitioningBackground 10s ease infinite;
      transition: 0.6s;

      :hover{
        background-image: linear-gradient(to bottom, #FF00DD 0%, #B254FB 50%, #736BFB 100%);
        width: 215px;
        height: 75px;
        cursor: pointer;
      }
    } */

    @keyframes transitioningBackground {
      0% {
        background-position: 1% 0%;
      }
      50% {
        background-position: 99% 100%;
      }
      100% {
        background-position: 1% 0%;
      }
    }
`;
export default GlobalStyles;