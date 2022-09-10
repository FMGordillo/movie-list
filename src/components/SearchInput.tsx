import { forwardRef } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchInputProps = {
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
};

const SearchInput = forwardRef<any, SearchInputProps>(
  ({ value, setValue, placeholder = "Search" }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    padding: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default SearchInput;
