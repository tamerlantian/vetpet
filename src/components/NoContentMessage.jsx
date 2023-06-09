import { Center, Text } from '@chakra-ui/react'

const NoContentMessage = () => {
  return (
    <Center>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          You don't have anything here yet.
        </Text>
      </Center>
  )
}

export default NoContentMessage
