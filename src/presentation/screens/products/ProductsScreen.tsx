import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
  { id: 5, name: 'Product 5', price: 500 },
  { id: 6, name: 'Product 6', price: 600 },
];

export const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Products</Text>
      <FlatList
        data={products}
        renderItem={
          ({ item }) =>
            <PrimaryButton
              label={item.name}
              onPress={() => navigation.navigate('Product' as never)}
            />
        }
      />

      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
      <PrimaryButton
        label="Go to Setting"
        onPress={() => navigation.navigate('Setting' as never)}
      />
    </View>
  );
};
