import React from "react";

type AppProps = {
  value: string;
};

export const DateTimeDisplay: React.FC<AppProps> = ({value}: AppProps) => {
    return (
        <p>{value}</p>
    );
  };