import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';
import { iconContainerStyle, bathTextStyle } from './style';

const HouseInfoIcon = ({ house_info }) => {

  return (
    <Box sx={iconContainerStyle}>
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={{ fontSize: 'medium' }} />
        <Typography variant="caption" sx={bathTextStyle}>
          {house_info}
        </Typography>
      </Box>
    </Box>
  );
};
export default HouseInfoIcon;
