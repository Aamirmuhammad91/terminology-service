import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCollections = async () => {
  const url = process.env.REACT_APP_COLLECTION_IDS_BASE_URL;
  const { data } = await axios.get(url);
  return data._embedded.strings;
};

const fetchCollectionStats = async (collection) => {
  const statsBaseUrl = process.env.REACT_APP_STATS_API_URL;
  const statsUrl = `${statsBaseUrl}byclassification?schema=collection&classification=${collection}`;
  const { data } = await axios.get(statsUrl);
  return data.numberOfOntologies;
};

const getCollectionOntologies = async (collections, exclusive) => {
  const OntologiesBaseServiceUrl = process.env.REACT_APP_API_BASE_URL;
  const ontologiesCount = 100000;
  let targetUrl = `${OntologiesBaseServiceUrl}/filterby?schema=collection&page=0&size=${ontologiesCount}&exclusive=${exclusive}&`;
  const queryParams = collections
    .filter((col) => col !== '')
    .map((col) => `classification=${encodeURIComponent(col)}`)
    .join('&');
  targetUrl += queryParams;

  try {
    const response = await axios.get(targetUrl);
    return response.data._embedded.ontologies;
  } catch (error) {
    console.error('Error fetching collection ontologies:', error);
    return [];
  }
};

const getAllCollectionsIds = async (withStats = true) => {
  try {
    const collections = await fetchCollections();
    const result = await Promise.all(
      collections.map(async (col) => {
        const ontologiesCountForCollection = withStats ? await fetchCollectionStats(col.content) : 0;
        const collectionOntologies = await getCollectionOntologies([col.content], false);
        const collectionOntologiesIds = collectionOntologies.map((onto) => onto.ontologyId.toUpperCase());
        return {
          collection: col.content,
          ontologiesCount: ontologiesCountForCollection,
          ontologies: collectionOntologiesIds,
        };
      })
    );
    return result;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const useAllCollectionsIds = (withStats = true) => {
  return useQuery('allCollectionsIds', () => getAllCollectionsIds(withStats));
};

export { useAllCollectionsIds, getCollectionOntologies, getAllCollectionsIds };
