import React from "react";
import { List, Label, Tab } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TabComponent = props => {
  const panes = [
    {
      menuItem: props.cityA,
      render: () => (
        <Tab.Pane>
          <List>
            {props.getPositiveObjects(props.cityAdetails, 0)
              ? props.getPositiveObjects(props.cityAdetails, 0).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} {"scores: "}
                    <b>{element.value}</b> vs{" "}
                    {element.value - element.difference}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {parseFloat(element.difference).toFixed(2)}{" "}
                  </List.Item>
                ))
              : null}
            <List.Item>
              <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
              {props.cityAdetails[9]
                ? props.cityAdetails[9].data[0].label +
                  ": " +
                  props.cityAdetails[9].data[0].string_value
                : null}
            </List.Item>
            <br />
            {props.getNegativeObjects(props.cityAdetails, 10)
              ? props
                  .getNegativeObjects(props.cityAdetails, 10)
                  .map(element => (
                    <List.Item key={element.key}>
                      <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                      {element.key} : <b>{element.value}</b> vs{" "}
                      {element.value - element.difference}{" "}
                      <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                      {parseFloat(element.difference).toFixed(2)}{" "}
                    </List.Item>
                  ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityAdetails, 1)
              ? props.getPositiveObjects(props.cityAdetails, 1).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} :{" "}
                    <b>{parseFloat(element.value).toFixed(2)}</b> vs{" "}
                    {parseFloat(element.value).toFixed(0) -
                      parseFloat(element.difference).toFixed(0)}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />
                    {parseFloat(element.difference).toFixed(2)}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityAdetails, 4)
              ? props.getPositiveObjects(props.cityAdetails, 4).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {"Number of "} {element.key.toLocaleLowerCase()} :{" "}
                    <b>{element.value}</b> vs{" "}
                    {element.value - element.difference}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />
                    {element.difference}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityAdetails, 5)
              ? props.getPositiveObjects(props.cityAdetails, 5).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} :{" "}
                    <b>
                      {element.key === "GDP growth rate"
                        ? element.value + "%"
                        : element.value + "$"}
                    </b>{" "}
                    vs{" "}
                    {element.key === "GDP growth rate"
                      ? element.value - element.difference + "%"
                      : element.value - element.difference + "$"}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />
                    {" " + element.difference + "$"}
                  </List.Item>
                ))
              : null}
          </List>
        </Tab.Pane>
      )
    },
    {
      menuItem: props.cityB,
      render: () => (
        <Tab.Pane>
          <List>
            {props.getPositiveObjects(props.cityBdetails, 0)
              ? props.getPositiveObjects(props.cityBdetails, 0).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} {"score"} : <b>{element.value}</b> vs{" "}
                    {element.value - element.difference}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {parseFloat(element.difference).toFixed(2)}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            <List.Item>
              <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
              {props.cityBdetails[9]
                ? props.cityBdetails[9].data[0].label +
                  ": " +
                  props.cityBdetails[9].data[0].string_value
                : null}
            </List.Item>
            <br />
            {props.getNegativeObjects(props.cityBdetails, 10)
              ? props
                  .getNegativeObjects(props.cityBdetails, 10)
                  .map(element => (
                    <List.Item key={element.key}>
                      <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                      {element.key} : <b>{element.value}</b> vs{" "}
                      {element.value - element.difference}{" "}
                      <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                      {parseFloat(element.difference).toFixed(2)}{" "}
                    </List.Item>
                  ))
              : null}
            <br />
            {props.getNegativeObjects(props.cityBdetails, 9)
              ? props.getNegativeObjects(props.cityBdetails, 9).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} : <b>{element.value}</b> vs{" "}
                    {element.value - element.difference}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {parseFloat(element.difference).toFixed(2)}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityBdetails, 1)
              ? props.getPositiveObjects(props.cityBdetails, 1).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} :{" "}
                    <b>{parseFloat(element.value).toFixed(2)}</b> vs{" "}
                    {parseFloat(element.value).toFixed(0) -
                      parseFloat(element.difference).toFixed(0)}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {parseFloat(element.difference).toFixed(2)}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityBdetails, 4)
              ? props.getPositiveObjects(props.cityBdetails, 4).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {"Number of "} {element.key.toLocaleLowerCase()} :{" "}
                    <b>{element.value}</b> vs{" "}
                    {element.value - element.difference}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {" " + element.difference}{" "}
                  </List.Item>
                ))
              : null}
            <br />
            {props.getPositiveObjects(props.cityBdetails, 5)
              ? props.getPositiveObjects(props.cityBdetails, 5).map(element => (
                  <List.Item key={element.key}>
                    <FontAwesomeIcon icon={faCheck} color={"#b0bec5"} />{" "}
                    {element.key} :{" "}
                    <b>
                      {element.key === "GDP growth rate"
                        ? element.value + "%"
                        : element.value + "$"}
                    </b>{" "}
                    vs{" "}
                    {element.key === "GDP growth rate"
                      ? element.value - element.difference + "%"
                      : element.value - element.difference + "$"}{" "}
                    <FontAwesomeIcon color="green" icon={faArrowUp} />{" "}
                    {" " + element.difference + "$"}
                  </List.Item>
                ))
              : null}
          </List>
        </Tab.Pane>
      )
    }
  ];

  return (
    <Tab
      menu={{ secondary: true, pointing: true, color: "red" }}
      panes={panes}
    />
  );
};

export default TabComponent;
