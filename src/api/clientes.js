const url = import.meta.env.VITE_API_URL;

export async function getClientes () {
    const response = await fetch(url);
    const result   = await response.json();
    return result;
}

export async function getCliente (id) {
    const response = await fetch(`${url}/${id}`);
    const result   = await response.json();
    return result;
}

export async function addCliente (datos) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await response.json();
    } catch (error) {
        console.log("🚀 ~ addCliente ~ error", error);
    }
}

export async function updateCliente (id, datos) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        });
        await response.json();
    } catch (error) {
        console.log("🚀 ~ addCliente ~ error", error);
    }
}

export async function destroyCliente (id) {
    try {
        const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
        await response.json();
    } catch (error) {
        console.log("🚀 ~ addCliente ~ error", error);
    }
}