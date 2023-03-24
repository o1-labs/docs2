/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import styles from "./HomepageFeatures.module.scss";

import Button from "@site/src/components/common/Button";
import Subhead from "@site/src/components/common/Subhead";
import ArrowRightSmall from "@site/static/svg/common/arrow_right_small.svg";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Deploy your first zkApp",
    image: "/img/homepage/zkapp_developers.png",
    buttonText: "zkApp Developers",
    buttonLink: "/zkapps",
    description: (
      <>
        {"Learn "}
        <Link to="/zkapps/how-zkapps-work" className={styles.minaLink}>
          how zero knowledge smart contracts work
        </Link>
        {" and "}
        <Link to="/zkapps/how-to-write-a-zkapp" className={styles.minaLink}>
          how to write your own using TypeScript.
        </Link>
      </>
    ),
  },
  {
    title: "About Mina",
    image: "/svg/homepage/about_mina.svg",
    buttonText: "About Mina",
    buttonLink: "/about-mina",
    description: (
      <>
        {"Learn "}
        <Link to="/about-mina" className={styles.minaLink}>
          about Mina
        </Link>
        ,
        <Link to="/about-mina/what-are-zero-knowledge-proofs" className={styles.minaLink}>
          {" "}
          zero knowledge proofs{" "}
        </Link>
        , & read the{" "}
        <Link
          href="https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf"
          className={styles.minaLink}
        >
          {" "}
          Mina whitepaper{" "}
        </Link>
        .
      </>
    ),
  },
  {
    title: "Using Mina",
    image: "/svg/homepage/using_mina.svg",
    buttonText: "Using Mina",
    buttonLink: "/using-mina/install-a-wallet",
    description: (
      <>
        Where to get MINA,{" "}
        <Link to="/using-mina/install-a-wallet" className={styles.minaLink}>install a wallet,{" "}
        </Link> & more.
      </>
    ),
  },
  {
    title: "Run a Node",
    image: "/svg/homepage/node_operators.svg",
    buttonText: "Node Operators",
    buttonLink: "/node-operators/getting-started",

    description: (
      <>
        Learn how to run a Mina node as a block producer or snark worker to
        participate in consensus.
      </>
    ),
  },
  {
    title: "Participate",
    image: "/svg/homepage/participate.svg",
    buttonText: "Online Communities",
    buttonLink: "/participate/online-communities",
    description: (
      <>
        <Link to="/participate/online-communities" className={styles.minaLink}>
          Join the community
        </Link>
        ,{" "}
        <Link to="/participate/grants-and-programs" className={styles.minaLink}>
          apply for grants & the zkApps Builders Program
        </Link>
        ,{" "}
        <Link to="/participate/github" className={styles.minaLink}>
          become a code contributor
        </Link>
        , & more.
      </>
    ),
  },
];

function RowFeature({
  title,
  image,
  description,
  buttonText,
  buttonLink,
}: FeatureItem) {
  return (
    <div className={styles.featuresGridRow}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className={styles.minaButtonLink} to={buttonLink}>
          <Button color="dark">
            <span>{buttonText}</span>
            <ArrowRightSmall />
          </Button>
        </Link>
      </div>
      <img alt={title} src={image} />
    </div>
  );
}

function ColumnFeature({
  title,
  image,
  description,
  buttonText,
  buttonLink,
}: FeatureItem) {
  return (
    <div className={styles.featuresGridColumn}>
      <img alt={title} src={image} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className={styles.minaButtonLink} to={buttonLink}>
          <Button color="dark">
            <span>{buttonText}</span>
            <ArrowRightSmall />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <Subhead>
        Mina is a layer-1 blockchain with a 22KB blockchain & zero knowledge
        smart contracts (“zkApps”) written in TypeScript.
      </Subhead>
      <section className={styles.featuresGrid}>
        {FeatureList.map((props, idx) => {
          if (idx === 0) {
            return <RowFeature key={idx} {...props} />;
          }
          return <ColumnFeature key={idx} {...props} />;
        })}
      </section>
    </div>
  );
}
