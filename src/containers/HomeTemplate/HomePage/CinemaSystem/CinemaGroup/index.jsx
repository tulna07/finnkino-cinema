import * as React from "react";
import PropTypes from "prop-types";

//Material UI
import { Tabs, Tab, Typography, Box } from "@mui/material";

//Components
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = () => {
    return data.lstCumRap.map((cinemaGroup, index) => {
      return (
        <Tab
          className="cinema-group__tab-item"
          key={index}
          label={`${cinemaGroup.tenCumRap} ${index}`}
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

  const renderTabPanel = () => {
    return data.lstCumRap?.map((cinemaGroup, index) => {
      return (
        <TabPanel
          key={index}
          value={value}
          index={index}
          className="cinema-group__panel-item"
          variant="scrollable"
          sx={{
            "&::-webkit-scrollbar": {
              width: 20,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "orange",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "red",
              borderRadius: 2,
            },
          }}
        >
          {cinemaGroup.danhSachPhim?.map((movie, index) => (
            <MovieSchedule key={index} movie={movie} cinemaGroup={cinemaGroup} />
          ))}
        </TabPanel>
      );
    });
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 288 }}
      className="cinema-group__content-wrapper"
    >
      <Tabs
        TabIndicatorProps={{ style: { width: "0" } }}
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
      {renderTabPanel()}
    </Box>
  );
}

export default CinemaGroup;
