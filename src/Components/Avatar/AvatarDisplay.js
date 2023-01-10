import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
interface Props extends AvatarProps {
  variant?: string;
}
const AvatarDisplay = ({ loading = false, variant, value, src, size, stringAvatar, ...rest }: Props) => {
 
  return (
    <>
      {loading ? (
        <SkeletonLoader animation="wave" variant={variant} height={40} width={40} />
      ) : (
        <Avatar variant={variant} size={size} src={src}>{value}</Avatar>
      )}
    </>
  )
}
AvatarDisplay.propTypes = {
  loading: PropTypes.bool,
};
export default AvatarDisplay


