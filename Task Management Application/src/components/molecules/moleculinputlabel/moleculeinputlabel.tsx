import { FormControl } from "@chakra-ui/react"
import { MoleculPropsInterface } from "../../../models/moleculeinputforminterface/moleculeinputformnterface"
import FormLabel from "../../atoms/atomlabaels/labelatom"
import Input from "../../atoms/atominputs/inputatom"


const InputForm = ({ type, text, placeholder, value, register, size}: MoleculPropsInterface) => {
    return (
        <FormControl>
            <FormLabel text={text} />
            <Input
                register={register}
                type={type}
                placeholder={placeholder}
                value={value}
                size={size}
                {...register}
            />
        </FormControl>
    )
}

export default InputForm


