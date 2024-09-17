import { Fragment, useEffect, useState } from "react";

import Form from "../../Components/Form.jsx";
import Input from "../../Components/Input.jsx";
import NavBar from "../../Components/NavBar.jsx";
import BasicSelect from "../../Components/Select.jsx";
import Button from "../../Components/Button.jsx";
import BasicDatePicker from "../../Components/Datepicker.jsx";

import { Typography } from "@mui/material";
import useToast from "../../Hooks/useToast.jsx";
import moment from "moment";

import styles from "./styles/create.module.css";

import ROOT from "../../root";

const Create = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [overdueDt, setOverdueDt] = useState("");

  const [options, setOptions] = useState([{}]);

  const { toastSuccess, toastError } = useToast();

  useEffect(() => {
    // fetch(`${ROOT}/category/list`)
    //   .then((res) => res.json())
    //   .then((data) => setOptions(data));
  }, []);

  const handleCreateProduct = () => {
    if (!validateData()) {
      return false;
    }

    let action = "create";
    let method = "POST";
    let toastMessage = "Produto criado com sucesso!";

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
      toastMessage = "Produto atualizado com sucesso!";

      body.id = id;
    }

    // fetch(`${ROOT}/product/${action}`, {
    //   method,
    //   body: JSON.stringify(body),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setId(data.id);
    //     toastSuccess(toastMessage);
    //   });
  };

  const validateData = () => {
    const momentOverdueDt = moment(overdueDt);

    if (momentOverdueDt.isBefore(moment().startOf("day"))) {
      toastError("Data de vencimento inválida!");
      return;
    }

    if (price !== "") {
      if (price < 0) {
        toastError("Preço inválido!");
        return;
      }
    }
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
    let newValue = value.replace(/[0-9]/g, "");
    newValue = newValue.replace(/\D/g, "");
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
              maxLength={30}
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
              maxLength={255}
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
