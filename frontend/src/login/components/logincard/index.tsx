import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import './styles.css'

function LoginCard() {

    return (

        <>
            <div>
                <div className="psicoenvolver-container-login">
                    <div>
                        <img id="logo" src="https://psicoenvolver.com.br/wp-content/uploads/2022/05/logotipo-psicoenvolver-2022-verde.svg" alt="Logo Psicoenvolver" />
                    </div>
                    <div className="login mt-5">
                        <div className="imgFamilia">
                            <img src="https://psicoenvolver.com.br/wp-content/uploads/2021/12/familia-clinica-multidisciplinar-alvorada-2.png" alt="Familia" />
                        </div>
                        <div>
                            <form action="Login" method="post" className="mb-3">
                                <div className="input-group mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        name="userLogin"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id="floatingPassword"
                                        name="passwordLogin"
                                    />
                                </div>
                                <div className="float-right">
                                    <Button
                                        variant="primary"
                                        name="submit"
                                    >Logar</Button>{' '}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footerLogin">
                    <p>	&copy; 2022 PsicoEnvolver. Todos os direitos reservados.</p>
                </div>
            </div>
        </>

    )

}

export default LoginCard