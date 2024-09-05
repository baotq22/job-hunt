import React from 'react'
import { useParams } from 'react-router-dom';
import jobList from "./assets/json/job.json";
import { Box, Chip, Stack, Typography } from '@mui/material';

function Details() {
  const {jobId} = useParams();
  const job = jobList.find((job) => job.id === jobId);

  if (!job) {
    return <div>Job not exist</div>
  }


  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>{job.title}</Typography>
      <Typography variant="h6" color="text.secondary">{job.city}</Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>{job.description}</Typography>
      
      <Typography variant="body2" color="text.secondary">
        Posted Date: {new Date(job.postedDate).toLocaleDateString()}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Salary: ${job.salaryLow} - ${job.salaryHigh}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Years of Experience Expected: {job.yrsXPExpected}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Remote: {job.remote ? "Yes" : "No"}
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {job.skills.map((skill, index) => (
          <Chip key={index} label={skill} />
        ))}
      </Stack>
    </Box>
  )
}

export default Details