import Card from "../CardExploration/Card"
import "./homeExploration.css"

const datos = [
  {
    id: 'li-1',
    name: 'Linea de Investigacion 1',
    autor: 'Autor 1',
    href: '#',
    description: "for businesses that are serious about optimizing their workflow, and want to get the most out of our product.",
    featured: false,
  },
  {
    id: 'li-2',
    name: 'Linea de Investigacion 2',
    autor: 'Autor 1',
    href: '#',
    description: "for businesses that are serious about optimizing their workflow, and want to get the most out of our product.",
    featured: true,
  },
  {
    id: 'li-3',
    name: 'Linea de Investigacion 3',
    autor: 'Autor 1',
    href: '#',
    description: "for businesses that are serious about optimizing their workflow, and want to get the most out of our product.",
    featured: false,
  },
]


export default function HomeExploration() {
  return (
    <div className=" relative  outline-none border-0 isolate px-6 py-14 sm:py-32 lg:px-8  mt-[-10%]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="custom-color text-base/7 font-semibold  custom-animation-start-text">Novedades</h2>
        <p className="custom-color mt-2 text-4xl font-semibold tracking-tight text-balance  sm:text-5xl custom-animation-start-text">
          Nuevas Lineas de Investigacion
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 sm:grid-cols-3 lg:max-w-4xl lg:grid-cols-3 gap-y-6 sm:gap-y-0 h-120">
        {datos.map((lineaInv) => <Card key={lineaInv.id} {...lineaInv} />)}
      </div>
    </div>
  )
}
