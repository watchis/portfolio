import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { BackgroundColors } from "../consts/colors";

const Cogs = ({ isFast }) => {
  const timerIdRef = useRef(null);
  const [rotate, setRotate] = useState(0);

  const spin = (interval) => {
    timerIdRef.current = setInterval(() => {
      setRotate((rotate) => (rotate === 360 ? 0 : rotate + 1));
    }, interval);
  };

  useEffect(() => {
    clearInterval(timerIdRef.current);
    spin(isFast ? 5 : 50);
  }, [isFast]);

  return (
    <CogsContainer>
      <SettingsIcon
        style={{ transform: `rotate(${rotate}deg)`, animation: "ease-out" }}
      />
      <SettingsOutlinedIcon
        style={{
          transform: `rotate(${360 - rotate}deg)`,
          animation: "ease-out",
        }}
      />
      <SettingsIcon
        style={{ transform: `rotate(${rotate}deg)`, animation: "ease-out" }}
      />
    </CogsContainer>
  );
};

export default React.memo(Cogs);

const CogsContainer = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",

  svg: {
    position: "absolute",
    color: BackgroundColors.Dark,
    display: "inline-flex",

    ":nth-of-type(1)": {
      fontSize: "650px",
      top: "-315px",
      left: "-184px",
      rotate: "90deg",
    },

    ":nth-of-type(2)": {
      fontSize: "650px",
      top: "135px",
      left: "75px",
    },

    ":nth-of-type(3)": {
      fontSize: "650px",
      top: "590px",
      left: "-177px",
      rotate: "28deg",
    },
  },
});
