import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Spartan', sans-serif;
    background: ${({ theme }) => theme.bodyBG};
    color: ${({ theme }) => theme.bodyText};
    height: 100vh;
    transition: all 0.3s linear;
  }
  //test
  header{
    background: ${({ theme }) => theme.bodyBG};
    padding: 10px 10px;
    margin: 0;
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px #736bfb;
    opacity: 87%;
    backdrop-filter: blur(8px);
  }
  .stamp-container{
    background-color: ${({ theme }) => theme.stampContainer};
    border-radius: 10px !important;
    border: 3px !important;
    border-color: whitesmoke !important;
    margin: 3rem auto;
    margin-bottom: 5rem;
    padding: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 65%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: ${({ theme }) => theme.bodyText};
    backdrop-filter: blur(10px);
    h3{
      color: ${({ theme }) => theme.bodyText};
      text-align: center;
      width: 100%;
      margin-bottom: 1rem;
      margin-top: 0.25rem;
    }
  }
  .avatar-selector{
    background: ${({ theme }) => theme.bodyBG};
    color: ${({ theme }) => theme.bodyText};
    opacity: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 13px 1px ${({ theme }) => theme.bodyText};
  }
  #btn{
    color: ${({ theme }) => theme.bodyText};
  }
  #bottom-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background-color: ${({ theme }) => theme.bottomNavBG};
    backdrop-filter: blur(8px);
    box-shadow: 0px 0px 7px 0px #736bfb
  }
  .bottom-nav-icon{
    /* background: ${({ theme }) => theme.bodyText}; */
    color: ${({ theme }) => theme.bottomNavPrimaryIcon};
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
  .news-text{
    font-weight: bolder;
    color: ${({ theme }) => theme.newsCardText};
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
  .bg-light{
    background-color: ${({ theme }) => theme.newsCardBG};
  }
  .mb-4 .mt-4 .mr-4 .ml-4 {
    background-color: ${({ theme }) => theme.newsCardBG};
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
      background: ${({ theme }) => theme.bodyBG};
      color: #736bfb;
      margin-top: 0;
      opacity: 100%;
      box-shadow: 0px 0px 7px 0px #736bfb;
    }
    #tab{
      color: ${({ theme }) => theme.bodyText};
      backdrop-filter: blur(8px);
    }
    #news-card-paper{
      background-color: ${({ theme }) => theme.newsCardBG};
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
      background-color: ${({ theme }) => theme.bodyBG};
      box-shadow: 0px 0px 13px 1px ${({ theme }) => theme.bodyText};
      color: ${({ theme }) => theme.bodyText};
      border-radius: 10px;
    }
    .MuiDivider-inset{
      margin-left: 90px;
      background-color: ${({ theme }) => theme.bodyText};
      opacity: 0.45;
    }
    .makeStyles-avatar-16{
      color: ${({ theme }) => theme.bodyBG};
      background-color: ${({ theme }) => theme.bodyText};
    }
    .MuiSelect-icon{
      color: ${({ theme }) => theme.bodyText};
    }
    .choose-avatar-btn {
      margin: 15px auto;
      display: flex;
      border-radius: 10px;
      backdrop-filter: blur(90px);
      box-shadow: 0px 0px 6px 2px ${({ theme }) => theme.bodyText};
      font-size: 0.95rem;
      font-weight: 500;
      color: ${({ theme }) => theme.bodyText};
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
    .avatar-img{
      background-color: ${({ theme }) => theme.avatarBG};
    }
    .alert-container{
      background-color: ${({ theme }) => theme.stampContainer};
      color: ${({ theme }) => theme.alertText};
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