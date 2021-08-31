import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/resultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMassage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price)
  }
  
  return <> 
    <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}/> 
    <Text>{errorMassage}</Text>
    <ScrollView>
      <ResultList results={filterResultsByPrice('$')} title="Cost Efctive"/>
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Bit Spender"/>
    </ScrollView>
  </>
};

const styles = StyleSheet.create({

});

export default SearchScreen;