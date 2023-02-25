import React from 'react';
import {Box, HStack, Input, Pressable, Text} from 'native-base';
import Colors from './../Colors';
import HomeProducts from './HomeProducts';
import HomeSearch from './HomeSearch';

const HomeScreen = () => {
  return (

    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts/>
    </Box>
  );
};

export default HomeScreen;
