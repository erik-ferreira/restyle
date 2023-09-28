import { createBox, createText } from "@shopify/restyle"

import { ThemeProps } from "../theme"
import { Item } from "../components/Item"

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export function Home() {
  return (
    <Box
      flex={1}
      bg="primary_700"
      alignItems="center"
      justifyContent="center"
      p="md"
    >
      <Box width="100%" bg="white" borderRadius={4} p="md">
        <Text variant="title">Plano trimestral</Text>

        <Item title="Entrega em 72 horas" icon="timer" />
      </Box>
    </Box>
  )
}
