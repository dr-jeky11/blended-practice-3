import { Container, Heading, Section, CountryList, Loader } from 'components';
import { SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const onSubmit = value => {
    setValue(value);
  };
  useEffect(() => {
    if (!value) {
      return;
    }
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchByRegion(value);
        setCountries(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [value]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title={error} bottom />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
