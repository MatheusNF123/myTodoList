import * as C from "./Message.styles"

const Message = ({registerComSucesso, messages}) => {
  return (
    <C.Container registerComSucesso={registerComSucesso}>
      <h4>Cadastro realizado com sucesso!</h4>
    </C.Container>
  )
}

export default Message