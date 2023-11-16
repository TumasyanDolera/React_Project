import InputForm from "../../molecules/moleculinputlabel/moleculeinputlabel";
import {
    Box,
    FormControl,
    Stack,
    Icon,
    Button,
    Flex,
    Avatar,
    // chakra, 
    Heading,
    InputGroup,
    FormHelperText,
    InputRightElement,
    // InputLeftElement,

} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignInFormInterface } from "../../../models/signinformeinterface/signinforminterface";
import { useColorModeValue } from "@chakra-ui/react";
// import { FaUserAlt, FaLock } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);


const SignIn = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm<SignInFormInterface>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<SignInFormInterface> = (data) => {
        alert(JSON.stringify(data))
        reset()
    };
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="95vh"
            bg={useColorModeValue("purple.200", "black.300")}
            color={useColorModeValue("purple", "purple")}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="5"
                justifyContent="center"
                alignItems="center"

            >
                <Avatar bg="purple.500" />
                <Heading color="purple">Welcome</Heading>
                <Box minW={{ base: "90%", md: "500px" }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            spacing={4}
                            p="3rem"
                            bg={useColorModeValue("purple.200", "gray.800")}
                            boxShadow="2xl"
                        >
                            <FormControl>
                                <InputGroup>
                                    {/* <InputLeftElement pointerEvents="none">
                      <CFaUserAlt color="purple.300"/>
                    </InputLeftElement> */}
                                    <InputForm
                                        text="Email"
                                        type="email"
                                        placeholder="Enter your email *"
                                        size='lg'
                                        register={{
                                            ...register("email", {
                                                required: "Email is required ! ",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Pleace enter valid email !"
                                                }
                                            })
                                        }}
                                    />
                                </InputGroup>
                                <Box color='red'>{errors?.email && errors.email.message}</Box>
                            </FormControl>
                            <FormControl>
                                <InputGroup color={"purple"}>
                                    {/* <InputLeftElement
                      pointerEvents="none"
                      children={<CFaLock color="purple.300" />}
                      height="7rem"
                           /> */}
                                    <InputForm
                                        text="Password"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password *"
                                        size='lg'
                                        register={{
                                            ...register("password", {
                                                required: "Password is required !",
                                                pattern: {
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                    message: "Password must have minimum eight characters, one letter and one number!"
                                                }
                                            })
                                        }}
                                    />
                                    <InputRightElement width="4.5rem" height="7rem">
                                        <Button h="1.75rem" onClick={togglePasswordVisiblity} bg={useColorModeValue("purple.200", "black.300")}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'>{errors?.password && errors.password.message}</Box>
                                <FormHelperText textAlign="right">
                                    <Link to="">forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="purple"
                                width="full"
                            >
                                Sign In
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                Don't have an account yet?
                <Link to="/register" color="teal.500" >
                    Register
                </Link>
            </Box>
        </Flex>
    );
};

export default SignIn