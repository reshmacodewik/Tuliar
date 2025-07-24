import React from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/tailoredStyles';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../Navigation/Mystack';

const TailoredScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <View style={s.container}>
        <Image
          source={require('../../../assets/image/comment.png')}
          style={s.icon}
        />
        <Text style={s.title}>Tainred Just For You</Text>
        <View style={s.bulletList}>
          <View style={s.bulletItem}>
            <Text style={s.bulletDot}>{'\u2022'}</Text>
            <Text style={s.bulletText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <View style={s.bulletItem}>
            <Text style={s.bulletDot}>{'\u2022'}</Text>
            <Text style={s.bulletText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <View style={s.bulletItem}>
            <Text style={s.bulletDot}>{'\u2022'}</Text>
            <Text style={s.bulletText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
        </View>
        <Pressable style={s.button} onPress={() => navigation.navigate('Questionnaire')}>
          <Text style={s.buttonText}>Start Questionnaire</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default TailoredScreen; 