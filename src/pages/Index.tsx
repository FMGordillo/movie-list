import { StatusBar } from "expo-status-bar";
import { FunctionComponent, useRef } from "react";
import type { TextInput } from "react-native";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";
import { useLazyGetBySearchQuery } from "../redux/reducers/search";

const IndexPage: FunctionComponent = () => {
  const inputRef = useRef<TextInput>(null);
  const [search, results] = useLazyGetBySearchQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    search(searchTerm);
    inputRef.current && inputRef.current.blur();
  };

  return (
    <View style={[styles.justify, styles.container]}>
      <View style={styles.searchContainer}>
        <Text>Hello</Text>
        <Text>Search your favorite series or movies</Text>
        <SearchInput
          ref={inputRef}
          value={searchTerm}
          setValue={setSearchTerm}
        />
        <Button
          disabled={results.isLoading || results.isFetching}
          title="Search"
          onPress={handleSearch}
        />
      </View>
      <View style={styles.resultsContainer}>
        {results.data?.results && results.data.results.length > 0 && (
          <Results data={results.data.results} />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  justify: {
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchContainer: {
    flex: 0.4,
    justifyContent: "center",
  },
  resultsContainer: {
    justifyContent: "flex-start",
    flex: 0.6,
  },
});

export default IndexPage;
