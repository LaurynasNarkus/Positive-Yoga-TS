import React from "react";
import styled from 'styled-components/macro';
import ImgSafeCheckout from "../../../assets/images/SafeCheckout.png";
import { tablet } from 'styles/breakpoints';

export const Conditions: React.FC = () => {
  return (
    <HeaderW>
        <ConditionsW>
            After 7 days free trial subscription payment is automatically
            charged from your account unless it is canceled at least 24
            hours before the end of the trial period.
        </ConditionsW>
        <ConditionsW>
            By choosing a payment method you agree to the{" "}
            <Link href="/#">T&Cs</Link> and{" "}
            <Link href="/#">Privacy Policy</Link>
        </ConditionsW>
        <ConditionsW>
        <img
            src={ImgSafeCheckout}
            alt="SafeCheckout"
            />
            </ConditionsW>
    </HeaderW>
  );
};

const HeaderW = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 1rem;

    @media ${tablet} {
        width: 100%;
        text-align: center;
        }
`;

const ConditionsW = styled.p`
    font-size: 0.75rem;
`;

const Link = styled.a`
    &:link {
        text-decoration: none;
        color: #90caf9;
    }
    &:visited {
        text-decoration: none;
        color: #90caf9;
    }
    &:hover {
        text-decoration: none;
        color: #72b9f3;
    }
    &:active {
        text-decoration: none;
        color: #90caf9;
    }
`;