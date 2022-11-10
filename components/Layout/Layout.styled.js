import styled from "styled-components";

import { media } from "./../../utils/media";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${media(">=smallPhone")} {
    max-width: 375px;
  }

  ${media(">=phone")} {
    max-width: 375px;
  }

  ${media(">=tablet")} {
    max-width: 768px;
  }

  ${media(">=desktop")} {
    max-width: 1024px;
  }

  ${media(">=largeDesktop")} {
    max-width: 1280px;
  }
`;
