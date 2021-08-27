import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/userSlice'
import './Login.css'



/* Import images */
import Logo from '../../images/Logo.png'
import Ilustracion from '../../images/illustration.svg'
    
    export const Login = () => {
        const [user,setUser] = useState("")
        const [pass,setPass] = useState("")

        const dispatch = useDispatch();

        const handleSubmit = (e) => {
            e.preventDefault();

            dispatch(login({
                user: user,
                pass:pass,
                loggedIn: true
            }))
        }
        
        return (
        <div class="login">
        <div class="container sm:px-10">
            <div class="block xl:grid grid-cols-2 gap-4">
                <div class="hidden xl:flex flex-col min-h-screen">
                    <a href="" class="-intro-x flex items-center pt-5">
                        <img alt="Icewall Tailwind HTML Admin Template" class="w-30" src={Logo} />
                    </a>
                    <div class="my-auto">
                        <img alt="Icewall Tailwind HTML Admin Template" class="-intro-x w-1/2 -mt-16" src={Ilustracion} />
                        <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            A few more clicks to 
                            <br/>
                            sign in to your account.
                        </div>
                        <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
                    </div>
                </div>

                <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Iniciar sesion
                        </h2>
                        <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                        <div class="intro-x mt-8">
                            <input type="text" class="intro-x login__input form-control py-3 px-4 border-gray-300 block" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
                            <input type="password" class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} />
                        </div>
                        <div class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                            <div class="flex items-center mr-auto">
                                <input id="remember-me" type="checkbox" class="form-check-input border mr-2" />
                                <label class="cursor-pointer select-none" for="remember-me">Recuerdame</label>
                            </div>
                            <a href="">¿Olvidaste tu contraseña?</a> 
                        </div>
                        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Iniciar sesion</button>
                        </div>
                        </form>
                        <div class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
                            By signin up, you agree to our 
                            <br /> 
                            <a class="text-theme-17 dark:text-gray-300" href="">Terms and Conditions</a> y <a class="text-theme-17 dark:text-gray-300" href="">Privacy Policy</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-url="login-dark-login.html" class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div class="dark-mode-switcher__toggle border"></div>
        </div>

            <script src="../../dist/globaljs.js"></script>
        </div>

        )
    }
    
