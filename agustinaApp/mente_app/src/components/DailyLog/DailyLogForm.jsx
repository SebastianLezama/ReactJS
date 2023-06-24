import React, { useState } from "react";
import Picker from "../Picker";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Textarea,
  Wrap,
  useRadioGroup,
} from "@chakra-ui/react";
import LogRadio from "./LogRadio";

const DailyLogForm = ({
  handleChange,
  handleDateChange,
  handleSubmit,
  handleRadio,
  isRadioSelected,
  isFormFilled,
  formData,
  setFormData,
  startDate,
  logData,
}) => {
  const emociones = [
    { name: "Alegria" },
    { name: "Enojo" },
    { name: "Tristeza" },
    { name: "Verguenza" },
    { name: "Culpa" },
    { name: "Frustracion" },
    { name: "Ansiedad" },
    { name: "Sorpresa" },
  ];

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "0",
    onChange: handleChange,
  });

  // TODO volver radios a cero en el Front
  return (
    // <Box justify="center" pt={"20px"}>
    <Container maxW={"5xl"} py={12} h={"90vh"}>
      <Flex justifyContent={"center"}>
        <form disabled="disabled">
          <Grid templateColumns="repeat(7, 1fr)">
            <Spacer />
            <GridItem colSpan={3} p="15px" maxWidth="300px">
              {/* <Spacer></Spacer> */}
              <Box>
                <Picker
                  formData={formData}
                  startDate={startDate}
                  handleDateChange={handleDateChange}
                  logData={logData}
                />
                <Textarea
                  placeholder="Comentarios del día"
                  h="280px"
                  mt="10px"
                  name="comentarios"
                  onChange={handleChange}
                  value={formData.comentarios}
                />
                <Button
                  mt={3}
                  colorScheme="teal"
                  type="submit"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Registrar Emociones
                </Button>
              </Box>
            </GridItem>
            {/* <Spacer />
          <Spacer /> */}
            <GridItem colSpan={2} p="15px" maxWidth="320px">
              <FormControl onSubmit={handleSubmit}>
                {emociones.map((e) => (
                  <RadioGroup
                    key={e.name}
                    defaultValue={formData[e.name.toLowerCase()]}
                    name={e.name.toLowerCase()}
                    value={formData[e.name.toLowerCase()]}
                    colorScheme="blue"
                    _checked={isRadioSelected(formData.e)}
                  >
                    <FormLabel m="0">{e.name}</FormLabel>
                    <HStack
                      justify="space-between"
                      paddingBottom="17px"
                      onChange={handleRadio}
                    >
                      <Radio value="0">0</Radio>
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                      <Radio value="3">3</Radio>
                      <Radio value="4">4</Radio>
                      <Radio value="5">5</Radio>
                    </HStack>
                  </RadioGroup>
                ))}
                <Input
                  placeholder="Otra"
                  name="otra"
                  value={formData.otra}
                  onChange={handleChange}
                  marginBottom="4px"
                />
                <RadioGroup
                  defaultValue={formData.valor}
                  name="valor"
                  value={formData.valor}
                  colorScheme="blue"
                  _checked={isRadioSelected(formData.valor)}
                >
                  <HStack
                    justify="space-between"
                    paddingBottom="17px"
                    name="valor"
                    onChange={handleRadio}
                  >
                    <Radio value="0">0</Radio>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                    <Radio value="4">4</Radio>
                    <Radio value="5">5</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* <LogRadio formData={formData} /> */}
            </GridItem>
            {/* <Spacer /> */}
          </Grid>
        </form>
        {/* </Box>
         */}
      </Flex>
    </Container>
  );
};

export default DailyLogForm;
