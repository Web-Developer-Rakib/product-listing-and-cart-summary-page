import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Mask,
  Navbar,
  Select,
  Table,
} from "react-daisyui";
import addToCart from "../../svgs/add-to-cart.svg";
import reset from "../../svgs/reset.svg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchtxt, setSrarchtxt] = useState("");
  const [size, setSize] = useState("");
  // console.log(size);
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?name=${searchtxt}&category=${category}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [searchtxt, category, size]);

  return (
    <div>
      {/* Search and filter */}
      <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Navbar>
          <div className="flex-1 gap-2">
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                Categories
              </option>
              <option>Camouflage</option>
              <option>Letter Print</option>
              <option>Solid</option>
            </Select>
            <Select>
              <option value="" disabled selected>
                Sizes
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </Select>
            <Button className="btn-warning">
              {" "}
              Reset
              <img src={reset} alt="" />
            </Button>
          </div>
          <div className="flex-none gap-2">
            <Form>
              <Input
                bordered
                type="text"
                placeholder="Search"
                onChange={(e) => setSrarchtxt(e.target.value)}
              />
            </Form>
            <div vertical="end">
              <Button className="btn-success">
                Add To Cart <img src={addToCart} alt="" width={21} />
              </Button>
            </div>
          </div>
        </Navbar>
      </div>
      {/* Table */}
      <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Table className="rounded-box">
          <Table.Head>
            <span>Image</span>
            <span>Name</span>
            <span>Color</span>
            <span>Size</span>
            <span>Stocks</span>
            <span>Price</span>
            <span>Category</span>
            <span>Quantity</span>
            <span>Select</span>
          </Table.Head>

          <Table.Body>
            {products.map((product) => (
              <Table.Row key={product?.id}>
                <div className="flex items-center space-x-3 truncate">
                  <Mask variant="squircle" src={product.image} width={80} />
                </div>
                <div>{product?.name}</div>
                <div>{product?.color}</div>
                <div>{product?.size}</div>
                <div>{product?.stocks}</div>
                <div>{product?.price}$</div>
                <div>{product?.category}</div>
                <Input type="number" />
                <Checkbox className="ml-3" />
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <span>Image</span>
            <span>Name</span>
            <span>Color</span>
            <span>Size</span>
            <span>Stocks</span>
            <span>Price</span>
            <span>Category</span>
            <span>Quantity</span>
            <span>Select</span>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
};

export default Home;
