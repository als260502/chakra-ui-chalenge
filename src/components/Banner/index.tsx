import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const Banner = () => {
  return (
    <Flex
      w='100%'
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('img/banner.jpg')"
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justify={['center', 'space-between']}
        align='center'
        w='100%'
        mx='auto'
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color='gray.100'
            fontWeight='500'
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}

          >
            5 continentes,<br />infinitas possibilidades.
          </Heading>

          <Text
            color='gray.300'
            mt='5'
            fontSize={['0.8rem', 'xl']}
            maxWidth={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que vc sempre sonhou.
          </Text>
        </Box>

        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src='/img/airplane.svg'
          alt='Airplane flying'
          transform='translateY(48px)'
          ml={8}
        />

      </Flex>

    </Flex>
  )
}