import { Box, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import StraightenIcon from '@mui/icons-material/Straighten';
import {
  houseInfoContainerStyle,
  iconStyle,
  iconTextStyle,
  supTextStyle,
} from './style';

const HouseInfo = ({ house_info }) => {

  return (
    <Box sx={houseInfoContainerStyle}>
      <Box sx={{ display: 'flex' }}>
        <BedIcon sx={iconStyle} />
        <Typography variant="caption" sx={iconTextStyle}>
          {house_info}
        </Typography>
      </Box>
    </Box>
  );
};
export default HouseInfo;
