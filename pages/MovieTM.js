import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  media: {
    height: 240
  }
}));

const movieImgStyle = {
  height: '240px'
}
function Movie() {
    return (<img src="/static/movie-time-machine.jpg" alt="movieTM" id="movieIMG" style={movieImgStyle}/>)
}


export default function MovieTM() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id='gallery'>
      <CardHeader title='Movie Time Machine' />

      <CardMedia
        className={classes.media}
        title='Movie Time Machine'
      >
      <Movie className={classes.media}/>
      </CardMedia>

      <CardContent>
        <Typography color='textSecondary' component='p'>
          A time machine app that searches for movies by year
        </Typography>
        <br />
        <div className='details'>
          <i className='fab fa-react fa-lg' title='react' />
          <i className='fab fa-css3 fa-lg' title='css3' />
          <i className='fab fa-bootstrap fa-lg' title='bootstrap' />
          <i className='fab fa-github fa-lg' title='github' />
        </div>
      </CardContent>

      <CardActions>
        <Button size='small' color='primary'>
          <a
            href='https://movie-time-machine.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit
          </a>
        </Button>
      </CardActions>
      <style jsx>{`
.MuiPaper-root {
        margin: 0 auto;
        padding: 1%;
        height: 525px;
      }
      
      .MuiCardHeader-title {
        color: #007388;
        margin-left: -15px !important;
        font-family: 'Raleway', sans-serif;
      }
      
      div.details {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 3%;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        max-width: 300px;
        height: 1.5rem;
      }
      
      div.details .fab,
      div.details .fas {
        color: #17a2b8;
        font-size: 1.5rem;
      }
      
      button {
        margin-bottom: 1%;
        background-color: rgba(0, 0, 0, 0.08) !important;
      }
      
      button span.MuiButton-label a {
        color: #007388 !important;
      }
      
      .MuiButton-root:hover {
        background-color: #007388 !important;
      }
      
      .MuiButton-root:hover .MuiButton-label a {
        color: #ffffff !important;
        text-decoration: none;
      }`}</style>
    </Card>
  );
}
