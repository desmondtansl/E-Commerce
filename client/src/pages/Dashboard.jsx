import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  padding: 10px;
`;

const ImageContainer = styled.p`
  font-size: 14px;
  padding: 10px;
  font-weight: 600;
`;

const SubHeader = styled.p`
  font-size: 30px;
  font-weight: 300;
  padding: 5px;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

const Input = styled.input`
  margin: 10px 0px;
  padding: 5px;
  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  padding: 5px;
`;

const TitleHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductDescHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductCategoryHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductSizesHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductColorsHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductPricesHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductQtyHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

function Dashboard() {
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Admin Dashboard</Title>
        <SubHeader>Product Upload Form</SubHeader>
        <Form onSubmit={handleSubmit}>
          <TitleHeader>Enter Product Title</TitleHeader>
          <Input
            placeholder="e.g. Nike SB Tee, Moncler Swim Shorts"
            required
            onChange={updateData}
          />
          <ProductDescHeader>Enter Product Description</ProductDescHeader>
          <Input required onChange={updateData} />
          <ImageContainer>
            Upload Product Image
            <Input type="file" required onChange={updateData} />
          </ImageContainer>
          <ProductCategoryHeader>Product Category</ProductCategoryHeader>
          <Input placeholder="Mens or Ladies" required onChange={updateData} />
          <ProductSizesHeader>Product Sizes</ProductSizesHeader>
          <Input
            placeholder="separated by commas - e.g. S, M or US 6, US 7"
            required
            onChange={updateData}
          />
          <ProductColorsHeader>Product Colors</ProductColorsHeader>
          <Input
            placeholder="separated by commas - e.g. Black, Navy"
            required
            onChange={updateData}
          />
          <ProductPricesHeader>Product Prices</ProductPricesHeader>
          <Input
            placeholder="enter ONLY numbers w/o $ sign - e.g. 30, 40"
            required
            onChange={updateData}
          />
          <ProductQtyHeader>Product Inventory Qty</ProductQtyHeader>
          <Input
            placeholder="enter ONLY numbers"
            required
            onChange={updateData}
          />
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;