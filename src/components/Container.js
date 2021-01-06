import styled from 'styled-components';

const Container = styled.div`
  margin: 30px auto;
  width: 97%;
  display: grid;
  justify-content: center;
  justify-items: center;
  row-gap: 25px;
  &.grid{
    @media (min-width: 720px){
      &{
        justify-content: space-between;
      }
    }
    @media (min-width: 720px) and (max-width: 1000px){
      &{
        grid-template-columns: repeat(2, 49%);
      }
    }
    @media (min-width: 1001px){
      &{
        grid-template-columns: repeat(3, 32.5%);
      }
    }
  }
`;
export default Container;