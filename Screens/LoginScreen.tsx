import React from 'react';
import {Text, Box, Image, Heading, VStack, Input, Button} from 'native-base';
import Colors from './../Colors';
import {Pressable} from 'react-native';

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.white}>
      {/* <Image resizeMode="cover" size="lg" flex={1} w="full" /> */}
      <Box
        w="full"
        h="full"
        position={'absolute'}
        top="0"
        px="6"
        justifyContent={'center'}>
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          <Input
            // InputLeftElement={

            // }
            variant={'underlined'}
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* Password */}
          <Input
            // InputLeftElement={

            // }
            variant={'underlined'}
            placeholder="**********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          _text={{
            color: Colors.white,
          }}>
          LOGIN
        </Button>
        <Pressable>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
};
export default LoginScreen;
