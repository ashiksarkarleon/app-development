import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { ImageManipulator } from 'expo-image-crop';
import { SafeAreaView, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, LogBox } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import img from './assets/icon.png';

export default function App() {

  LogBox.ignoreAllLogs();

  const [image, setImage] = useState([]);
  const [cImage, setCImage] = useState([]);
  const [currentEditImageIndex, setCurrentEditImageIndex] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [imgUri, setImgUri] = useState();
  const ar = [];
  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  //const { width, height } = Dimensions.get('window');

  const onToggleModal = () => {
    setIsVisible(!isVisible);
  }

  const uri = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80';

  const pickImage = async () => {
    //const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    //const { status } = await MediaLibrary.requestPermissionsAsync();
    const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status.granted){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
      });
      if(!result.canceled){

        for(const i in image){
          ar.push(image[i]);
        }

        for(const i in result.assets){
          //ar[i] = result.assets[i].uri;
          ar.push(result.assets[i].uri);
        }

        setImage(ar);
        
      }
    }
  }

  const editImage = async (data, index) => {
    await setCurrentEditImageIndex(index);
    await setImgUri(data);
    await onToggleModal();
    
    console.log(imgUri + ' ' + index);

  }

  /*
    <View style={styles.fileName}>
        {image.map((file, index) => (
          <Text
            key={index.toString()}
            numberOfLines={1}
            ellipsizeMode='middle'>
              {file}
          </Text>
        ))}
      </View>
  */

  /*
    <ImageManipulator 
      photo = {{uri}}
      isVisible = {isVisible}
      onToggleModal = {onToggleModal}
    />
  */

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={image}
        renderItem={({item, index}) => (
          <View style={styles.imageView}>
            <TouchableOpacity 
              onPress={() => editImage(item, index)}>
                <Image style={styles.imageThumbnail}
                  source={{ uri: item }} />
              </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        key={(item, index) => index}
        />
      <View style={styles.btnView1}>
        <View style={styles.btnView2}>
          <TouchableOpacity
            style={styles.btnAddImage}
            onPress={pickImage}>
              <Text style={styles.btnAddImageText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />

      <ImageManipulator 
        photo = {{uri: imgUri}}
        isVisible = {isVisible}
        onToggleModal = {onToggleModal}
        onPictureChoosed = {({uri: imgU}) => setImage(image.map((value, i) => i === currentEditImageIndex ? imgU : value))}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  imageView: {
    flex: 1,
    flexDirection: 'column',
    margin: 5
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    borderRadius: 10
  },
  btnView1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: 55,
    right: 30,
  },
  btnView2: {
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  btnAddImage: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center'

  },
  btnAddImageText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});
