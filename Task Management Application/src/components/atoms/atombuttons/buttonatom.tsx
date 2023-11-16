import { Button as ChakraButton } from "@chakra-ui/react"
import { ButtonPropsInterface } from "../../../models/buttonpropsinerface/buttonpropsinterface"


const Button = ({type,value,color,size,bg}:ButtonPropsInterface) => {
    return(
        <>
        <ChakraButton
            type = {type}
            value = {value}
            color = {color}
            size = {size}
            bg = {bg}
            >
       </ChakraButton>
        </>
    )
}

export default Button