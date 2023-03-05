import axios from 'axios';
import {
  Flex,
  Pressable,
  ScrollView,
  Text,
  Image,
  Box,
  Heading,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import Colors from './../Colors';
import fireDB from '../firebase/Firebase';

const HomeProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // fireDB.child('goat-test').on('value', snapshot => {
    //   if (snapshot.val() !== null) {
    //     setData({...snapshot.val()});
    //   } else {
    //     setData({});
    //   }
    // });
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));
  };

  console.log(data);

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap={'wrap'}
        direction="row"
        justifyContent={'space-between'}
        px={6}>
        {data.map((product: any) => (
          <Pressable
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden">
            <Image
              source={{uri: product.image}}
              alt={'image'}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.title}
              </Text>
            </Box>
          </Pressable>
        ))}

        {Object.keys(data).map(item => console.warn(item))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
