const Prueba = [
  {id: 1, name: "pruebamapeo1", tipo: "aaaa" },
  {id: 2, name: "pruebamapeo2", tipo: "bbbb" },
];



const FooterList = (props) => {
  return (
    <div>
      <ul className="flex flex-col content-start justify-start mt-8">
        <h2 className="mb-6">{props.title}</h2>
        <li><a href="#">{props.id1}</a></li>
        <li><a href="#">{props.id2}</a></li>
        <li><a href="#">{props.id3}</a></li>
        <li><a href="#">{props.id4}</a></li>
        <li><a href="#">{props.id5}</a></li>
      </ul>
    </div>
  )
}

export default FooterList