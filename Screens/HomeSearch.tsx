import React from 'react';
import {HStack, Input} from 'native-base';
import Colors from './../Colors';

const HomeSearch = () => {
  return (
    <HStack
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
      space={3}
      w="full"
      px={6}>
      <Input
        placeholder="Nike,Puma,Adidas"
        w="85%"
        bg={Colors.white}
        type="text"
        variant={'filled'}
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
    </HStack>
  );
};

export default HomeSearch;
