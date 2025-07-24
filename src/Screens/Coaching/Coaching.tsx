import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/coachingStyles';
import TailoredScreen from './TailoredScreen';

const Coaching = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const [showTailored, setShowTailored] = React.useState(false);

  if (showTailored) {
    return <TailoredScreen />;
  }

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
      <Pressable style={s.button} onPress={() => setShowTailored(true)}>
        <Text style={s.buttonText}>Continue My Journey</Text>
      </Pressable>
      <Image
        source={require('../../../assets/image/logo.png')}
        style={s.logo}
      />
    </View>
  );
};

export default Coaching;
