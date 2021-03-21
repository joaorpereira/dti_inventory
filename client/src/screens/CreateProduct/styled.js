import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px;
  display: flex;
  width: 100%;
  flex: 1;
  height: calc(100% - 60px);
  flex-direction: column;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 24px 0px 18px;
`
export const Divider = styled.div`
  height: 1px;
  margin-top: -5px;
  background-color: lightgray;
`
