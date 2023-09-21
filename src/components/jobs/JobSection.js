import React from 'react'
import './JobSection.css'

import wrapper1 from "../../assets/jobs.jpg";

const JobSection = () => {
    return (
        <>



<div className="jobs-container">


      <div className='jobs-header container'>
          
          <h1>The Importance of Employment in Recovery</h1>

          <p>Recovering from substance abuse is a significant achievement that opens the door to a brighter future. Part of this journey often involves rebuilding your life, and a crucial aspect of that is finding stable employment. Gainful employment not only provides financial stability but also plays a vital role in maintaining your recovery by promoting structure, purpose, and a sense of accomplishment.</p>  
            
          <p>Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.</p>

      </div>



        <div className="wrapper-content container">
          <div className="jobs-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="jobs-right">
            <h1>The Importance of Employment in Recovery</h1>

            <p>1. <b>Structure and Routine</b>: Employment gives you a daily schedule, which can help replace the unstructured time that may have previously been a trigger for substance use.</p>

            <p>2. <b>Financial Stability</b>: A steady income reduces financial stress, making it easier to meet your basic needs and reducing the risk of relapse due to financial strain.</p>

            <p>3. <b>Enhanced Self-Esteem</b>: Being productive and contributing to your workplace can boost your self-esteem and sense of self-worth, crucial for long-term recovery.</p>

            <p>4. <b> Social Connection</b>: The workplace provides an opportunity to connect with colleagues and build a support network outside of your recovery community.</p>
          </div>
        </div>

        <div className='jobs-header container'>

            <h1>Job Assistance Services</h1>

            <p>1. <b>Resume Building</b>: Assistance with creating or updating your resume to showcase your skills, experience, and any relevant education or certifications.</p>

            <p>2. <b> Job Search Support:</b>: Guidance on where and how to search for job openings, both online and offline.</p>

            <p>3. <b>Interview Preparation</b>: Practice interviews and coaching to help you feel confident and prepared when meeting potential employers.</p>

            <p>4. <b>Skill Development</b>: Access to training and skill development programs that can enhance your qualifications and job prospects.</p>

            <p>5. <b>Job Placement</b>: Assistance with finding suitable job openings and, in some cases, direct job placement services.</p>

            <div className='job-link'>
            <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>
            </div>


        </div>




      </div>

        </>
    )
}

export default JobSection
