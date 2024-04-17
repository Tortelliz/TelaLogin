import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de olho fechado também
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

library.add(faEye, faEyeSlash); // Adicione o ícone de olho fechado à biblioteca de ícones

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        };
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    render() {
        return (
            <div className="login-container">
                <div className="container h-100 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="bg-gradient rounded p-4 mt-5">
                            <img className="mb-4 mx-auto d-block" src={logo} alt="" width="120" height="110" />
                            <h1 className="h3 mb-3 fw-normal text-white">Realize seu login!</h1>
                            <form>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control form-control-md" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput" className="form-label form-label-small">Endereço de e-mail</label>
                                </div>
                                <div className="form-floating mb-4 position-relative">
                                    <input 
                                        type={this.state.showPassword ? "text" : "password"} 
                                        className="form-control form-control-md" 
                                        id="floatingPassword" 
                                        placeholder="Password" 
                                    />
                                    <label htmlFor="floatingPassword" className="form-label form-label-small">Senha</label>
                                    <FontAwesomeIcon 
                                        icon={this.state.showPassword ? ["fas", "eye"] : ["fas", "eye-slash"]} // Altere o ícone com base no estado
                                        className={`position-absolute end-2 top-50 translate-middle-y text-muted ${this.state.showPassword ? 'eye-open' : 'eye-closed'}`} // Adicione classes com base no estado
                                        style={{cursor: 'pointer', fontSize: '1.50em', right: '10px'}}
                                        onClick={this.togglePasswordVisibility}
                                    />
                                </div>
                                <div className="form-check text-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                        Lembrar-me
                                    </label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-purple w-50 py-2 button-with-border text-white" type="submit">Entrar</button>
                                </div>
                                <div className="text-white mt-4">
                                    <h6>Já é cadastrado?</h6>
                                    <h6>Caso ainda não seja, <a href="#" className="text-decoration-none text-purple">Crie sua conta</a></h6>
                                </div>
                                <div className="space mb-5"></div>
                                <div className="rights text-white-50 text-center">
                                    <h1 className="h6 mb-1 fw-normal">Trinity Technology Solutions Incorporation - TTS Inc.</h1>
                                    <p className="text-white-50">© 2024 Todos os direitos reservados.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;