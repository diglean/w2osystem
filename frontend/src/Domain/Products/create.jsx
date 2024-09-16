import Form from "../../Components/Form.jsx";
import Input from "../../Components/Input.jsx";
import { Fragment, useEffect, useState } from "react";

import NavBar from "../../Components/NavBar.jsx";
import BasicSelect from "../../Components/Select.jsx";
import Button from "../../Components/Button.jsx";

import styles from "./styles/create.module.css";
import { Typography } from "@mui/material";
import BasicDatePicker from "../../Components/Datepicker.jsx";

const host = "http://localhost:8000/api";

const Create = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [overdueDt, setOverdueDt] = useState("");

  const [options, setOptions] = useState([{}]);

  useEffect(() => {
    fetch(`${host}/category/list`)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  const handleCreateProduct = () => {
    let action = "create";
    let method = "POST";

    let body = {
      name,
      category_id: category,
      description,
      price,
      overdue_dt: overdueDt,
    };

    if (id) {
      action = "update";
      method = "PUT";

      body.id = id;
    }

    fetch(`${host}/product/${action}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
      });
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const handleChangeDescription = (value) => {
    setDescription(value);
  };

  const handleChangePrice = (value) => {
    let newValue = value.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setPrice(newValue);
  };

  const handleChangeOverdueDt = (data) => {
    setOverdueDt(data.format("YYYY-MM-D"));
  };

  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.main_form}>
          <h1>{id ? "Atualizar produto" : "Criar produto"}</h1>
          <Form callbackSubmit={handleCreateProduct}>
            <Input
              label="Nome"
              name="name"
              required
              maxLength={15}
              cbValueChanged={handleChangeName}
            />
            <BasicSelect
              label="Categoria"
              options={options}
              value={category}
              cbHandleChange={handleChangeCategory}
            />
            <Input
              label="Descrição"
              name="description"
              required
              multiline
              cbValueChanged={handleChangeDescription}
            />
            <Input
              label="Preço"
              name="price"
              value={price}
              required
              cbValueChanged={handleChangePrice}
              InputProps={{
                startAdornment: (
                  <Fragment>
                    <Typography>R$&nbsp;</Typography>
                  </Fragment>
                ),
              }}
            />
            <BasicDatePicker
              label="Data de vencimento"
              cbValueChanged={handleChangeOverdueDt}
            />
            <Button type="submit" variant="contained">
              {id ? "Atualizar" : "Criar"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Create;
