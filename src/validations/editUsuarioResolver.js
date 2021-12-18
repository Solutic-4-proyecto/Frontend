import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema =yup.object().shape({
    name:yup
        .string("LEl Nombre debe ser un texto")
        .required("Debe ingresar un nombre"),
    email:yup
        .string()
        .email("Debe ingresar un email valido")
        .required("Dene Ingresar su email"),
    identificacion:yup
        .string()
        .required("Debe Ingresar su Identicicación")
     
})

export default yupResolver(schema)