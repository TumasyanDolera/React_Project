import InputForm from "../../molecules/moleculinputlabel/moleculeinputlabel";
import { Box, Button, FormControl } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInterface } from "../../../models/registerformeinterface/registerforminterface";
import { Icon, Text, Stack, Flex, Heading, InputGroup, HStack, InputRightElement, } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"
import { useColorModeValue } from "@chakra-ui/react";

const RagisterForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
        watch,
    } = useForm<FormInterface>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<FormInterface> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    const confirmPassword = watch("confirmPassword");
    const password = watch("password");


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue("purple.200", "black.300")}
            color={useColorModeValue("purple", "purple")}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'} color={useColorModeValue("purple", "white")} fontWeight={800}>
                            Register
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue("purple.200", "gray.800")}
                        boxShadow='2xl'
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired >
                                        <InputForm
                                            text="First Name"
                                            type="text"
                                            placeholder="Enter your name *"
                                            size="md"
                                            register={{
                                                ...register("firstName", {
                                                    required: true,
                                                })
                                            }}
                                        />
                                    </FormControl>
                                    <Box color='red'> {errors?.firstName && "Name is required !"}</Box>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <InputForm
                                            text="Last Name"
                                            type="text"
                                            placeholder="Enter your last name *"
                                            size="md"
                                            register={{
                                                ...register("lastName", {
                                                    required: "Last Name is required !"
                                                })
                                            }}
                                        />
                                    </FormControl>
                                    <Box color='red'>{errors?.lastName && "Last Name is required !"}</Box>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <InputForm
                                    text="Email"
                                    type="email"
                                    placeholder="Enter your email *"
                                    size="md"
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
                                <Box color='red'> {errors?.email && errors.email.message}</Box>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <InputGroup>
                                    <InputForm
                                        text="Password"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password *"
                                        size="md"
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
                                    <InputRightElement h={'full'} height="6.5rem">
                                        <Button
                                            variant={'ghost'}
                                            onClick={togglePasswordVisiblity}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'>{errors?.password && errors.password.message}</Box>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <InputGroup>
                                    <InputForm
                                        text="Confirm Password"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder=" Confirm *"
                                        size="md"
                                        value={confirmPassword}
                                        register={{
                                            ...register("confirmPassword", {
                                                required: true,
                                                validate: (value) =>
                                                    value === password || "Passwords do not match!"
                                            })
                                        }}
                                    />
                                    <InputRightElement h={'full'} height="6.5rem">
                                        <Button
                                            variant={'ghost'}
                                            onClick={togglePasswordVisiblity}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'> {errors?.confirmPassword && errors.confirmPassword.message}</Box>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button type="submit" value="Submit" size="lg"
                                    bg={'purple'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'purple.400',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={1}>
                                <Text align={'center'} fontSize={'1xl'}>
                                    ------ Or ------
                                </Text>
                                <Text align={'center'} fontSize={'1.5xl'}>
                                    Have an account ? <Link color='blue' to="/login"> LogIn </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </form>
        </Flex>
    )
}

export default RagisterForm