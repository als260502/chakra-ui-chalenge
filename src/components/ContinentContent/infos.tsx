import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri"

export const Infos = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"

    >
      <Flex
        direction="column"
        justify='center'
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          50
        </Heading>
        <Text
          fontSize={['md', 'xl']}
          color='gray.600'
          fontWeight='500'
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify='center'
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          60
        </Heading>
        <Text
          fontSize={['md', 'xl']}
          color='gray.600'
          fontWeight='500'
        >
          linguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify='center'
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          27
        </Heading>
        <Text
          fontSize={['md', 'xl']}
          color='gray.600'
          fontWeight='500'
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  cursor='pointer'
                  ml='1'
                  color='gray.400'
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg='gray.700' color='yellow.400'>
              <PopoverArrow bg='gray.700' />
              <PopoverCloseButton />
              <PopoverBody fontWidth='400' fontSize='lg' >
                Paris, Europa, Chile, Canada
              </PopoverBody>
            </PopoverContent>

          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}