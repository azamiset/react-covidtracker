import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchDailyData = await fetchData();
    this.setState({
      data: fetchDailyData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <h1 style={{ alignContent: "center" }}>
            DATA PASIEN COVID-19 TERBARU
          </h1>
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
