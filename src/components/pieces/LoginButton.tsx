import React from "react"
import styled from "styled-components"

const LoginButton: React.FC<{}> = ({ children }) => {
  return (
    <StyledButton
      type="button"
      className="font-medium rounded-full text-sm text-center mr-2 mb-2 transition duration-300"
    >
      {children}
    </StyledButton>
  )
}

export default LoginButton

const StyledButton = styled.button`
  background-image: linear-gradient(
    to bottom right,
    #2ab4ff,
    #6fccff
  ) !important;
  color: white;
  padding: 0 2rem !important;
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      #3392e1,
      #00a5ff
    ) !important;
  }
  &:active {
    background-image: none;
    background: white !important;
    color: #00a2fb;
  }
`
