import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../redux/feature/cartSlice';
import HouseType from './HouseType/HouseType';
import {
  propertyContainer,
  imgContainerStyle,
  cardContentContainer,
  askingPriceStyle,
  buttonStyle,
  nameTextStyle,
  addressTextStyle,
} from './style';
import './Property.css';

const Property = ({ property }) => {
  const { id,title, price, address, description, category, image } = property;
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6} lg={4} sx={propertyContainer}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <Box sx={{ position: 'relative', mx: 1 }} className="img-container">
          <HouseType house_type={category} />
          <Box sx={imgContainerStyle} />
          <CardMedia
            component="img"
            alt="green iguana"
            height="230"
            image={image}
            sx={{ borderRadius: 3 }}
          />
        </Box>
        <CardContent>
          <Box sx={cardContentContainer}>
            <Box>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={askingPriceStyle}
              >
                Price:{price}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => dispatch(addToCart(property))}
                size="small"
                variant="contained"
                sx={buttonStyle}
              >
                Buy
              </Button>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={nameTextStyle}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={addressTextStyle}
          >
            {address}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Property;
