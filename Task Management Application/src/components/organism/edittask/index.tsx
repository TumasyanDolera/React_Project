import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
  Select,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { InputForm } from '../../molecule'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useRef, ChangeEvent } from 'react';
import { IAddTask } from '../../../models';


const EditTask = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IAddTask>({
    mode: "onBlur"
  });
  const [image, setImage] = useState(" ")
  const onSubmit: SubmitHandler<IAddTask> = (data) => {
    alert(JSON.stringify(data))
    reset()

  }

  const handleClick = () => {
    reset(formValues => ({
      ...formValues,
      title: 'Title',
      description: "Description",
      date: "Date",
      level: "Level"
    }))
  }
  const { t } = useTranslation()

  const handelImageChange = (event: ChangeEvent) => {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
    eventTarget.files && eventTarget.files[0] && (eventTarget.files[0].name)
    if (eventTarget.files) {
      setImage(URL.createObjectURL(eventTarget.files[0]))
    }
  }
  const filePicker = useRef<HTMLInputElement>(null)
  const handlePick = () => {
    (filePicker.current as HTMLInputElement).click()
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue("purple.200", "gray.800")}
      color={useColorModeValue("purple", "purple")}
    >
      <form onSubmit={handleSubmit(onSubmit)} >
        <Stack
          spacing={4}
          w={'600px'}
          maxW={'lg'}
          bg={useColorModeValue("pink.200", "gray.800")}
          rounded={'xl'}
          boxShadow='2xl'
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} display="flex" justifyContent="space-between">
            {t('ADD_TASK.USER_PROFILE')}
            <Stack direction='row' spacing={6} >
            <CloseButton size='lg' />
          </Stack>
          </Heading>
          <FormControl id="userName">
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={image}>
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="200px" onClick={handlePick} colorScheme="pink" color='white'>
                  {t("ADD_TASK.CHOOSE_FILE")}
                </Button>
                <Input opacity='0' h='0' w='0' lineHeight='0' overflow='0' p='0' m='0'
                  type="file"
                  accept="image/*"
                  ref={filePicker}
                  onChange={handelImageChange}
                />
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="Title" isRequired >
            <InputForm
              text={t("ADD_TASK.TITLE")}
              type="text"
              placeholder="Enter Title *"
              size="md"
              register={{
                ...register("title", {
                  required: true
                })
              }}
            />
          </FormControl>
          <FormControl id="description" isRequired >
            <InputForm
              text={t("ADD_TASK.DESCRIPTION")}
              type="textarea"
              placeholder="Description*"
              size="md"
              register={{
                ...register("description", {
                  required: true,

                })
              }}
            />
          </FormControl>
          <FormControl id="startDate" isRequired >
            <InputForm
              text={t("ADD_TASK.START_DATE")}
              type="date"
              placeholder="Start date*"
              size="md"
              register={{
                ...register("date", {
                  required: true
                })
              }}
            />
          </FormControl>
          <FormControl id="end date" isRequired >
            <InputForm
              text={t("ADD_TASK.END_DATE")}
              type="date"
              placeholder="End date*"
              size="md"
              register={{
                ...register("date", {
                  required: true
                })
              }}
            />
          </FormControl>

          <FormLabel as="legend" >
            {t("ADD_TASK.LAVEL")}
          </FormLabel>
          <Stack >
            <Select placeholder="Choose Lavel" {...register("level")} >
              <option value='low'>low</option>
              <option value='middle'>middle</option>
              <option value='hight'>hight</option>
            </Select>
          </Stack>

          <Stack spacing={6} direction={['column', 'row']}>
            <Button size="lg"
              type='button'
              onClick={handleClick}
              bg={'purple'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'pink.500',

              }}
            >
              {t("ADD_TASK.CANCEL")}
            </Button>
            <Button type="submit" value="Submit" size="lg"
              colorScheme="pink"
              color={'white'}
              w="full"
              _hover={{
                bg: 'purple',
              }}>
              {t("ADD_TASK.SUBMIT")}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  )
}


export default EditTask