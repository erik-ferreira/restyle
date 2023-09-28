import { TouchableOpacity } from "react-native"
import {
  SpacingProps,
  createText,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from "@shopify/restyle"

import { ThemeProps } from "../theme"

const Text = createText<ThemeProps>()

interface BoxCustomProps
  extends SpacingProps<ThemeProps>,
    VariantProps<ThemeProps, "buttonVariants"> {}

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: "buttonVariants" }),
])

interface ButtonProps extends BoxCustomProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
      <Box {...rest}>
        <Text
          variant={
            rest.variant === "primary" ? "button_primary" : "button_secondary"
          }
        >
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}
