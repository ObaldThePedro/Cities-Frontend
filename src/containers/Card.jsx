import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Homepage from '../img/homepage.jpeg'
import {Link} from 'react-router-dom'
import { Checkbox } from '@material-ui/core';

export default class MediaCard extends React.PureComponent{ 
  handleCheckbox = () => this.props.addCityToSelection(this.props.city.name)

  render(){
  return (
    <Card 
    onClick={this.handleCheckbox}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        <Link to={{pathname:`/city/${this.props.city.name}`, state:{cities: this.props.cities}}}>
          <Checkbox
            checked={this.props.selected}
            onChange={this.handleCheckbox}
          />
          {this.props.city.name}
          </Link>
        </Typography>
      </CardContent>
      
    </CardActionArea>
    </Card>
  );
    }
}