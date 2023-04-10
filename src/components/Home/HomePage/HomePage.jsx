import { Box } from '@mui/material';
import { useState } from 'react';
import api_data from '../../../products';

import LoadingSpinner from '../../miscellaneous/LoadingSpinner';

import PropertiesContainer from './PropertiesContainer/PropertiesContainer';

const HomePage = () => {
  const [properties] = useState(api_data);
  const [errorText] = useState('');

  // spinner for loading time and shows error when failed to load
  if (!properties.length) {
    return <LoadingSpinner error={errorText} />;
  }

  return (
    <Box sx={{ px: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PropertiesContainer properties={properties} />
      </Box>
    </Box>
  );
};

export default HomePage;
