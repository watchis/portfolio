import { Box } from "@mui/system";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocumentResume from "./resume/documentResume";
import { Container, styled, Button } from "@mui/material";
import { BackgroundColors, ThemeColors } from "./../../consts/colors";
import { PageTitle } from "../shared/page_title";
import React from "react";

const Resume = (_, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        display: "flex",
        height: { sm: "100%", xs: "100vh" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        gap="24px"
      >
        <PageTitle>
          My <span style={{ color: ThemeColors.Orange }}>Resume</span>
        </PageTitle>
        <Box sx={{ display: { sm: "contents", xs: "none" } }}>
          <PDFViewer width="100%" height={550} style={pdfStyle}>
            <DocumentResume />
          </PDFViewer>
        </Box>
        <DownloadLink
          document={<DocumentResume />}
          fileName="Software Engineer - Warren Atchison.pdf"
          className="nameContainer"
          style={{ textDecoration: "none" }}
        >
          {({ loading }) =>
            loading ? (
              <DownloadButton disabled className="buttonDL disabled">
                Loading ...
              </DownloadButton>
            ) : (
              <DownloadButton className="">Download Resume</DownloadButton>
            )
          }
        </DownloadLink>
      </Box>
    </Container>
  );
};

export default React.forwardRef(Resume);

const DownloadLink = styled(PDFDownloadLink)({
  color: BackgroundColors.Dark,

  ".buttonDL": {
    padding: "8px 24px",
    fontSize: "1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "0.3s",
  },

  ".download": {
    color: "white",
    background: BackgroundColors.Dark,
    border: `2px ${BackgroundColors.Dark} solid`,

    "&:hover": {
      color: BackgroundColors.Dark,
      borderRadius: "0",
      background: "transparent",
    },

    ".disabled": {
      border: "2px gray solid",
    },
  },
});

const DownloadButton = styled(Button)({
  userSelect: "none",
  fontFamily: "'Maven Pro Variable', sans-serif",
  textAlign: "center",
  fontSize: "16px",
  color: ThemeColors.OffWhite,

  backgroundColor: BackgroundColors.Dark,

  border: "1px solid",
  borderColor: ThemeColors.Orange,

  marginBottom: "4px",

  transition: "0.15s",

  "&:hover": {
    filter: `drop-shadow(0 0 0.50rem ${ThemeColors.Orange})`,
    cursor: "pointer",
  },
});

const pdfStyle = {
  userSelect: "none",
  border: "1px solid transparent",
  marginBottom: "24px",
  background: "transparent",
};
