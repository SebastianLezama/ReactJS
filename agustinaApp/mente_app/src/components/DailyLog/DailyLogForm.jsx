import React from "react";
import Picker from "../Picker";
import {
  Box,
  Button,
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
} from "@chakra-ui/react";

const DailyLogForm = ({
  handleChange,
  handleDateChange,
  handleSubmit,
  formData,
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

  // TODO volver radios a cero en el Front
  return (
    <Box justify="center">
      <form>
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
                  defaultValue="0"
                  name={e.name.toLowerCase()}
                  value={formData.e}
                  colorScheme="pink"
                >
                  <FormLabel m="0">{e.name}</FormLabel>
                  <HStack
                    justify="space-between"
                    paddingBottom="17px"
                    onChange={handleChange}
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
                defaultValue="0"
                name="valor"
                value={formData.valor}
                colorScheme="pink"
              >
                <HStack
                  justify="space-between"
                  paddingBottom="17px"
                  name="valor"
                  onChange={handleChange}
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
          </GridItem>
          {/* <Spacer /> */}
        </Grid>
      </form>
    </Box>
  );
};

export default DailyLogForm;
