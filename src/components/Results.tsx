import { FunctionComponent } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Result } from "../redux/reducers/search";

type ResultsProps = {
  data: Result[];
};

const Item = ({ data }: { data: Result }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{data.title}</Text>
  </View>
);

const Results: FunctionComponent<ResultsProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Result }) => <Item data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemText: {
    color: "blue",
  },
});

export default Results;
