import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Row, Image } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import IconButton from '@material-ui/core/IconButton';
// hello
const StyledCard = styled(Card)`
    transform-origin: top center;
    transition: transform 300ms;
    position: relative;
    z-index: 0;
    border-radius: 1rem;
    outline: none;
    margin-bottom: 30rem;
    object-fit: cover;
    :hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.9);
    }
    .news-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}
`;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  control: {
    padding: theme.spacing(2),
  },
  saved:{
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  readFull:{
      bottom: 0,
      left: 0,
      position: 'relative',
  }
}));
const News = ({ addResource, discView, search, font, saved, addSaved }) => {
    const [news, setNews] = useState([]);
    // a state for each favorite button on each news card
    const [iconColor1, setIconColor1] = useState('rgb(80 80 80 / 46%)');
    const [iconColor2, setIconColor2] = useState('rgb(80 80 80 / 46%)');
    const [iconColor3, setIconColor3] = useState('rgb(80 80 80 / 46%)');
    const [iconColor4, setIconColor4] = useState('rgb(80 80 80 / 46%)');
    const [iconColor5, setIconColor5] = useState('rgb(80 80 80 / 46%)');
    const [iconColor6, setIconColor6] = useState('rgb(80 80 80 / 46%)');
    const classes = useStyles();
    const query = `${search}`;
    const getNews = (query) => {
        axios.get(`/newsQ/:${query}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }
    // const getGeneral = () => {
    //     axios.get(`/ticker`)
    //     .then(({data}) => {
    //         setNews(data);
    //     }).catch()
    // }
    useEffect(() => {
        getNews(query);
    }, [discView]);
    // sets the 6 news objects to their own card
    // this was done so that when article is favorited, only that one article favorite button changes state
    const individualNewsCards = () => {
        if(!news.length) {
            getNews(query);
        } else {
            return (
        <div className="news-container">
            <Row md={4} style={{ justifyContent: 'center', position: 'center' }}>
                <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[0].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[0].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[0].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[0].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[0], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[0], 'article');
                                    setIconColor1('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor1 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[1].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[1].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[1].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[1].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[1], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[1], 'article');
                                    setIconColor2('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor2 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[2].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[2].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[2].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[2].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[2], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[2], 'article');
                                    setIconColor3('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor3 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[3].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[3].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[3].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[3].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[3], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[3], 'article');
                                    setIconColor4('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor4 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[6].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[6].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[6].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[6].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[6], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[6], 'article');
                                    setIconColor5('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor5 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image
                            src={news[5].urlToImage}
                            alt='No Image Available'
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[5].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[5].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[5].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[5], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[5], 'article');
                                    setIconColor6('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor6 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
            </Row>
        </div>
     );
        }
    }
    console.log('third', news);
    return (
        individualNewsCards() || null
    );
    }
export default News;