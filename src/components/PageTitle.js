import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2em' : '3em')};
  font-family: 'Tungsten Rounded A', 'Tungsten Rounded B', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
