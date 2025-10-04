import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/MyJourneyScreen';
import CustomHeader from '../../components/CustomHeader';

const MyJourneyScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <ScrollView contentContainerStyle={themedStyles.container}>
        {/* Header */}
        {/* <View style={themedStyles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={themedStyles.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={themedStyles.title}>My Journey</Text>
        </View> */}
        <CustomHeader title="My Journey" onBack={() => navigation.goBack()} />
        {/* Image Card */}
        <View style={themedStyles.card}>
          <Image
            source={require('../../Theme/assets/image/image.png')}
            style={themedStyles.sessionImage}
          />
          <View style={themedStyles.cardContent}>
            <Text style={themedStyles.sessionTitle}>Therapy</Text>
            <Text style={themedStyles.nextSessionText}>
              Next Session with Dr. on April 25 at 10:00 AM
            </Text>
          </View>
        </View>

        {/* Session Details */}
        <View style={themedStyles.sessionDetailsCard}>
          <Text style={themedStyles.sessionDetailsTitle}>Session Details</Text>
          <Text style={themedStyles.sessionDetailsText}>
            <Text style={themedStyles.boldLabel}>Mode: </Text> Video Call (Zoom)
          </Text>
          <Text style={themedStyles.sessionDetailsText}>
            <Text style={themedStyles.boldLabel}>Duration: </Text> 60 min
          </Text>
          <Text style={themedStyles.sessionDetailsText}>
            <Text style={themedStyles.boldLabel}>Date & Time: </Text> March 15,
            2024, at 4:00 PM
          </Text>
        </View>

        {/* Session Progress */}
        <View style={themedStyles.progressCard}>
          <Text style={themedStyles.sessionDetailsTitle}>
            Session Up-til now
          </Text>
          <Text style={themedStyles.sessionDetailsText}>
            <Text style={themedStyles.boldLabel}>Completed: </Text>5
          </Text>
          <Text style={themedStyles.sessionDetailsText}>
            <Text style={themedStyles.boldLabel}>Remaining: </Text>2
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MyJourneyScreen;
