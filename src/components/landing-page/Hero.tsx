import React from "react";
import ThemedImage from "@theme/ThemedImage";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-left-title">
            web3sdkio <br /> documentation
          </h1>
          <p className="hero-left-description">
            Welcome to the docs! Here you will find guides, references and
            resources that will help you build with web3sdkio.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-right-image-container">
            <ThemedImage
              sources={{
                light: "/assets/docs-hero-light-2.png",
                dark: "/assets/docs-hero.png",
              }}
              className="hero-right-image"
              alt="web3sdkio documentation hero image"
            />
          </div>
        </div>
      </div>

      <hr className="hero-divider" />
    </>
  );
}
