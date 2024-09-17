import collectionsData from '../assets/collectionsData.json';
import { Box, Typography, Grid, Link, Card, CardContent, CardMedia } from '@mui/material';
import { PageTemplate } from './PageTemplate';

export const Collections = () => {
  return (
    <PageTemplate>
      <Grid container spacing={2}>
        {Object.values(collectionsData).map((collection) => (
          <Grid item xs={12} key={collection.id}>
            <Card>
              <Grid container alignItems="center">
                <Grid item xs={12} md={4}>
                  <CardMedia component="img" src={collection.logo} alt="logo" style={{ width: '50%', margin: '0 auto' }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Typography variant="h4">{collection.name}</Typography>
                    <Typography paragraph align="justify">
                      {collection.text}
                    </Typography>
                    <Box display="flex" flexDirection="column">
                      <Typography paragraph>
                        <b>Project Homepage: </b>
                        <Link href={collection.project_homepage} target="_blank" rel="noopener noreferrer">
                          {collection.project_homepage}
                        </Link>
                      </Typography>
                      <Typography paragraph>
                        <b>Domain-specific terminology service: </b>
                        <Link href={collection.domain_ts_link} target="_blank" rel="noopener noreferrer">
                          {collection.domain_ts_link}
                        </Link>
                      </Typography>
                      <Typography paragraph>
                        <b>Ontologies: </b>
                        {/* {collectionOntologies[collectionId] || ''} */}
                      </Typography>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageTemplate>
  );
};
