import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Dialog, IconButton, Paper, TabScrollButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "@/components/Image";
import MovieSchedule from "../MovieSchedule";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function CinemaGroup({ data }) {
  const [value, setValue] = React.useState(0);
  const [selectedCineGroup, setSelectedCineGroup] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCineGroup = (event, newValue) => {
    setSelectedCineGroup(newValue);
  };

  const renderTab = () => {
    return data.lstCumRap.map((cinemaGroup, index) => {
      return (
        <Tab
          className="cinema-group__tab-item"
          key={index}
          label={cinemaGroup.tenCumRap}
          {...a11yProps(index)}
          icon={
            <Image
              className="cinema-group__tab-img"
              src={cinemaGroup.hinhAnh}
              alt={cinemaGroup.tenCumRap}
            />
          }
        />
      );
    });
  };

  const renderTabLabel = () => {
    return data.lstCumRap.map((cinemaGroup) => {
      return cinemaGroup.danhSachPhim.map((movie, index) => (
        <TabPanel className="cinema-group__panel-item" key={index} value={value} index={index}>
          <MovieSchedule movie={movie} cinemaGroup={cinemaGroup} />
        </TabPanel>
      ));
    });
  };

  return (
    <Box
      className="cinema-group__content-wrapper"
      sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 288 }}
    >
      <Tabs
        TabIndicatorProps={{ style: { background: "var(--primary)", width: "4" } }}
        className="cinema-group__tab-list"
        orientation="vertical"
        variant="scrollable"
        scrollButtons
        TabScrollButtonProps={{ sx: { color: "var(--primary)" } }}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {renderTab()}
      </Tabs>
      <Tabs
        className="cinema-group__tab-panels"
        orientation="vertical"
        variant="scrollable"
        scrollButtons
        TabScrollButtonProps={{ sx: { color: "var(--primary)" } }}
        onChange={handleChangeCineGroup}
        value={selectedCineGroup}
      >
        {renderTabLabel()}
      </Tabs>
    </Box>
  );
}

export default CinemaGroup;
