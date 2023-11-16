import { FormLabel as ChakraFormLabel} from "@chakra-ui/react";
import { LabelForminterface } from "../../../models/labelpropsinterface/labelpropsinterface";

const FormLabel = ({text}:LabelForminterface) => {
    return(
        <>
        <ChakraFormLabel>{text}</ChakraFormLabel>
        </>
    )
}

export default FormLabel