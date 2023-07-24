import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
//import DocumentPicker, { types } from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState([]);
  const ar = [];

  /*
  // react native
  const handleDocumentSelection = useCallback(async () => {
    try{
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
        allowMultiSelection: true,
      })
      setFiles(response);
    } catch(err){
      Alert.alert(err.toString());
      console.log(err);
    }
  }, []);
  */

  // expo
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      multiple: true,
      copyToCacheDirectory: true

    });
    if(result.type === 'success'){
      console.log(result.name);
    }
    else{
      return ;
    }
  }

  const imagePick = async () => {
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //allowsEditing: true,
        //aspect: [4, 9.9],
        quality: 1,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        for (const i in result.assets) {
          ar[i] = result.assets[i].uri;
          //setImage([result.assets[i].uri]);
        }
        setImage(ar);

      }
      else{
        return ;
      }
    }catch(err){
      console.log(err);
    }
  }

  const imagePickFromCamera = async () => {
    try{
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //allowsEditing: true,
        //aspect: [4, 9.9],
        quality: 1,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        for (const i in result.assets) {
          ar[i] = result.assets[i].uri;
          //setImage([result.assets[i].uri]);
        }
        setImage(ar);

      }
      else{
        return ;
      }
    }catch(err){
      console.log(err);
    }
  }



  return (
    <View style={styles.container}>
      <Text>Document Picker</Text>
      {
        image.map((file, index) => (
          <Text 
            key={index.toString()}
            numberOfLines = {1}
            ellipsizeMode = {'middle'} >
              {
              //file?.uri
              file
              }
          </Text>
        ))
      }
      <View style={styles.btnPick}>
        <Button title="Select Document 📑" onPress={pickFile} />
      </View>
      <View style={styles.btnPick}>
        <Button title="Select Image 📑" onPress={imagePick} />
      </View>
      <View style={styles.btnPick}>
        <Button title="Select Image From Camera 📑" onPress={imagePickFromCamera} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPick: {
    marginTop: 10
  }
});
