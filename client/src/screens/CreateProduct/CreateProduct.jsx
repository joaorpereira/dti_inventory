import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import { toast } from 'react-toastify'

import Input from '../../components/Input/Input'
import { Container, Divider, Row } from './styled'
import { requestCreateProduct } from '../../store/modules/Products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const { success } = useSelector(state => state.products)

  const handleForm = e => {
    e.preventDefault()
    if (!name && !quantity && !price) {
      return toast.error('Campos nome, quantidade e preço são obrigatórios')
    }
    const body = { name, quantity, price }
    if (body) {
      dispatch(requestCreateProduct(body))
      if (success) {
        history.push('/home')
      }
    }
  }

  return (
    <Container>
      <Row>
        <h1>Cadastrar Produto</h1>
      </Row>
      <Form onSubmit={e => handleForm(e)}>
        <Input
          type={'text'}
          name={'name'}
          label={'Nome:'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Divider />
        <Input
          type={'number'}
          name={'quantity'}
          label={'Quantidade:'}
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <Divider />
        <Input
          type={'number'}
          name={'price'}
          label={'Preço:'}
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Divider />
      </Form>
    </Container>
  )
}

export default CreateProduct
