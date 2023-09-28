import { createBox, createText } from "@shopify/restyle"

import { ThemeProps } from "../theme"

import { Item } from "../components/Item"
import { Button } from "../components/Button"

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

        <Box gap="md" borderTopWidth={1} borderTopColor="primary_700" pt="md">
          <Item title="Entrega em 72 horas" icon="timer" />
          <Item title="Delivery grátis" icon="local-shipping" />
          <Item title="R$ 99,90 por mês" icon="credit-card" />
        </Box>

        <Box flexDirection="row" mt="xl" gap="md">
          <Button title="Simular" variant="secondary" />
          <Button title="Contratar" variant="primary" />
        </Box>
      </Box>
    </Box>
  )
}
