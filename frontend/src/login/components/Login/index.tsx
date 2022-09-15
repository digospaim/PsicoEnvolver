import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function Login() {

    return (

        <>
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
        </>

    )

}

export default Login