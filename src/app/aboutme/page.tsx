import Foto from '../../../public/foto.jpg'
import Image from 'next/image'

const Aboutme = () => {
  return (
    <>

      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  Sobre mi
                </h2>

                <p>
                  Desarrollador web innovador, proactivo y con capacidad para desarrollar páginas web elegantes y diseños de aplicaciones para clientes exigentes.
                  Organizado y con capacidad de multitarea con experiencia en programación de proyectos, mejora de diseños y verificación del código.
                  Habilidades de desarrollo web para una posición estimulante en una compañía moderna, abierta y profesional.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">


          <Image
            src={Foto}
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div
                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                
                <Image
                  src="https://www.svgrepo.com/show/374680/goals.svg"
                  alt="Picture of the user"
                  width={30}
                  height={30}
                />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Aspiraciones profesionales
              </p>
            </dt>
            <div className="mt-2 ml-16 text-base text-gray-500">
            
              <li>
                Ya llevo varios años como desarrollador y quiero dar el paso en convertirme en un arquitrecto de software.
              </li>
            </div>
          </div>
          <div className="relative">
            <dt>
              <div
                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
               
                <Image
                  src="https://www.svgrepo.com/show/483947/achievement-1.svg"
                  alt="Picture of the user"
                  width={30}
                  height={30}
                />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Metas
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              <ul>
                <li>
                  <strong>Corto plazo: </strong>
                  Actualmente, estoy enfocado en aprender ingles, espero lograr un buen nivel en algunos meses.
                </li>
                <li>
                  <strong>Mediano plazo: </strong>
                 Quiero hacer mi casa propia.
                </li>
                <li>
                  <strong>Largo plazo: </strong>
                  Me gustaria emprender mi propio negocio.
                </li>
              </ul>
            </dd>
          </div>


        </dl>
      </div>

    </>
  )
}


export default Aboutme;