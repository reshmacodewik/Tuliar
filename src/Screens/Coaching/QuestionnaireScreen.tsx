/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView} from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/questionnaireStyles';
import { RootStackParamList } from '../../Navigation/Mystack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const QUESTIONS = [
  {
    question: 'What would you like support with?',
    options: [
      'Career growth',
      'Life Transitions',
      'Academic Success',
      'Confidence Building',
      'Business/entrepreneurship',
      'Leadership Development',
      'Work-life Balance',
      'Stress Management',
    ],
    multi: true,
  },
  {
    question: 'What would you like support with?',
    options: [
      'Direct and goal-oriented',
      'Empathetic and supportive',
      'Structured ith assignments',
      'Open and conversation',
    ],
    multi: true,
  },
  {
    question: 'What do you hope to achieve from this experience',
    options: ['Coach', 'Mentor', 'Not sure yet'],
    multi: false,
  },
  {
    question: 'Would you prefer a coach or a mentor?',
    options: ['Coach', 'Mentor', 'Not sure yet'],
    multi: false,
  },
  {
    question: 'When are you most available for sessions?',
    options: ['Mornings', 'Afternoons', 'Evenings'],
    multi: true,
  },
];

const QuestionnaireScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const [answers, setAnswers] = useState<any>({});
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const toggleOption = (qIdx: number, oIdx: number, multi: boolean) => {
    setAnswers((prev: any) => {
      if (multi) {
        const arr = prev[qIdx] || [];
        if (arr.includes(oIdx)) {
          return { ...prev, [qIdx]: arr.filter((i: number) => i !== oIdx) };
        } else {
          return { ...prev, [qIdx]: [...arr, oIdx] };
        }
      } else {
        return { ...prev, [qIdx]: oIdx };
      }
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          <View style={s.innercontainer}>
            <Pressable onPress={() => navigation.goBack()} style={{ marginRight: wp(2),marginTop:hp(0.8) }}>
                <MaterialIcons name="keyboard-arrow-left" size={34} color="black" />
            </Pressable>
            <Text style={s.header}>Let’s Get to know You</Text>
          </View>
          <Text style={s.subheader}>Help us match you with the right coach or mentor.</Text>
          <View style={s.card}>
            {QUESTIONS.map((q, qIdx) => (
              <View key={qIdx} style={{ marginBottom: hp(2.5) }}>
                <Text style={s.question}>{qIdx + 1}. {q.question}</Text>
                <View style={s.optionsRow}>
                  {q.options.map((opt, oIdx) => {
                    const selected = q.multi
                      ? (answers[qIdx] || []).includes(oIdx)
                      : answers[qIdx] === oIdx;
                    return (
                      <Pressable
                        key={oIdx}
                        style={[s.optionBox, selected && s.optionBoxSelected]}
                        onPress={() => toggleOption(qIdx, oIdx, q.multi)}
                      >
                        <View style={[s.optionCheck, selected && s.optionCheckSelected]}>
                          {selected ? <View style={s.optionCheckInner} /> : null}
                        </View>
                        <Text style={s.optionLabel}>{opt}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            ))}
          </View>
          <View style={s.buttonContainer}>
            <Pressable style={s.button} onPress={() => navigation.navigate('Subscription')}>
              <Text style={s.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuestionnaireScreen; 