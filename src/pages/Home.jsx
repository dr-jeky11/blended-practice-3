import { Container, CountryList, Heading, Section, Loader } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await getCountries();
        setCountries(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title={error} bottom />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
