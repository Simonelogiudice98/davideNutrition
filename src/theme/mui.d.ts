import "@mui/material/Paper";
import "@mui/material/Card";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    softBorder: true;
    plain: true;
    darkBorder:true;
    strongBorder:true;
  }
}

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    softBorder: true;
    plain: true;
    darkBorder:true;
    strongBorder:true;
  }
}

export {};
