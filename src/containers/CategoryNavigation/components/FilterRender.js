import React from "react";
import { 
  View,
  FlatList,
  Text,
  Image
} from "react-native";

export default function FilterRender({ data, display }) {
  return (
    <FlatList
      style={{
        flex: 1
      }}

      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={{
            flex: 1,
            flexDirection: 'row', 
            width: display.width,
            height: display.height/4,
            backgroundColor: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            shadowColor: '#000',
            elevation: 15
          }}>
            <View style={{flex: .3, backgroundColor: '#f00'}}>
              <Image
                source={item.image}
              />
            </View>
            <View style={{flex: .7, backgroundColor: '#ff0'}}>

            </View>
          </View>
        );
      }}
    />
  );
}