import React from 'react';
import {Box, Button, Center, VStack} from 'native-base';
import Colors from './../Colors';
import {Image} from 'react-native-svg';

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w={'full'} h={250}>
        {/* <Image /> */}
      </Center>
      <VStack space={6} px={5} alignItems={'center'}>
        <Button
          w="full"
          h={55}
          //   mt={mt}
          rounded="full"
          bg={Colors.black}
          _text={{
            color: Colors.white,
            fontWeight: 'bold',
          }}
          _pressed={{bg: Colors.black}}>
          REGISTER
        </Button>
        <Button
          w="full"
          h={55}
          //   mt={mt}
          rounded="full"
          bg={Colors.white}
          _text={{
            color: Colors.black,
            fontWeight: 'bold',
          }}
          _pressed={{bg: Colors.white}}>
          LOGIN
        </Button>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
