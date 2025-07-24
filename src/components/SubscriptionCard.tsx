import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';
import styles from '../style/subscriptionStyles';

type Props = {
  title: string;
  price: string;
  features: string[];
  alt?: boolean;
  onSubscribe: () => void;
};

const SubscriptionCard: React.FC<Props> = ({ title, price, features, alt, onSubscribe }) => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  return (
    <View style={[s.card, alt && s.cardAlt]}>
      <Text style={s.cardTitle}>{title}</Text>
      <Text style={s.cardPrice}>{price}</Text>
      {features.map((feature, idx) => (
        <Text key={idx} style={s.cardFeature}>{'\u2022'} {feature}</Text>
      ))}
      <Pressable style={s.subscribeButton} onPress={onSubscribe}>
        <Text style={s.subscribeButtonText}>Subscribe Now</Text>
      </Pressable>
    </View>
  );
};

export default SubscriptionCard; 