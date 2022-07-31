import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import actGetCinemaList from "@/store/actions/cinemaSystem";

//Material UI
import { Tab, Typography, Tabs, Box } from "@mui/material";

//Components
import Image from "@/components/Image";
import CinemaGroup from "./CinemaGroup";
import Loader from "@/components/Loader";

import "./style.scss";

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

function CinemaSystem() {
  const dispatch = useDispatch();
  const cinemaSystemData = useSelector((state) => state.cinemaSystem.data);
  const loading = useSelector((state) => state.cinemaSystem.loading);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(actGetCinemaList());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logoTabStyle = {
    minWidth: "var(--logo-size)",
    width: "var(--logo-size)",
    minHeight: "var(--logo-size)",
    height: "var(--logo-size)",
    padding: "10px",
  };

  const renderTab = () => {
    return cinemaSystemData?.map((cinemaSystem, index) => (
      <Tab
        key={index}
        style={logoTabStyle}
        className="cinema-system__item"
        label={
          <Image
            className="cinema-system__logo"
            src={cinemaSystem.logo}
            alt={cinemaSystem.tenCumRap}
          />
        }
        {...a11yProps(index)}
        variant="fullWidth"
      />
    ));
  };

  const renderTabPanel = () => {
    return cinemaSystemData?.map((cinemaGroup, index) => (
      <TabPanel key={index} className="cinema-system__item-content" value={value} index={index}>
        <CinemaGroup data={cinemaGroup} />
      </TabPanel>
    ));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box className="home__cinema-system hide-on-mobile" sx={{ py: "20px" }}>
          <Box
            className="cinema-system-wrapper container"
            maxWidth="lg"
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 288,
              mx: "auto",
            }}
          >
            <Tabs
              TabIndicatorProps={{ style: { width: "0" } }}
              orientation="vertical"
              variant="scrollable"
              scrollButtons
              TabScrollButtonProps={{ sx: { color: "var(--primary)" } }}
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                "& button.Mui-selected": { backgroundColor: "var(--gray)", borderRadius: "50%" },
              }}
              className="cinema-system-list"
            >
              {renderTab()}
            </Tabs>
            {renderTabPanel()}
          </Box>
        </Box>
      )}
    </>
  );
}

export default CinemaSystem;
