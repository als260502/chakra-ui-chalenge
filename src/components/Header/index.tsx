import { Flex, Grid, Icon, Image } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

import { RiArrowLeftSLine } from 'react-icons/ri'

export const Header = () => {
  const { asPath } = useRouter()

  const notHomePage = asPath !== "/"
  return (
    <Flex
      bg="white"
      w='100%'
      as='header'
      mx='auto'
      px='auto'
      h={['50px', '100px']}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxW='1160%'
        alignItems='center'
        templateColumns="repeat(3, 1fr)"
        justifyContent='center'
      >
        {notHomePage && (
          <Link href='/'>
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={['20', '40']}
                justifySelf='start'
              />
            </a>
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          src='/img/logo.svg'
          alt='World Trip Airplane'
          justifySelf='center'
          gridColumn='2'
        />

      </Grid>

    </Flex>
  )

}