import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Material UI
import { Box, Container, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

// Components
import AccountInfo from "./AccountInfo";
import TransactionHistory from "./TransactionHistory";

// Redux actions
import { actGetUserProfile } from "@/store/actions/userProfile";

// Scss
import "./style.scss";

const ProfilePage = () => {
  const [value, setValue] = useState("1");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetUserProfile());
  }, []);

  const handleChangeTab = (event, newValue) => setValue(newValue);

  return (
    <Box className="container user-profile-page " component="section">
      <Container maxWidth="xl">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1 }}>
            {/* Tab titles */}
            <TabList
              onChange={handleChangeTab}
              aria-label="lab tabs"
              TabIndicatorProps={{ style: { backgroundColor: "var(--primary)" } }}
            >
              <Tab
                className="tab-user-profile"
                label="1 Thông tin tài khoản"
                value="1"
                disableRipple={true}
              />
              <Tab
                className="tab-user-profile"
                label="2 Lịch sử thanh toán"
                value="2"
                disableRipple={true}
              />
            </TabList>
          </Box>
          {/* Tabs content */}
          {/* Account info  */}
          <TabPanel value="1">
            <AccountInfo />
          </TabPanel>
          {/* Transaction history  */}
          <TabPanel value="2">
            <TransactionHistory />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
};

export default ProfilePage;
