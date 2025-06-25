import React from 'react';
import './JobsPostForm.css';

const JobPostForm = () => {
  return (
    <section className="job-post-form">
      <h3>You Have a Job for Us? Post it <span>Here!</span></h3>
      <form>
        <input type="text" placeholder="Job Title" />
        <textarea placeholder="Description"></textarea>
        <input type="text" placeholder="Location" />
        <input type="date" />
        <div className="job-type">
          <label><input type="radio" name="type" /> Repair</label>
          <label><input type="radio" name="type" /> Fitting</label>
          <label><input type="radio" name="type" /> Emergency</label>
        </div>
        <button type="submit">SEND JOB</button>
      </form>
    </section>
  );
};

export default JobPostForm;
