import styled from 'styled-components'

export const RoombedHeader = styled.div`
    font-size: 36px;
    font-weight: bolder;
    font-family: 'Open Sans';
    text-align: center;
    background: ${ ({ background }) => background};
    padding: 50px 0px;
    color: ${ ({ color }) => color};
`