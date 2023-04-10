import { Box, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import HouseInfoIcon from './HouseInfoIcon/HouseInfoIcon';
import { remove } from '../../../../redux/feature/cartSlice';
import {
  itemContainerStyle,
  deleteButtonStyle,
  imgContainerStyle,
  imgStyle,
  itemNameStyle,
  addressStyle,
} from './style';

const CartItem = ({ item }) => {
  const { title, price, category, description, image } = item;

  const dispatch = useDispatch();

  return (
    <Box sx={itemContainerStyle}>
      <DeleteForeverIcon
        onClick={() => dispatch(remove(title))}
        sx={deleteButtonStyle}
      />
      <Box sx={imgContainerStyle}>
        <img src={image} alt={category} style={imgStyle} />
      </Box>
      <Box sx={{ width: '65%', px: 3 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            Price:{price}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={itemNameStyle}
          >
            {title}
          </Typography>
        </Box>
        <HouseInfoIcon house_info={description} />
      </Box>
    </Box>
  );
};
export default CartItem;
