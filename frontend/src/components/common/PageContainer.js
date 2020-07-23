import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default PageContainer