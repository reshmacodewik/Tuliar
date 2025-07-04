/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../style/eventdetailstyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const attendees = [
  { id: 1, image: require('../../../assets/icon/user1.png') },
  { id: 2, image: require('../../../assets/icon/user2.png') }, // Replace with actual image
  { id: 3, image: require('../../../assets/icon/user3.png') },
];

const EventDetailsScreen = () => {
  const { wp, hp } = useResponsive();
  const [showFAQ, setShowFAQ] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);

  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <ScrollView style={themedStyles.container}>
        <View style={themedStyles.innercontainer}>
          <ScrollView>
            <View style={themedStyles.headerContainer}>
              <Image
                source={require('../../../assets/image/eventdetail.png')}
                style={[
                  themedStyles.mainImage,
                  { height: hp(32), width: '95%' },
                ]}
              />

              <View
                style={[
                  themedStyles.backButtonContainer,
                  { top: hp(3), left: wp(5) },
                ]}
              >
                <TouchableOpacity
                  style={themedStyles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={wp(8.5)}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={[themedStyles.moreButton, { top: hp(3), right: wp(5) }]}
              >
                <Ionicons
                  name="alert-circle-outline"
                  size={wp(6)}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
            <View style={themedStyles.contentContainer}>
              <View style={themedStyles.titleRow}>
                <Text style={[themedStyles.title, { fontSize: wp(3.2) }]}>
                  Wellness & Mental Health workshop
                </Text>
                <View style={themedStyles.freeTag}>
                  <Text style={[themedStyles.freeText, { fontSize: wp(3) }]}>
                    Free
                  </Text>
                </View>
              </View>

              <Text style={[themedStyles.dateText, { fontSize: wp(3.5) }]}>
                15th July, 2025
              </Text>
              <Text style={[themedStyles.timeText, { fontSize: wp(3.5) }]}>
                8:00 AM - 10:00 AM
              </Text>

              <View style={[themedStyles.attendanceRow]}>
                {attendees.map((item, index) => (
                  <Image
                    key={item.id}
                    source={item.image}
                    style={[
                      themedStyles.attendeeImage,
                      {
                        width: wp(8),
                        height: wp(8),
                        marginLeft: index === 0 ? 0 : wp(-3), // tighter overlap
                      },
                    ]}
                  />
                ))}
                <Text
                  style={[
                    themedStyles.attendanceText,
                    { fontSize: wp(3.5), marginLeft: wp(2) }, // REMOVE marginLeft here
                  ]}
                >
                  +50 Attendance
                </Text>
              </View>

              <Text style={[themedStyles.sectionTitle, { fontSize: wp(3.8) }]}>
                About
              </Text>
              <Text style={[themedStyles.descriptionText, { fontSize: wp(3) }]}>
                Lorem ipsum dolor sit amet consectetur. Duis ultricies auctor
                risus praesent nisi id a nisi. Non vel malesuada velit dictum
                sed.
              </Text>

              <Text style={[themedStyles.sectionTitle, { fontSize: wp(4) }]}>
                Host Speaker
              </Text>
              <View style={themedStyles.speakerRow}>
                <Image
                  source={require('../../../assets/icon/eventuser.png')}
                  style={[
                    themedStyles.speakerImage,
                    { width: wp(15), height: wp(15) },
                  ]}
                />
                <View style={themedStyles.speakerInfo}>
                  <Text style={[themedStyles.speakerName, { fontSize: wp(4) }]}>
                    John Smith
                  </Text>
                  <Text
                    style={[themedStyles.speakerRole, { fontSize: wp(2.8) }]}
                  >
                    Clinical Psychologist
                  </Text>
                </View>
              </View>

              <Text style={[themedStyles.sectionTitle, { fontSize: wp(4) }]}>
                What will be included
              </Text>

              {[1, 2].map(index => (
                <View style={themedStyles.listItem} key={index}>
                  <Text style={[themedStyles.bulletPoint, { fontSize: wp(4) }]}>
                    •
                  </Text>
                  <Text style={[themedStyles.listText, { fontSize: wp(3) }]}>
                    Lorem ipsum dolor sit amet consectetur. Duis ultricies
                    auctor risus praesent nisi id a nisi.
                  </Text>
                </View>
              ))}
              {/* FAQs Expandable */}
              <TouchableOpacity
                style={themedStyles.accordionHeader}
                onPress={() => setShowFAQ(!showFAQ)}
              >
                <Text
                  style={[themedStyles.accordionTitle, { fontSize: wp(3.8) }]}
                >
                  Frequently Asked Questions
                </Text>
                <Ionicons
                  name={showFAQ ? 'chevron-up' : 'chevron-down'}
                  size={wp(4)}
                  color="#000"
                />
              </TouchableOpacity>

              {showFAQ && (
                <View style={themedStyles.accordionContent}>
                  <Text style={[themedStyles.listText, { fontSize: wp(3) }]}>
                    • Lorem ipsum dolor sit amet consectetur. Duis ultricies
                    auctor risus praesent nisi id a nisi. Non vel malesuada
                    velit dictum sed.
                  </Text>
                  <Text
                    style={[
                      themedStyles.listText,
                      { fontSize: wp(3), marginTop: hp(1) },
                    ]}
                  >
                    • Lorem ipsum dolor sit amet consectetur. Duis ultricies
                    auctor risus praesent nisi id a nisi. Non vel malesuada
                    velit dictum sed.
                  </Text>
                </View>
              )}

              {/* Terms & Conditions Expandable */}
              <TouchableOpacity
                style={themedStyles.accordionHeader}
                onPress={() => setShowTerms(!showTerms)}
              >
                <Text
                  style={[themedStyles.accordionTitle, { fontSize: wp(3.8) }]}
                >
                  Terms & Conditions
                </Text>
                <Ionicons
                  name={showTerms ? 'chevron-up' : 'chevron-down'}
                  size={wp(4)}
                  color="#000"
                />
              </TouchableOpacity>

              {showTerms && (
                <View style={themedStyles.accordionContent}>
                  <Text style={[themedStyles.listText, { fontSize: wp(3) }]}>
                    • Lorem ipsum dolor sit amet consectetur. Duis ultricies
                    auctor risus praesent nisi id a nisi. Non vel malesuada
                    velit dictum sed.
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={themedStyles.registerButton}  onPress={() => navigation.navigate('ReviewPaymentScreen')}>
          <Text style={themedStyles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default EventDetailsScreen;
