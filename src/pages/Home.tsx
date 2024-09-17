import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { PageTemplate } from './PageTemplate';

const collectionsData: { [key: string]: Collection } = require('../assets/collectionsData.json');

const MAX_WORDS = 16;

type Collection = {
  id: string;
  html_id: string;
  name: string;
  text: string;
  logo: string;
  ontology_list_url: string;
  project_homepage: string;
  domain_ts_link: string;
};

export const Home = () => {
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);

  const toggleExpansion = (id: string) => {
    setExpandedCollection(expandedCollection === id ? null : id);
  };

  return (
    <PageTemplate>
      <Typography variant="h4">TIB Terminology Service</Typography>
      <Typography style={{ textAlign: 'justify' }} gutterBottom>
        With the Terminology Service, TIB – Leibniz Information Centre for Science and Technology and University Library provides a single point of access to terminologies from domains such as
        architecture, chemistry, computer science, mathematics, and physics. You can browse ontologies through the website or use its API to retrieve terminological information and use it in your
        technical services.
      </Typography>
      <br />
      <Typography variant="h4">Collections</Typography>
      <Grid container spacing={3}>
        {Object.values(collectionsData).map((collection) => (
          <Grid item xs={12} sm={6} md={4} key={collection.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={collection.logo} alt={collection.name} style={{ height: '200px', width: '200px' }} />
                </Box>
                <Typography variant="body2" style={{ textAlign: 'justify' }}>
                  {expandedCollection === collection.id ? collection.text : `${collection.text.split(' ').slice(0, MAX_WORDS).join(' ')}...`}
                  {collection.text.split(' ').length > MAX_WORDS && (
                    <Button color="primary" onClick={() => toggleExpansion(collection.id)}>
                      {expandedCollection === collection.id ? 'Read less' : 'Read more'}
                    </Button>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageTemplate>
  );
};
