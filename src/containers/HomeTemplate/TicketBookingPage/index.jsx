// Material UI
import {
  Box,
  Container,
  Grid,
  Divide,
  Typography,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const TicketBookingPage = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "#606060", padding: "30px" }}>
      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        <Grid container spacing={7}>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: "#fff", height: "700px" }}></Box>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "0",
              }}
            >
              <CardHeader>
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ fontWeight: 700, mb: "16px", textAlign: "center" }}
                >
                  THOR: TÌNH YÊU VÀ SẤM SÉT
                </Typography>
              </CardHeader>
              <List>
                <ListItem>
                  <ListItemText sx={{ fontSize: "20px" }}>
                    <strong>Rạp:</strong> BHD Star Cineplex - 3/2
                  </ListItemText>
                  {/* <Typography component="p" variant="body1" sx={{ fontSize: "20px" }}></Typography> */}
                </ListItem>
                <Typography component="p" variant="body1">
                  <strong>Địa chỉ:</strong> L5-Vincom 3/2, 3C Đường 3/2, Q.10
                </Typography>
                <Typography component="p" variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Ngày chiếu</strong> 18/08/2021 - 09:08 - Rạp 4
                </Typography>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TicketBookingPage;
