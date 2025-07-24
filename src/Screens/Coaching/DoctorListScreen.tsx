import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/doctorListStyles';
import DoctorCard from '../../components/DoctorCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../../Navigation/Mystack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const doctors = [
  {
    name: 'Emily Chen',
    exp: 'Exp: 5+ years',
    avatar: require('../../../assets/image/maskuser.png'),
    prices: ['KES 1500', 'KES 1500', 'KES 2000'],
    icons: [
      require('../../../assets/image/phone.png'),
      require('../../../assets/image/greenvideo.png'),
      require('../../../assets/image/message.png'),
    ],
  },
  {
    name: 'Michael Kim',
    exp: 'Exp: 5+ years',
    avatar: require('../../../assets/image/user2.png'),
    prices: ['KES 1500', 'KES 1500', 'KES 2000'],
    icons: [
      require('../../../assets/image/phone.png'),
      require('../../../assets/image/greenvideo.png'),
      require('../../../assets/image/message.png'),
    ],
  },
  {
    name: 'Emily Chen',
    exp: 'Exp: 5+ years',
    avatar: require('../../../assets/image/maskuser.png'),
    prices: ['KES 1500', 'KES 1500', 'KES 2000'],
    icons: [
      require('../../../assets/image/phone.png'),
      require('../../../assets/image/greenvideo.png'),
      require('../../../assets/image/message.png'),
    ],
  },
  {
    name: 'Michael Kim',
    exp: 'Exp: 5+ years',
    avatar: require('../../../assets/image/user2.png'),
    prices: ['KES 1500', 'KES 1500', 'KES 2000'],
    icons: [
      require('../../../assets/image/phone.png'),
      require('../../../assets/image/greenvideo.png'),
      require('../../../assets/image/message.png'),
    ],
  },
  {
    name: 'Emily Chen',
    exp: 'Exp: 5+ years',
    avatar: require('../../../assets/image/maskuser.png'),
    prices: ['KES 1500', 'KES 1500', 'KES 2000'],
    icons: [
      require('../../../assets/image/phone.png'),
      require('../../../assets/image/greenvideo.png'),
      require('../../../assets/image/message.png'),
    ],
  },
];

const DoctorListScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.container}>
          <View style={s.headerContainer}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginRight: wp(2), marginTop: hp(0.8) }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="black"
              />
            </Pressable>
          </View>

          <Image
            source={require('../../../assets/image/logo.png')}
            style={s.logo}
          />
          <Text style={s.header}>Doctors</Text>
          <View style={s.row}>
            {doctors.map((doc, idx) => (
            <View style={s.column50} key={idx}>
              <DoctorCard
                name={doc.name}
                exp={doc.exp}
                avatar={doc.avatar}
                icons={doc.icons}
                prices={doc.prices}
                selected={idx === 0}
                onViewProfile={() => navigation.navigate({ name: 'DoctorProfileScreen', params: undefined })}
                onSchedule={() => navigation.navigate({ name: 'BookAppointment', params: undefined })}
              />
            </View>
            ))}
          </View>
          {/* <View style={s.grid}>
            {doctors.map((doc, idx) => (
              <DoctorCard
                key={idx}
                name={doc.name}
                exp={doc.exp}
                avatar={doc.avatar}
                icons={doc.icons}
                prices={doc.prices}
                selected={idx === 0}
                onViewProfile={() => {}}
                onSchedule={() => {}}
              />
            ))}
          </View> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default DoctorListScreen;
