import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import Participant from "@/components/Participant/Participant";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if(participantName == "") {
      return Alert.alert("Nome do participante", "Digite o nome do participante.");
    }
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Alice já está na lista de presença.");
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        }
      ]
    );
  }

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.eventName}
      >
        Nome do evento
      </Text>
      <Text
        style={styles.eventDate}
      >
        Quinta, 23 de Maio de 2024.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant name={item} onRemove={handleParticipantRemove} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguem chegou no evento ainda? Adicione os participantes a sua lista de presença.
            </Text>
          )
          }
        />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: '#FFFF',
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 42,
  },
  participantText: {
    color: '#FFFF',
    fontSize: 16,
  },
  listEmptyText: {
    color: '#FFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
