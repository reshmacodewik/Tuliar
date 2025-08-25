import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './HelpScreenStyles';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const helpItems = [
  {
    title: 'Dummy Title',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    expanded: true,
  },
  ...Array(6).fill({ title: 'Dummy Title', 
     description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
     expanded:false}),
];

const HelpScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [items, setItems] = useState(helpItems);

  const toggleItem = (index: number) => {
    setItems(prev =>
      prev.map((it, i) =>
        i === index ? { ...it, expanded: !it.expanded } : { ...it, expanded: false }
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Help</Text>
        </View>
      {items.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <TouchableOpacity style={styles.cardRow} onPress={() => toggleItem(idx)}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.plusIcon}>{item.expanded ? '−' : '+'}</Text>
          </TouchableOpacity>
          {item.expanded && (
            <Text style={styles.cardDesc}>{item.description}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default HelpScreen;