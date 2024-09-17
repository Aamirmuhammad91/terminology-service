import React from 'react';
import { PageTemplate } from './PageTemplate';
import { getAllCollectionsIds } from '../api/fetchData';

export const Ontologies = () => {
  const data = getAllCollectionsIds();
  console.log(data);
  return (
    <PageTemplate>
      <div>Ontologies</div>
    </PageTemplate>
  );
};
