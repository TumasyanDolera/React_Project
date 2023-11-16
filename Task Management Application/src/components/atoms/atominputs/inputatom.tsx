import { Input as ChakraInput } from "@chakra-ui/react";
import { InputPropsInterface } from "../../../models/inputpropsinterface/inputpropstinterface";

const Input = ({ type, placeholder, value, register, size}: InputPropsInterface) => {
    return (
        <ChakraInput
            type={type}
            placeholder={placeholder}
            value={value}
            size={size}
            {...register}
        />

    )
}

export default Input