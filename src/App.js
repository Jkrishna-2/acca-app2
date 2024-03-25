import React, {useState} from 'react'

import Header from './Header'

import Section from './Section'
import CallBackModal from './CallBackModal'
import './styles.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Header />
      <Section
        title='Become ACCA In 18 months'
        content='ACCA gives a career edge, sought after in finance and accounting. Complements higher qualifications and values practical experience.'
      />

      <Section
        title='Why choose us'
        content='Our ACCA programme is designed and curated by industry experts in such a way that it will help you to prepare for and pass the exams in shortest span of time.'
      />
      <Section
        title='ACCA – Eligibility'
        content='There is no specific admission procedure, there is no entrance exam as such for ACCA. Any student who has completed their +2 or any graduate can get entry into ACCA.'
      />
      <Section
        title='What will you learn In ACCA?'
        content='The coaching will cover various topics such as Financial Accounting,Business Accounting,Taxation,Performance Management,Management Accounting,Corporate and Business Law,Audit and Assurance,Financial Reporting.'
      />
      <Section
        title='100% Placement Assistance'
        content='Our ACCA professional course enhances your career prospects. Join our coaching centres for online classes, best coaching, certification, and affordable fees. Develop your skills through our integrated courses and excel in the finance industry.'
      />
      <Section
        title='Kick off your ACCA Prep journey with IndigoLearn'
        content='My faculty play a huge role in getting the rank. Very sure that, If I did not take up these classes, I would not have scored this much. heard about Lakshya from my friends, who already classes Show less assured were me the really good.'
      />

      <div className='text-center d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={handleShowModal}>
          Request Call Back
        </button>
      </div>
      <CallBackModal show={showModal} handleClose={handleCloseModal} />
    </>
  )
}

export default App
