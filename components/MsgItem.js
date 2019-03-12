//Libraries Imports
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MsgItem = ({ message }) => {
  const { contenu, tag, likes, dislikes } = message;
  const { containerStyle, contenuMessageStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => console.log('Navigue')}>
        <Text style={contenuMessageStyle}>{contenu}</Text>
        <Text>
          Catégorie : {tag}
        </Text>
        <Text>likes : {likes}, dislikes : {dislikes}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  contenuMessageStyle: {
    fontFamily: 'aller',
    fontSize: 30
  }
};

export default MsgItem;
