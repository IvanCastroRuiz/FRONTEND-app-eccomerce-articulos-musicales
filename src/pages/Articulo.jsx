import { Link } from 'react-router-dom';

const Articulo = ({producto}) => {

  const { _id, nombre, descripcion, precio, imagen  } = producto;

  return (
    <div key={producto._id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={imagen.url}
                alt={nombre}
                className="object-containt h-100 w-220 m-auto"
            />
       </div>

       <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-xl text-gray-900">
                <Link 
                    to={`/detalle-articulo/${_id}`}
                >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {nombre}
                </Link>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
            </div>
            <p className="text-xl text-gray-900 font-bold">${precio}</p>
        </div>
    </div>
  )
}

export default Articulo