import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const image1URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/kanagawa_1080.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMva2FuYWdhd2FfMTA4MC5qcGciLCJpYXQiOjE2ODUxMTIxOTgsImV4cCI6MTY4NzcwNDE5OH0.M7HjerJ6jZMrlvI7Lp2CeaObg1KLAOfSTFNypZV4sG0&t=2023-05-26T14%3A43%3A17.703Z";

const image2URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/inume_pass.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvaW51bWVfcGFzcy5qcGciLCJpYXQiOjE2ODc1NzYyNTAsImV4cCI6MTcxOTExMjI1MH0.9cYBXh4oLGjuXfi_4_GTbmMnxMGmigr4BGbIzVleSwo&t=2023-06-24T03%3A10%3A51.682Z";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"99vh"}
      mb={"40px"}
      minH={"350px"}
      backgroundImage={image2URL}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Agustina Pascali
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"teal.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "teal.600" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
