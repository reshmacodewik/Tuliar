import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const wp = (percent: number) => (width * percent) / 100;
  const hp = (percent: number) => (height * percent) / 100;

  return { wp, hp };
};
