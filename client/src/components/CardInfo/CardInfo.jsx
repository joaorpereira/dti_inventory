import Button from '../Button/Button'
import { Card, Row, RowInfo } from './styled'

const CardInfo = ({ id, name, price, quantity, onDelete, onUpdate }) => {
  return (
    <Card>
      <p>
        <strong>Produto:</strong>
        {` ${name}`}
      </p>
      <Row>
        <RowInfo>
          <p>
            <strong>Quantidade:</strong>
            {` ${quantity}`}
          </p>
        </RowInfo>
        <RowInfo>
          <p>
            <strong>Preço:</strong>
            {` R$ ${price}`}
          </p>
        </RowInfo>
        <RowInfo>
          <Button onClick={() => onUpdate(id)} color='editar'>
            Editar
          </Button>
          <Button onClick={() => onDelete(id)}>Deletar</Button>
        </RowInfo>
      </Row>
    </Card>
  )
}

export default CardInfo
