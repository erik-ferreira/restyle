import { MaterialIcons } from "@expo/vector-icons"
import { createBox, createText, useTheme } from "@shopify/restyle"

import { ThemeProps } from "../theme"

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

interface ItemProps {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Item({ title, icon }: ItemProps) {
  const theme = useTheme<ThemeProps>()

  return (
    <Box flexDirection="row" alignItems="center" gap="sm">
      <MaterialIcons name={icon} size={24} color={theme.colors.primary_700} />
      <Text variant="body">{title}</Text>
    </Box>
  )
}
