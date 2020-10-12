import React from "react";
import PropTypes from "prop-types";
import { BuscaSonhos } from "../../utils/api"

import "./getnet.css";

class Getnet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.props.onEnter) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
          name = e.target.name.split("::")[0];
          id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
          name = e.target.name.split("::")[0];
          index = e.target.name.split("::")[1];
          id = e.target.name.split("::")[2];
        }
      } else {
        name = e.target.name;
      }
      this.props.onEnter({
        type: "textinput",
        name: name,
        value: value,
        index: index,
        id: id,
      });
    }
  }

  handleChangeTextinput(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
      const varCount = e.target.name.split("::").length;
      if (varCount === 2) {
        name = e.target.name.split("::")[0];
        id = e.target.name.split("::")[1];
      } else if (varCount === 3) {
        name = e.target.name.split("::")[0];
        index = e.target.name.split("::")[1];
        id = e.target.name.split("::")[2];
      }
    } else {
      name = e.target.name;
    }
    let state = this.state;
    state[e.target.name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
      <div data-layer='e1cd5bfd-a06f-4d90-a3ae-153e5f1fe467' className='getnet'>
        {" "}
        <div
          data-layer='718d7d51-3a6c-47c7-8cbc-fe3c054ec46e'
          className='login'
        >
          {" "}
          <svg
            data-layer='811851f1-d509-40f4-af13-c79223586665'
            preserveAspectRatio='none'
            viewBox='0 0 374.9999694824219 667'
            className='caminho1'
          >
            <path d='M 0 0 L 374.9999694824219 0 L 374.9999694824219 667 L 0 667 L 0 0 Z' />
          </svg>
          <div
            data-layer='a1a23b61-f45b-4dc4-9adf-7f319472313c'
            className='esueceuASenha'
          ></div>
          <div
            data-layer='7a7e7f71-eb2a-4785-9402-cd2307a46661'
            className='termos'
          ></div>
          <div
            data-layer='ceb394f2-5e8d-425e-aac7-73c50c397612'
            className='fazerLoginc9ddc578'
          >
            {" "}
            <div
              data-layer='abd7bce1-3111-404a-8c7c-bbae0c37a9a8'
              className='retangulo4'
            ></div>
            <div
              data-layer='3d05f8e9-bf7e-4e3b-a310-2d451ead5751'
              className='fazerLogin'
              onClick={e => {BuscaSonhos()}}
            >
              Fazer Login
            </div>
          </div>
          <div
            data-layer='9e2a0770-61a3-4c82-a645-29d7967277b0'
            className='cadastrese'
          ></div>
          <div
            data-layer='2ab898c9-173d-46ab-8fa1-d1192fe2c62e'
            className='senha5daeba8a'
          >
            {" "}
            <div
              data-layer='c4ab3f03-5508-43b2-bbff-7a04c917cbaa'
              className='retangulo5'
            ></div>
            <div
              data-layer='e2e1ae93-ceba-4db8-a7d9-40c74c78857b'
              className='senha'
            >
              Senha
            </div>
            <div
              data-layer='c86630dc-de0d-46c6-b812-147bb482aac6'
              className='retangulo11'
            ></div>
            <div
              data-layer='2f7e8a24-44da-4fa0-8948-f17e1166ea1f'
              className='cadeado'
            >
              {" "}
              <div
                data-layer='12dfd8a6-e6f4-44aa-817b-fea137d59af8'
                className='retangulo12'
              ></div>
              <div
                data-layer='a4b7c4e8-8e95-47e9-b448-ea1995d594b6'
                className='retangulo13'
              ></div>
            </div>
            <svg
              data-layer='c8d377f5-d22b-4821-acd1-c0a2b489bd88'
              preserveAspectRatio='none'
              viewBox='-0.25 -0.25 0.5 3.5'
              className='linha1'
            >
              <path d='M 0 0 L 0 3' />
            </svg>
          </div>
          <div
            data-layer='5175696a-f62f-48ae-8754-2b8522e2b802'
            className='emailContainer'
          >
          </div>
          <div
            data-layer='95a2f8a6-2179-4502-ac0e-a92b8e508109'
            className='getnetLogo4'
          ></div>
        </div>
      </div>
    );
  }
}

// Getnet.propTypes = {

// }

// Getnet.defaultProps = {

// }

export default Getnet;
