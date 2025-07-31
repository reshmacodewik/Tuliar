import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import styles from '../../style/earnPointsStyles';
import { useResponsive } from '../../Responsive/useResponsive';

const EarnPointsScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const videoRef = useRef(null);
  const navigation = useNavigation<NavigationProp<any>>();
    const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);


  const handleVideoProgress = (data: any) => {
    const progressPercent = (data.currentTime / data.duration) * 100;
    setProgress(progressPercent);
  };

  const handleWatchAd = () => {
    console.log('Watch Ad pressed');
    setIsPlaying(true);
    // Simulate progress for now
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 2;
      });
    }, 200);
  };
  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          {/* Header */}
          <View style={s.headerRow}>
            <Pressable onPress={() => navigation.goBack()} style={s.backButton}>
              <MaterialIcons name="keyboard-arrow-left" size={wp(9)} color="black" />
            </Pressable>
            <Text style={s.headerTitle}>AD</Text>
          </View>

          {/* Logo */}
          <View style={s.logoContainer}>
            <Image source={require('../../../assets/image/logo.png')} style={s.logo} />
          </View>

          {/* Title & Subtitle */}
          <Text style={s.title}>Earn Points</Text>
          <Text style={s.subtitle}>Watch short video ads to earn Tuilar points.</Text>
          <Text style={s.conversionRate}>10 points = 1 minute</Text>

          {/* Video Placeholder */}
          <View style={s.videoContainer}>
            {isPlaying ? (
              <Video
                ref={videoRef}
                source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
                style={s.video}
                resizeMode="cover"
                onProgress={handleVideoProgress}
                onEnd={() => setIsPlaying(false)}
                onError={(error) => console.log('Video error:', error)}
                onLoad={(data) => console.log('Video loaded:', data)}
                paused={!isPlaying}
                repeat={false}
              />
            ) : (
              <View style={s.videoPlaceholder}>
                <MaterialIcons name="play-circle-outline" size={wp(15)} color="#fff" />
              </View>
            )}
            
            {/* Progress Bar */}
            <View style={s.progressBarContainer}>
              <View style={[s.progressBar, { width: `${progress}%` }]} />
            </View>
          </View>

          {/* Points Available */}
          <Text style={s.pointsAvailable}>1,240 points available</Text>

          {/* Watch Ad Button */}
          <Pressable style={s.watchAdButton} onPress={handleWatchAd}>
            <Text style={s.watchAdButtonText}>Watch Ad</Text>
          </Pressable>

          {/* Disclaimer */}
          <Text style={s.disclaimer}>
            Earning points helps you reduce the cost of certain services within Tuilar. 
            Availability of ads may vary.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EarnPointsScreen; 