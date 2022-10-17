import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { getCliente, updateCliente } from "../api/clientes";
import Error from "../components/Error";
import Formulario from "../components/Formulario";

export async function loader({ params }) {
    const { uid } = params;
    const cliente = await getCliente(uid);
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El cliente no fue encontrado...'
        });
    }
    return cliente;
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');
  
    const errores = [];
    if (Object.values(datos).includes('')) { errores.push('Todos los campos son Obligatorios!') };
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) { errores.push('El correo electrónico no es válido!') }
    if (Object.keys(errores).length) { return errores };
  
    await updateCliente(params.uid, datos);
  
    return redirect('/');
  
  }

const EditarCliente = () => {

    const errores = useActionData();
    const navigate = useNavigate();
    const cliente = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Llena todos los campos para modificar el cliente</p>

            <div className="flex justify-end">
                <button onClick={() => navigate(-1)} className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-lg cursor-pointer">Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form method="post" autoComplete="off">
                    <Formulario cliente={cliente} />

                    <input type="submit" className="mt-5 w-full bg-blue-500 p-3 uppercase font-bold text-white text-lg" value="Modificar Cliente" />
                </Form>

            </div>

        </>
    )
}

export default EditarCliente