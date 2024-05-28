import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const ImageSlider = () => {
  const [image, setImage] = useState([
    require('../images/story3.jpg'),
    require('../images/story1.jpg'),
    require('../images/story2.jpg'),
    require('../images/story4.jpeg'),
    // require('../images/autumn.jpg'),
    // require('../images/spring.jpg'),
    // require('../images/summer.jpg'),
    // require('../images/winter.jpg'),
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // const images = [
  //   require('../images/story3.jpg'),
  //   require('../images/story1.jpg'),
  //   require('../images/story2.jpg'),
  //   require('../images/story4.jpeg'),
  //   require('../images/autumn.jpg'),
  //   require('../images/spring.jpg'),
  //   require('../images/summer.jpg'),
  //   require('../images/winter.jpg'),
  //   // Add more images as needed
  // ];

  const gapWidth = 10;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: '50%'}}>
        <FlatList
          data={image}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.round(x / 360));
            // setCurrentIndex((x / 100).toFixed(0));
          }}
          horizontal
          renderItem={({item, index}) => (
            <View
              style={{
                width: 360,
                height: 380,
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                disabled={true}
                style={{
                  width: '100%',
                  height: '100%',
                  // borderRadius: 10,
                  // overflow: 'hidden',
                }}>
                <Image
                  source={item}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // width: '50%',
          justifyContent: 'space-evenly',
          // justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        {image.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 40,
                height: 3,
                borderRadius: 8,
                backgroundColor: currentIndex == index ? '#000080' : 'gray',
                marginLeft: index === 0 ? 0 : gapWidth,
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
