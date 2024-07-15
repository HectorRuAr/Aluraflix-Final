import { useState, useEffect } from "react"
import { buscar } from "../API/Index"

const ListaProd = ({ url }) => {
  const [prod, setProd] = useState([])

  useEffect (()  => {
    buscar(url, setProd)   
     console.log(prod)
}, [url])
 
return (

<section>


</section>


)
}

export default ListaProd