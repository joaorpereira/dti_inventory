import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px;
  display: flex;
  width: 100%;
  flex: 1;
  height: calc(100% - 60px);
  flex-direction: column;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 24rem;
  height: 24rem;
  margin-top: 1rem;
  color: ${props => props.theme.colors.black};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 10px;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px 0px 18px;
`

export const Button = styled.button`
  text-transform: uppercase;
  margin: 0 5px;
  font-weight: bold;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  transition: 0.3s;
  background-color: ${props =>
    props.color === 'editar'
      ? props.theme.colors.info
      : props.color === 'cadastrar'
      ? props.theme.colors.success
      : props.theme.colors.warning};
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`
