import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Heading p="10px">花咲</Heading>
      <Heading as="h2" marginBottom="30px">
        HANASAKI: “El arte japonés de vivir mas tiempo”
      </Heading>
      <Text p="60px">
        Literalmente: *Flor que se abre — hacer buen uso de lo que se nos da /*
        **Una flor nunca alcanzará su máximo esplendor si permanece en su etapa
        de capullo, así como nunca podrá ofrecer todas las maravillosas
        tonalidades de su corola si permanece semiabierta para después
        marchitarse.** Debemos florecer y convertirnos en la mejor versión de
        nosotros mismos* y para ellos tenemos que dar algunos pasos=hábitos (del
        libro “Pensar a la japonesa” Le Yen Mai) *lo mejor que podamos hacer
        ahora, con lo los recursos que tenemos. plus **Hábitos que favorecen la
        longevidad (pág.165)** - Nutrición - Regularidad en el horario de
        comidas + no comer hasta sentirse llenos - El desapego a los objetos /
        minimalismo (en todo lo que refiere al consumo, también del intelecto) -
        La contemplación - la meditación / el permanecer en el silencio - La
        curiosidad - La conexión con la naturaleza - El entrenamiento muscular -
        Estar en buena compañía
      </Text>
    </Box>
  );
};

export default Home;
