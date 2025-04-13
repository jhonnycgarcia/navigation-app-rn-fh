import { Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { Text } from 'react-native-gesture-handler';

interface Props {
    onPress?: () => void;
    label: string;
}

export const PrimaryButton = ({ onPress, label }: Props) => {
  return (
    <Pressable
        style={globalStyles.primaryButton}
        onPress={() => onPress && onPress()}
      >
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
  );
};
