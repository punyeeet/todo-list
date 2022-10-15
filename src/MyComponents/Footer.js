import React from 'react';

export const Footer = () => {
  let footerStyle={
    position: "relative",
    bottom: "0",
      top: "40vh",
    width: "100%",
    height:"10vh",
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
    <p className='text-center'>
      Copyright &copy; MyTodoList.com
    </p>
    </footer>
  )
}
