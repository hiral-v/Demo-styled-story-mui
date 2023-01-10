import React from 'react';
import AvatarDisplay from '../Avatar/AvatarDisplay';

import AvatarGroup from '@mui/material/AvatarGroup';
import AvatarImg from '../../assets/images/avatar.png';
import AssignmentIcon from '@mui/icons-material/Assignment';



const AvatarList = ({value, max, variant, total, loading, ...rest }: props) => {
  return (
    <AvatarGroup max={max} total={total} width={250}>
        <AvatarDisplay variant={variant} alt="Remy Sharp" src={AvatarImg} loading={loading}></AvatarDisplay>
        <AvatarDisplay variant={variant} value={value} loading={loading}></AvatarDisplay>
        <AvatarDisplay variant={variant} loading={loading}><AssignmentIcon /></AvatarDisplay>
        <AvatarDisplay variant={variant} alt="Remy Sharp" src={AvatarImg} loading={loading}></AvatarDisplay>
        <AvatarDisplay variant={variant} value={value} loading={loading}></AvatarDisplay>
        <AvatarDisplay variant={variant} loading={loading}><AssignmentIcon /></AvatarDisplay>
    </AvatarGroup>
  )
}
export default AvatarList