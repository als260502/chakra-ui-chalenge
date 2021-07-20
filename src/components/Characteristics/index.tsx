import { Grid, GridItem } from "@chakra-ui/react"
import { Characteristc } from "./characteristc"

export const Characteristcs = () => {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w='100%'
      justify='space-between'
      align='center'
      mt={['10', '32']}
      mx='auto'
      maxWidth='1160px'
      gap={['1', '5']}
    >
      <GridItem>
        <Characteristc icon="cocktail" text="Vida noturn" />
      </GridItem>
      <GridItem>
        <Characteristc icon="surf" text="Praia" />
      </GridItem>
      <GridItem>
        <Characteristc icon="building" text="Moderno" />
      </GridItem>
      <GridItem>
        <Characteristc icon="museum" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Characteristc icon="earth" text="E mais..." />
      </GridItem>
    </Grid>
  )
}