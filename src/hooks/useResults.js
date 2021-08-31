import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMassage, setRerrorMassage] = useState('');

  useEffect(() => {
    searchApi('pasta')
  }, [])

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'Saint-Petersburg'
        }
      });
      setResults(response.data.businesses);
      setRerrorMassage('');
    } catch(err) {
      console.log(err);
      setRerrorMassage('Something wrong');
    }
  };

  return [searchApi, results, errorMassage]
}