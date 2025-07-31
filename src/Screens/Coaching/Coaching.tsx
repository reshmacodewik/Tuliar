import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/Mystack';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/coachingStyles';

type CoachingNavigationProp = StackNavigationProp<RootStackParamList, 'Questionnaire'>;

const Coaching = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<CoachingNavigationProp>();

  return (
    <View style={s.container}>
      <Text style={s.title}>Coaching &{"\n"}Mentoring</Text>
      <Text style={s.subtitle}>
        Benefits of coaching await.{"\n"}Embark on a journey of growth today
      </Text>
      <Image
        source={require('../../../assets/image/coaching.png')}
        style={s.illustration}
      />
      <Pressable style={s.button} onPress={() => navigation.navigate('Questionnaire')}>
        <Text style={s.buttonText}>Next</Text>
      </Pressable>
      <Image
        source={require('../../../assets/image/logo.png')}
        style={s.logo}
      />
    </View>
  );
};

export default Coaching;
