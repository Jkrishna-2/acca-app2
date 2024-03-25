import React from 'react'

const Section = ({title, content}) => {
  return (
    <section className='py-5'>
      <div className='container'>
        <h2 className='title'>{title}</h2>
        <p className='content'>{content}</p>
      </div>
    </section>
  )
}

export default Section
