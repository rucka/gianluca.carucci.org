import React from 'react'
import styled from 'styled-components'

type CallToActionProperties = { text: string; onClick?: () => void }

export function CallToAction({ text, onClick }: CallToActionProperties) {
  return (
    <CallToActionLink onClick={onClick}>
      <span>
        {text}
        <span></span>
      </span>
    </CallToActionLink>
  )
}

const CallToActionLink = styled.a`
  color: ${(p) => p.theme.secondaryColor};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  margin-top: 1.42rem;
  padding-right: 1.42rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  span {
    display: inline-block;
    margin-top: -5px;
    span {
      height: 1px;
      margin-left: 1.4rem;
      position: relative;
      width: 7rem;

      &:after {
        content: '';
        position: absolute;

        opacity: 0.2;
        top: -4px;
        left: 0;
        width: 100%;

        height: 1px;
        background-color: ${(p) => p.theme.secondaryColor};

        transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      }
    }
  }

  &:hover {
    span {
      &:after {
        opacity: 1;
        width: 50%;
      }
    }
  }
`