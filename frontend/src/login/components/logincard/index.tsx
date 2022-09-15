import './styles.css'
import Login from '../Login'

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
                            <Login />
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