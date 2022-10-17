import ImgError from '../assets/error_img.png';
import { Link, useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();

    return (
        <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 rounded-lg">
            <div className="max-w-max mx-auto">
                <main className="sm:flex sm:items-center">
                    <img src={ImgError} className="text-4xl font-extrabold text-indigo-600 sm:text-5xl" />
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Hubo un error !</h1>
                            <p className="mt-4 text-base text-gray-500">{error.statusText || error.message}</p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <Link
                                to='/'
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Regresar al Home
                            </Link>
                            <a
                                to='/'
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Contactar a Soporte
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Error