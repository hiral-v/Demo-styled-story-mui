import React from 'react';
import Avatar from '@mui/material/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   smallAvatar: {
//     height: '24px',
//     width: "24px",
//   },
//   defaultAvatar: {
//     height: '40px',
//     width: "40px",
//   },
//   largeAvatar: {
//     height: '56px',
//     width: "56px",
//   },
// }));

const AvatarDisplay = ({ variant, value, src, size, stringAvatar, ...rest }: Props) => {
  // const className = useStyles();
  return (
    <Avatar variant={variant} size={size} src={src}>{value}</Avatar>
  )
}

export default AvatarDisplay


