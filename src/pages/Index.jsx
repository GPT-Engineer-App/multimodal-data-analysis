import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Image, Box, HStack } from "@chakra-ui/react";
import { FaFileImage, FaFileAlt, FaChartBar } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Index = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Multimodal Data Analysis</Text>

        <HStack spacing={4} width="100%">
          <Input type="file" accept="image/*" onChange={handleImageUpload} display="none" id="image-upload" />
          <Button as="label" htmlFor="image-upload" leftIcon={<FaFileImage />}>
            Upload Image
          </Button>

          <Input type="text" placeholder="Enter text" value={text} onChange={handleTextChange} />
          <Button leftIcon={<FaFileAlt />}>Submit Text</Button>
        </HStack>

        {image && (
          <Box boxSize="sm">
            <Image src={image} alt="Uploaded" />
          </Box>
        )}

        {text && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>{text}</Text>
          </Box>
        )}

        <Box width="100%">
          <Line data={chartData} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
