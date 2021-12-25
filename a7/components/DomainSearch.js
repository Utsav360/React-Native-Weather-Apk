// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// DomainSearch : Shows fetching the domain names from domain site via using domain parameters along with API implementation...

// import all the  libraries & components we are going to use/...
import React, { useState } from 'react';
import { Button, Text, TextInput, FlatList, View } from 'react-native';

function DomainSearch() {
  const [domains, setDomains] = useState([]);
  const [domain, setDomain] = useState('');

  // uses the search term in the input textbox as an argument to this API:
  //    https://domainsdb.info/
  async function getSearchResults()
  {
    try {
      const response = await fetch('https://api.domainsdb.info/v1/domains/search?domain=' + domain);
      const json = await response.json();

      // sets the array of domains to the array of domains returned by the API
      setDomains(json.domains);
    } catch (error) { console.error(error); }   
  }

  // displays the domains returned from the API in a FlatList
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'space-between'}}>
            <h2>Find Domain Name Here:</h2>
        <TextInput
        style={{height: 30}}
        placeholder="domain@abc.com"
        onChangeText={domain => setDomain(domain)}
        /> <br/>
        <Button onPress={getSearchResults} title="Search"  />
        <FlatList
            data={domains}
            renderItem={({item}) => <Text>{item.domain}</Text>}
            keyExtractor={item => item.domain} />
    </View>
  );
};

// export DomainSearch...

export default DomainSearch;