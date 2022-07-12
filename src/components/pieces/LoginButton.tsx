import React from "react"
import styled from "styled-components"

const LoginButton: React.FC<{}> = ({ children }) => {
  return (
    <StyledButton type="button" className="rounded-full text-center">
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
  font-size: 16px;
  font-weight: 400 !important;
  letter-spacing: 0.6px;
  color: white;
  margin: 0;
  padding: 7px 2.75rem !important;
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
