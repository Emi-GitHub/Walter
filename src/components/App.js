import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListaRadnika from "./ListaRadnika";
import DailyScrum from "./DailyScrum";

class App extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Lista radnika</Tab>
          <Tab>Daily scrum</Tab>
        </TabList>
        <TabPanel>
          <ListaRadnika />
        </TabPanel>
        <TabPanel>
          <DailyScrum />
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
