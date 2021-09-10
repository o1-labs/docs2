/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easily Accessible, Now & Always",
    image: "/img/light_chain.png",
    description: (
      <>
        Other blockchain protocols are so heavy they require intermediaries to
        run nodes, recreating the same old power dynamics. But Mina is light, so
        anyone can connect peer-to-peer and quickly sync and verify the chain.
        Built on a consistent-sized cryptographic proof, the blockchain will
        stay accessible—even as it scales.
      </>
    ),
  },
  {
    title: "Truly Decentralized, with Every User Acting as a Full Node",
    image: "/img/private_powerful.png",
    description: (
      <>
        With Mina, anyone who's syncing the chain is also validating
        transactions like a full node. Mina's design means any participant can
        take part in proof-of-stake consensus, have access to strong
        censorship-resistance and secure the blockchain.
      </>
    ),
  },
  {
    title: "Connecting Crypto to the Real World",
    image: "/img/programmable_money.png",
    description: (
      <>
        Other blockchain protocols don’t interact with the internet, limiting
        their applications’ scope and utility. But Mina’s Snapps can privately
        interact with any website and access verified real world data for use
        on-chain. So developers can leverage the world’s information in
        computing and decision-making to change the way we live and work —
        without ever compromising the privacy of users' sensitive data.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
