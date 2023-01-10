import React from 'react';
import Skeleton from '@mui/material/Skeleton';



const SkeletonLoader = ({ variant, width, height, animation, ...rest }) => {
  return (
    <Skeleton variant={variant} width={width} height={height} animation={animation} {...rest} />
  )
}

export default SkeletonLoader