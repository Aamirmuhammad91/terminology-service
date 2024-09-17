import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { PageTemplate } from './PageTemplate';

const StyledListItemText = styled(ListItemText)({
  margin: 0,
  padding: 0,
  '& > *': {
    margin: 0,
  },
});

const StyledListItem = styled(ListItem)({
  padding: '4px 12px', // Adjust the padding to increase/decrease the space between the bullets and text
});

export const About = () => {
  return (
    <PageTemplate>
      <Box>
        <Typography variant="h5">What is TIB Terminology Service?</Typography>
        <Typography paragraph>
          TIB Terminology Service is an open source, free of charge web service hosted by{' '}
          <Link href="https://www.tib.eu/de/">TIB – Leibniz Information Centre for Science and Technology and University Library.</Link>
        </Typography>
        <Typography paragraph>TIB Terminology Service intends to be your one-stop-shop for terminology search, browsing and look-up. In particular, it enables you to:</Typography>
        <List>
          <StyledListItem>
            <StyledListItemText primary="Access the latest versions of the most relevant terminologies from chemistry, engineering, architecture and many more domains." />
          </StyledListItem>
          <StyledListItem>
            <StyledListItemText primary="Explore domain knowledge via concept hierarchies, find synonyms or translations of terms, look up definitions and retrieve a concept’s persistent identifier." />
          </StyledListItem>
          <StyledListItem>
            <StyledListItemText primary="Use TIB Terminology Service data (JSON) in your own service or application via REST API." />
          </StyledListItem>
          <StyledListItem>
            <StyledListItemText primary="Publish your own terminology on TIB Terminology Service." />
          </StyledListItem>
        </List>
        <Typography variant="h5">Roadmap</Typography>
        <Typography paragraph>TIB Terminology Service is still under development. In the future, more contents and functionality will be added, e.g.</Typography>
        <List>
          <StyledListItem>
            <StyledListItemText primary="further general-purpose and domain terminologies," />
          </StyledListItem>
          <StyledListItem>
            <StyledListItemText primary="tools for the collaborative creation of terminologies (e.g. versioning system, online editor)" />
          </StyledListItem>
          <StyledListItem>
            <StyledListItemText primary="a help-desk to assist the user community in the curation of terminologies." />
          </StyledListItem>
        </List>
      </Box>
    </PageTemplate>
  );
};
