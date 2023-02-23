import { Box, Flex, Heading, HStack, Input, Select, Text } from '@chakra-ui/react'
import React ,{useEffect, useState}from 'react'
import { useSearchParams } from 'react-router-dom';

export default function ListingSerch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const intialProduct = searchParams.getAll('product')
  const intialCatagory = searchParams.getAll('catagory')
  const [product,setProduct] = useState<string[]>(intialProduct || ["Mens"])
  const [Catagory,setCatogory] = useState<string[]>(intialCatagory||[])
 

  useEffect(()=>{
    let params:{product?:string[],catagory?:string[]} = {}

    if(Catagory.length){
      params.catagory = Catagory
      params.product = product

    }
    setSearchParams(params)

  },[Catagory,product])

  return (
    <>

    <Box>
      <Heading>{product} Products</Heading>
      <Text color='teal' >List of Products</Text>
    </Box>

    <Box>
        <Flex  justifyContent={'space-between'} p='10px' flexDirection={{base:'column',sm:'row'}} gap='10px'  >
            <Box>
              <Input
              type={"text"}
              placeholder="Search products.."
              color='teal'
              colorScheme='teal'
              borderColor={'teal'}
              // onKeyDown={handleKeyDown}
              ></Input>
            </Box>
            <HStack>
              <Select
              bg="#439A97"
              cursor={"pointer"} 
              value={product[0]}
              onChange={(e)=>{setProduct([e.target.value])}}

              > 
                <option style={{ backgroundColor: "#439A97" ,padding:'10px' }} value="Mens">
                  Mens
                </option>
                <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="Womens">
                  Womens
                </option>
              </Select>

              {
                product[0]==='Mens'?<Select
                bg="#439A97"
                cursor={"pointer"}
                value={Catagory[0]}
                onChange={(e)=>{setCatogory([e.target.value])}}
                > 
                
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="shoes">
                      Shoes
                    </option>
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="pants">
                      Pants
                    </option>
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="t-shirt">
                      T-Shirt
                    </option>
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="hoodes">
                      Hoddes
                    </option>
                </Select>:<Select
                  bg="#439A97"
                  cursor={"pointer"}
                  value={Catagory}
                  onChange={(e)=>{setCatogory([e.target.value])}}
                  > 
                  
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="sneakers">
                    Sneakers
                    </option>
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="loungwear">
                    Loungwear
                    </option>
                    <option style={{ backgroundColor: "#439A97" ,padding:'10px'}} value="bodysuit">
                    Bodysuit
                    </option>
                   
              </Select>
              }
              

            </HStack>
        </Flex>
    </Box>
    
    
    </>
  )
}

