import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Icon, ScrollView, SearchIcon } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const cardsData = [
  { title: 'Gmail', url: require('../../../../core/assets/gmail.png') },
  { title: 'Tinder', url: require('../../../../core/assets/tinder.png') },
  { title: 'Spotify', url: require('../../../../core/assets/spotify.png') },
  { title: 'Drive', url: require('../../../../core/assets/google_drive.png') },
  { title: 'Reddit', url: require('../../../../core/assets/reddit.png') },
  { title: 'Twitter', url: require('../../../../core/assets/X.png') },
  { title: 'Calendar', url: require('../../../../core/assets/google_calendar.png') },
  { title: 'Google', url: require('../../../../core/assets/google.png') },
  { title: 'Signal', url: require('../../../../core/assets/signal.png') },
  { title: 'Weather', url: require('../../../../core/assets/weater.png') },
  { title: 'WhatsApp', url: require('../../../../core/assets/whatApps.png') },
  { title: 'Youtube', url: require('../../../../core/assets/ytb.png') },
];

const SearchBar = ({ onChangeText, value }: { onChangeText: Function; value: string }) => {
  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Rechercher..."
        onChangeText={query => {
          onChangeText(query); // Mettre à jour le texte de recherche via la fonction de mise à jour reçue en props
        }}
        value={value} // Utiliser la valeur reçue en props
      />
      <TouchableOpacity onPress={() => onChangeText(value)}>
        <View style={{ backgroundColor: '#613EEA', borderRadius: 50, padding: 6, marginRight: 10 }}>
          <Icon as={SearchIcon} size="lg" color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Cards = ({ title, url }: { title: string; url: any }) => {
  const navigation: any = useNavigation();

  const handleDetails = () => {
    console.log('clicked with ' + title);
    navigation.navigate('ServiceDetailScreen', { title });
  };

  return (
    <TouchableOpacity onPress={handleDetails} style={styles.cards}>
      <Image style={{ width: '60%', height: '50%' }} source={url} />
      <Text style={{ fontFamily: 'Inter', fontSize: 16, color: 'black', fontWeight: '800', marginTop: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const ServicesScreen = () => {
  const [filteredCards, setFilteredCards] = useState(cardsData); // État pour les cartes filtrées
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Filtrer les cartes en fonction du texte de recherche
    const filtered = cardsData.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredCards(filtered);
  }, [searchText]);

  return (
    <View style={{ alignItems: 'center' }}>
      <SearchBar onChangeText={setSearchText} value={searchText} />
      <ScrollView contentContainerStyle={[styles.cardsContainer]}>
        {filteredCards.map((data, index) => (
          <Cards key={index} title={data.title} url={data.url} />
        ))}
        <View style={{ height: 100, width: 1000 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    backgroundColor: '#FFF',
    borderColor: '#E5E7EB',
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 16,
    fontFamily: 'Inter',
    paddingLeft: 30,
    marginTop: 10,
    color: 'black',
  },
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 150,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ServicesScreen;
