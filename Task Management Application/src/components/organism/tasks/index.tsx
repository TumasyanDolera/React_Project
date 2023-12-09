import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '@chakra-ui/react'



const Task = () => {
  const { t } = useTranslation()
  
 


  return ( 
    // <>
    // { Tasks && Tasks.map(()=>{
    <Center py={20} >
        <Box
          maxW={'320px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          _after={{
            w:'md',
          
          }}>
            <Stack spacing={[1, 5]} direction={['column', 'row']} display='Flex' justifyContent='end'>
          <Checkbox size='md' colorScheme='blue'>
          </Checkbox>
        </Stack>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          </Heading>
          <Text  fontWeight={600} color={'gray.500'} mb={4}>
             {t("TASK.TASK_TITLE")}
          </Text>
          <Text>
             {t("TASK.TASK_START_DATA")}</Text>
          <Text> {t("TASK.TASK_STATUS")}</Text>
          <Text
            textAlign={'center'}
            px={3}>
            {t("TASK.TASK_DESCRIPTION")} 
          </Text>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              {t("TASK.TASK_DELEDTE")}
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              {t("TASK.TASK_EDET")}
             
            </Button>
          </Stack>
        </Box>
      </Center>
      // } 
      // )} 
      // </> 
 )}

  

export default Task