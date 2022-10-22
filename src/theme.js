import { colors, createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette:{
        primary:{
            main:colors.blue[400]
        },
        secondary:{
            main:colors.grey[400]
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 550,
          md: 750,
          lg: 1280,
          xl: 1920,
        },
      },
})