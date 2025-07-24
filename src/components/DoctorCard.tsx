import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';
import styles from '../style/doctorListStyles';

type Props = {
  name: string;
  exp: string;
  avatar: any;
  icons: any[];
  prices: string[];
  selected?: boolean;
  onViewProfile?: () => void;
  onSchedule?: () => void;
};

const DoctorCard: React.FC<Props> = ({ name, exp, avatar, icons, prices, selected, onViewProfile, onSchedule }) => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  return (
    <>
    <View style={[s.card, selected && s.cardSelected]}>
      <View style={s.avatarContainer}>
      <Image source={avatar} style={s.avatar} />
      <View style={s.nameContainer}>
      <Text style={s.name}>{name}</Text>
      <Text style={s.exp}>{exp}</Text>
      </View>
     
      </View>
     
      <View style={s.iconRow}>
        {icons.map((icon, i) => (
          <Image key={i} source={icon} style={s.icon} />
        ))}
      </View>
      <View style={s.priceRow}>
        {prices.map((price, i) => (
          <Text key={i} style={s.price}>{price}</Text>
        ))}
      </View>
      <View style={s.buttonRow}>
        <Pressable style={s.widthfit} onPress={onViewProfile}>
          <Text style={s.btnprimary}>View Profile</Text>
        </Pressable>
        <Pressable style={s.widthfit} onPress={onSchedule}>
          <Text style={s.btnprimaryoutline}>Schedule</Text>
        </Pressable>
      </View>
    </View>
    </>
  );
};

export default DoctorCard; 