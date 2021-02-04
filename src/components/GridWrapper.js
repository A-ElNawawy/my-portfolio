import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  justify-items: center;
  row-gap: 35px;
  @media (min-width: 830px){
    &{
      justify-content: space-between;
    }
  }
  @media (min-width: 830px) and (max-width: 1229px){
    &{
      grid-template-columns: repeat(2, 49%);
    }
  }
  @media (min-width: 1230px){
    &{
      grid-template-columns: repeat(3, 32.5%);
    }
  }
`;

export default GridWrapper;