import Titulo from "../Titulo/Titulo";

const Formulario = () =>{
    return (
<>

{/* Con strings no hace falta poner {LLAVES} */}

{/* <Titulo titulo ={'Completa el formulario con tu email'} subTitulo=''/> */}
<form className="form-control"><input type="text" /></form>
<button>Enviar</button>


</>
)
}

export default Formulario