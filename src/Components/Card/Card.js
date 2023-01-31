import * as React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BaseButton from '../Button/Button';
import Typography from '@mui/material/Typography';
import CardImage from '../../assets/images/card.jpg';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

const ImgMediaCard = (props) => {
  const { loading = false,  } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      {loading ? (
          <SkeletonLoader animation="wave" variant="rounded" width="100%" height={200} />
      ) : (
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={CardImage}
        />
      )}
      <CardContent>
        {loading ? (
          <SkeletonLoader animation="wave" variant="text" width={200} height={20} />
        ) : (
          <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
        )}
        {loading ? (
          <>
            <SkeletonLoader animation="wave" variant="text"  width="100%" height={20} />
            <SkeletonLoader animation="wave" variant="text"  width="100%" height={20} />
            <SkeletonLoader animation="wave" variant="text"  width="100%" height={20} />
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {loading ? (
          <SkeletonLoader animation="wave" variant="text" width={70} height={40} />
        ) : (
        <BaseButton variant="text" value="Share"/>
        )}
        {loading ? (
          <SkeletonLoader animation="wave" variant="text" width={70} height={40} />
        ) : (
          <BaseButton variant="text" value="Learn More"/>
        )}
        </CardActions>
    </Card>
  );
}
ImgMediaCard.propTypes = {
  loading: PropTypes.bool,
};
export default ImgMediaCard;