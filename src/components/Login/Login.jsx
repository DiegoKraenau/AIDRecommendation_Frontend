import styles from './_login.module.scss';
import doctorLogin from '../../img/img-login4.svg';
import { Link } from 'react-router-dom';
import abslogin from '../../img/abslogin.svg';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/userDucks';
import { useForm } from 'react-hook-form';
import { React, useState, useEffect } from 'react';
import '../../sass/styles.scss';



const Login = () => {

    const dispatch = useDispatch()
    const { register, errors, handleSubmit } = useForm()
    const [user, setUser] = useState(
        {
            "Usuario": '',
            "Contraseña": ''
        }
    )


    const onSubmit = (data, e) => {
        console.log(user)
        dispatch(loginAction())
    }

    /*Validations */

    const onChange = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value.replace(/[^a-z, A-Z\s]/gi, "")
            }
        )
    };

    const onChangeAll = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    };


    useEffect(() => {
        // console.log("afdñkasñlf")
    }, [])



    return (
        <section className={`${styles.login} flex flex-jc-c flex-ai-c`}>
            <img className={`${styles.abs_img}`} src={abslogin} alt="abs"></img>
            <section className={`${styles.login__content}`}>
                <div className={`${styles.login__content__left}`}>
                    <div className={`${styles.login_text}`}>
                        <p>Bienvenido a</p>
                        <p>AID RECOMMENDATION</p>
                    </div>
                    <div className={`${styles.login_img}`}>
                        <img src={doctorLogin} alt="login-img"></img>
                    </div>
                    <div className={`${styles.login_description}`}>
                        <p>Somos una aplicación web dedicada a las consultas médicas a través de la recolección de información de las historas médicas de los pacientes para que así estos puedan brindarle una mejor información sobre qué es lo que se busca en el momento a los doctores</p>
                    </div>
                </div>
                <div className={`${styles.login__content__right} flex flex-jc-c flex-ai-c`}>
                    <form className={`${styles.login_form}`} onSubmit={handleSubmit(onSubmit)}>
                        <h2>Log in</h2>
                        <div className={`${styles.input} input_format`}>
                            <span>Usuario</span>
                            <input
                                name="Usuario"
                                placeholder="Ingrese un usuario"
                                autoComplete="off"
                                ref={
                                    register({
                                        required: { value: true, message: 'Necesitas un usuario' },
                                        minLength: { value: 6, message: '6 letras minimas' }
                                    })
                                }
                                className={`${errors.Usuario?.message ? 'input-invalid' : ''}`}
                                value={user.Usuario}
                                onChange={(e) => onChange(e)}
                            ></input>
                            <div className="error-message">{errors.Usuario?.message}</div>
                        </div>
                        <div className={`${styles.input} input_format`}>
                            <span>Contraseña</span>
                            <input
                                name="Contraseña"
                                type="password"
                                placeholder="Ingrese una contraseña"
                                autoComplete="off"
                                ref={
                                    register({
                                        required: { value: true, message: 'Necesitas una contraseña' },
                                        minLength: { value: 4, message: '4 letras minimas' }
                                    })
                                }
                                className={`${errors.Contraseña?.message ? 'input-invalid' : ''}`}
                                value={user.Contraseña}
                                onChange={(e) => { onChangeAll(e) }}
                            ></input>
                            <div className="error-message">{errors.Contraseña?.message}</div>
                        </div>
                        <button type="submit" className="button">Log in</button>
                        <p>Si no tienes una cuenta , <Link to="/register">click aquí</Link></p>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Login;