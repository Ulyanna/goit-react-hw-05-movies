import styled from '@emotion/styled'


export const Wrapper = styled.div`
/* padding: 15px; */
padding-top: 20px;
padding-bottom: 30px;
`

export const Button = styled.button`
  padding:10px;
  border-radius:8px;
  border: 1px solid rgba(136, 136, 136, 0.353);
  margin-left: 20px;
  background-color: white;
  outline: none;
   &:hover{
    color: white;
    background-color: rgb(255, 94, 0);
   }
`
export const Input = styled.input`
  padding:10px;
  border-radius:8px;
  border: 1px solid rgba(136, 136, 136, 0.353);
  width: 20%;

  &:hover,:active {
  border: 1px solid #aaa;
  outline: none;
  
}
&:focus-visible{
outline: none;
border: 1px solid rgb(255, 94, 0);
}
`