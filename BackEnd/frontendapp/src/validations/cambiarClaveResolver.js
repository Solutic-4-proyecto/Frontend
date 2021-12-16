import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema =yup.object().shape({
    password:yup
        .string("La contraseña debe ser un texto")
        .required("Debe ingresar una constraseña")
        .min(6,"La contraseña debe tener al menos 6 caracteres")
})

export default yupResolver(schema)