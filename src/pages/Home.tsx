import { View, Text } from "react-native"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
