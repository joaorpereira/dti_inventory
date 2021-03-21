import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardInfo from '../../components/CardInfo/CardInfo'
import Button from '../../components/Button/Button'
import { Row } from './styled'

import {
  requestProductsList,
  requestRemoveProduct,
} from '../../store/modules/Products/actions'
import { Container, Box } from './styled'
import { useHistory } from 'react-router'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { products, loading } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(requestProductsList())
  }, [dispatch])

  const handleDelete = id => {
    dispatch(requestRemoveProduct(id))
  }

  const handleUpdate = async id => {}
  return (
    <Container>
      <Row>
        <h1>Meu Estoque</h1>
        <Button color='cadastrar' onClick={() => history.push('/cadastrar')}>
          Cadastrar
        </Button>
      </Row>
      <Box>
        {!loading ? (
          products.map((item, index) => (
            <CardInfo
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Container>
  )
}

export default Home
