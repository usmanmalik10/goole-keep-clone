import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p> copyriht ©  {year} </p>
      </footer>
    </>
  )
}

export default Footer
