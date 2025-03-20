import styled from "styled-components";
import { COLORS, DEVICES } from "../theme";
import HeaderImg from "../assets/images/header-title-img.png";
import VideoBg from "../assets/images/video-bg.png";

export const NavWrapper = styled.nav`
  background-color: ${COLORS.white};
  height: 90px;
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    padding: 10px 20px;
  }
  .call {
    width: 42px;
    height: 42px;
    border: 1px solid #f2b304;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      width: 36px;
      height: 36px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  height: 600px;
  display: flex;
  position: relative;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    height: unset;
    flex-direction: column-reverse;
  }
  .heading-section {
    width: 65%;
    position: relative;
    background-image: url(${HeaderImg});
    background-size: cover;
    display: flex;
    align-items: center;
    padding-left: 120px;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      width: 100%;
      padding-left: 20px;
      text-align: center;
    }
    .main-title {
      font-size: 58px;
      letter-spacing: -1px;
      font-weight: 700;
      @media ${DEVICES.xs} and ${DEVICES.md} {
        font-size: 20px;
        font-weight: 600;
      }
      .amount {
        color: ${COLORS.primary2};
      }
    }
  }
  .video-section {
    width: 35%;
    background-image: url(${VideoBg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: inherit;
    display: flex;
    align-items: center;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      width: 100%;
      background-position: bottom;
    }
    video {
      width: 388px;
      height: 388px;
      position: absolute;
      right: 100px;
      @media ${DEVICES.xs} and ${DEVICES.md} {
        width: 320px;
        height: 320px;
        position: relative;
        right: unset;
      }
    }
  }
`;

export const OptionWrapper = styled.div`
  margin: 120px;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    margin: 50px 20px;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: #00000030;
    grid-gap: 0.5px;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: unset;
      background-color: ${COLORS.white};
      grid-gap: 12px;
    }
    .item {
      height: 80px;
      background: ${COLORS.white};
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 20px;
      @media ${DEVICES.xs} and ${DEVICES.md} {
        padding: 12px;
        flex-direction: column;
        align-items: center;
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
        justify-content: space-evenly;
      }
      .icon {
        margin-right: 10px;
        @media ${DEVICES.xs} and ${DEVICES.md} {
          margin-right: 0px;
        }
      }
      .title {
        font-size: 18px;
        font-weight: 500;
        color: ${COLORS.textColor1};
        @media ${DEVICES.xs} and ${DEVICES.md} {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
`;

export const SubTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.3px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    font-size: 24px;
    margin-bottom: 30px;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-10px);
    }
  }
  .explore-icon {
    display: flex;
    cursor: pointer;
    img {
      width: 24px;
      animation: bounce 1s infinite;
    }
  }
`;

export const CardWrapper = styled.div`
  margin: 120px;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    margin: 50px 20px;
  }
  .cards-wrapper {
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 45px;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      grid-template-columns: repeat(1, 1fr);
      background-color: ${COLORS.white};
    }
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0 1.08px 8.63px rgba(0, 0, 0, 0.06);
  padding: 12px;
  border-radius: 8px;
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      @media ${DEVICES.xs} and ${DEVICES.md} {
        font-size: 18px;
      }
    }
    .location-details {
      cursor: pointer;
      margin: 0 5px;
      background: #eee7e7;
      min-width: 52px;
      min-height: 52px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }
      .kms {
        font-size: 8px;
        font-weight: 500;
        margin-top: 8px;
      }
    }
  }
  .image-wrapper {
    position: relative;
    margin-bottom: 22px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .label-details {
      height: 32px;
      background: linear-gradient(to bottom, #263238, #2f4b59);
      border-radius: 5px;
      position: absolute;
      top: 8px;
      left: 8px;
      padding: 7.5px;
      color: ${COLORS.primary2};
      text-shadow: 0px 2px 6px rgba(255, 187, 0, 0.5);
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 500;
      img {
        width: 12px;
      }
      @media ${DEVICES.xs} and ${DEVICES.md} {
        font-size: 12px;
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    button {
      position: relative;
      cursor: pointer;
      border-radius: 6px;
      min-width: 130px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px;
      .discount-card {
        position: absolute;
        top: -9px;
        left: 0;
        transform: translateX(50%);
        font-size: 8px;
        height: 18px;
        display: flex;
        align-items: center;
        background: #263238;
        color: #fffdf7;
        padding: 4px 8px;
        border-radius: 3px;
      }
      .button-name {
        font-size: 12px;
        font-weight: 500;
        text-align: left;
        color: ${COLORS.textColor2};

        .price {
          font-size: 20px;
          font-weight: 600;
          margin-top: 8px;
          color: ${COLORS.textColor1};
        }
      }
    }
    .day-pass {
      background: ${COLORS.buttonLightGray};
      border: 0.5px solid #eee7e7c7;
    }
    .bulk-pass {
      background: #ffc422;
      border: none;
    }
  }
`;

export const FooterWrapper = styled.footer`
  margin: 120px;
  @media ${DEVICES.xs} and ${DEVICES.md} {
    margin: 50px 20px;
  }
  .footer-title {
    font-size: 36px;
    font-weight: 700;
    color: #605f5f;
    margin-bottom: 40px;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
  .footer-section {
    display: flex;
    align-items: end;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      display: block;
      text-align: -webkit-center;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0.86px 6.92px rgba(0, 0, 0, 0.06);
    }
    }
    .footer-img {
      width: 80%;
      img {
        width: 100%;
      }
    }
  }
  .footer-content {
    padding: 35px 70px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0px 2px 19px #00000024;
    @media ${DEVICES.xs} and ${DEVICES.md} {
      border-bottom-right-radius: none;
      border-top-right-radius: noe;
      box-shadow: none;
      padding: 12px;
    }
    .footer-para {
      font-size: 20px;
      color: #605f5f;
      font-weight: 500;
      @media ${DEVICES.xs} and ${DEVICES.md} {
        display: none;
      }
    }
    .play-store-icons {
      display: flex;
      gap: 24px;
      img {
        width: 146px;
        cursor: pointer;
      }
    }
  }
`;

export const CopyWrapper = styled.div`
  color: #dddddd;
  background: #222e34;
  text-align: center;
  padding: 14px;
  font-size: 14px;
  font-weight: 400;
`;
