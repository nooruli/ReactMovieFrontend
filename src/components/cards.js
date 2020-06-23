import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
export default class MediaCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
    }

  }

  handleAddToFavrouite = (id) => {
    fetch(`http://localhost:8080/${id}?api_key=8b5e3a87ebe14efb138bc4772c8b722c`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(id), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses JSON response into native JavaScript objects 
      .then(response => {
        alert("Added to Favourite")
      })
  }
  handleRemoveFavrouite = (id) => {
    // To delete the element from favourite 
    fetch(`http://localhost:8080/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(id), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses JSON response into native JavaScript objects 
      .then(response => {

        alert("Removed from Favourite")
        // Locally removing the element from favourite
      })
  }

  render() {
    const { movieData } = this.props
    const { favouriteList } = this.props
    return (
      this.props.movieData ?
        <Card style={{ maxWidth: '345px', margin: 10, padding: 20 }}>
          <CardActionArea>
            <CardMedia
              style={{ height: '140px' }}
              image={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
              title={movieData.original_title}
            />
            <CardContent style={{ textAlign: "left" }}>
              <Typography gutterBottom variant="h7" component="h2">
                Name:{movieData.original_title}
              </Typography>
              <Typography gutterBottom variant="h7" component="h3">
                Popularity:{movieData.popularity}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Overview:{movieData.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ textAlign: "center" }}>
            {
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-end" }}>
                {
                  (this.props.favouriteList)?
                  (this.props.favouriteList.find(fMovie=>fMovie.id===movieData.id)) ?
                  <Button size="small" color="primary" onClick={()=>this.handleRemoveFavrouite(movieData.id)}>
                  Remove from Favourite
                </Button>:
                    <Button size="small" color="primary" onClick={()=>this.handleAddToFavrouite(movieData.id)}>
                      Add To Favourite
                    </Button>:<></> 
                   
                }
              </div>
            }
          </CardActions>
        </Card> : <></>

    );
  }
}
