import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
interface Props extends AvatarProps {
  variant?: string;
}
const AvatarDisplay = ({ loading = false, animation, variant, value, src, size, stringAvatar, ...rest }: Props) => {
  return (
    <>
      {loading ? (
        <SkeletonLoader animation={animation} variant={variant} height={size} width={size} />
      ) : (
        <Avatar variant={variant} sx={{ width: size, height: size }} src={src}>{value}</Avatar>
      )}
    </>
  )
}
AvatarDisplay.propTypes = {
  loading: PropTypes.bool,
};
export default AvatarDisplay


