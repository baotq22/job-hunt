import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Cards({ title, description, tags, id }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 480, maxHeight: 280, marginBottom: '20px' }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ flexDirection: 'column' }}
        >
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
            {title}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          {tags.map((tag) => (
            <>
              <Chip label={tag} size="small" />
            </>
          ))}
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Link to={`/details/${id}`}>
          <Button variant="contained">Learn More</Button>
        </Link>
      </Box>
    </Card>
  )
}

export default Cards