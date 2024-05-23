import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ParticipantProps {
  name: string;
  onRemove: (data: string) => void;
}

export default function Participant(props: ParticipantProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => props.onRemove(props.name)}
        >
          <Text 
            style={styles.buttonText}
          >
            -
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFFF',
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 24,
  },
});

