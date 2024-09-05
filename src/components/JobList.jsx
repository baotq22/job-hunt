import React from 'react'
import jobList from "../assets/json/job.json"
import Cards from './Cards'

function JobList() {
  return (
    <>
      {jobList.map((job) => (
        <>
          <Cards title={job.title} description={job.description} tags={job.skills} id={job.id}/>
        </>
      ))}
    </>
  )
}

export default JobList