import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Jobs
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Analyzing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component='p' align="center">
                &copy; 2024 My company. All rights reserved.
            </Typography>
            <Typography variant="body2" component='p' align="center">
                Made with React
            </Typography>
            <Typography variant="body2" component='p' align="center">
                Icons made by MUI
                <Link href='https://www.freepik.com' color='inherit' underline="alwyas">
                    Freepik
                </Link> from 
                <Link href='https://www.flaticon.com' color='inherit' underline="always"> Flaticon</Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
