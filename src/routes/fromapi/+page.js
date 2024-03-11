
export async function load({ fetch }) {
    const res = await fetch(`http://localhost:3000/containers`);
    const as_obj = await res.json();
    //console.log({as_obj});
    return as_obj;
}
