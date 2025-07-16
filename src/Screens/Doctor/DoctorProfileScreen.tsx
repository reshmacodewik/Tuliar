/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import getStyles from '../../style/DoctorProfileStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/Mystack';

const DoctorProfileScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'DoctorProfileScreen'>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')} // Use your background image
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Sticky Header */}
      <View
        style={[
          styles.header,
          { paddingTop: hp(6), paddingBottom: hp(-4), paddingHorizontal: wp(5) },
        ]}
      >
         <TouchableOpacity
                   style={styles.backButton}
                   onPress={() => navigation.goBack()}
                 >
                   <MaterialIcons
                     name="keyboard-arrow-left"
                     size={wp(8.5)}
                     color="#000"
                   />
                 </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flex: 1, marginTop: hp(0) }}
        contentContainerStyle={{
          paddingHorizontal: wp(5),
          paddingBottom: hp(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../../assets/image/doc1.png')} // Use your doctor image
            style={{
              width: wp(20),
              height: wp(20),
              borderRadius: wp(10),
              marginTop: hp(2),
            }}
          />
          <Text style={[styles.name, { fontSize: wp(5), marginTop: hp(1) }]}>
            Dr. John Smith
          </Text>
          <Text style={[styles.subtitle, { fontSize: wp(3.5) }]}>
            Clinical Psychologist & CBT Specialist
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E5',
              width: '100%', // or '100%' or a fixed value
              alignSelf: 'center', // to center the divider
              marginVertical: hp(0),
            }}
          />
          <Text style={{ fontSize: wp(3.5), marginVertical: hp(1) }}>
            Sessions Completed: <Text style={{ fontWeight: 'bold' }}>770+</Text>
          </Text>
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Board Certified</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>10+ yrs. of experience</Text>
            </View>
          </View>
          <View style={[styles.chip, { marginTop: hp(1) }]}>
            <Text style={styles.chipText}>Multi Location Practices</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
            width: '100%', // or '100%' or a fixed value
            alignSelf: 'center', // to center the divider
            marginVertical: hp(1),
          }}
        />
        <View>
          <Text
            style={[
              styles.sectionTitle,
              { fontSize: wp(4.2), marginTop: hp(0) },
            ]}
          >
            Know the therapist
          </Text>
          <Text style={[styles.bodyText, { fontSize: wp(3.2) }]}>
            Lorem ipsum dolor sit amet consectetur. Ut sit quam curabitur
            feugiat ac nisi in...Lorem ipsum dolor sit amet consectetur. Ut sit
            quam curabitur feugiat ac nisi in...
          </Text>
          <View style={{ marginHorizontal: wp(3) }}>
            {/* Languages */}
            <View style={styles.infoRow}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../../assets/icon/language.png')}
                  style={{ width: wp(6), height: wp(6), resizeMode: 'contain' }}
                />
              </View>
              <View>
                <Text style={styles.infoTitle}>Languages</Text>
                <Text style={styles.infoContent}>Swahili, English</Text>
              </View>
            </View>

            {/* Concerns */}
            <View style={styles.infoRow}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../../assets/icon/doc-clipboard.png')}
                  style={{ width: wp(6), height: wp(6), resizeMode: 'contain' }}
                />
              </View>
              <View>
                <Text style={styles.infoTitle}>Common Concerns Addressed</Text>
                <View style={styles.chipColumn}>
                  <View style={styles.chipOutline}>
                    <Text style={styles.chipTextOutline}>
                      Anxiety and stress management
                    </Text>
                  </View>
                  <View style={styles.chipOutline}>
                    <Text style={styles.chipTextOutline}>Self-esteem issues</Text>
                  </View>
                  <View style={styles.chipOutline}>
                    <Text style={styles.chipTextOutline}>Trauma Recovery</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Proficiency */}
            <View style={styles.infoRow}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../../assets/icon/skills.png')}
                  style={{ width: wp(6), height: wp(6), resizeMode: 'contain' }}
                />
              </View>
              <Text style={styles.infoTitle}>Proficiency</Text>
            </View>
            <View style={{marginHorizontal: wp(15),marginTop:hp(-3)}}>
              <Text style={styles.infoContent}>
                • Cognitive Behaviour therapy{'\n'}• trauma-informed
                counseling{'\n'}• mindfulness-based stress reduction
              </Text>
            </View>
          </View>
        </View>

        {/* Book Appointment Button */}
        <View
          style={[
            styles.buttonContainer,
            { padding: wp(5), paddingBottom: hp(3) },
          ]}
        >
          <TouchableOpacity
            style={[styles.button, { height: hp(6), borderRadius: wp(10) }]}
            onPress={() => navigation.navigate("BookAppointment")}
          >
            <Text style={{ color: '#fff', fontSize: wp(4.5), fontWeight: 'bold' }}>
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default DoctorProfileScreen;
