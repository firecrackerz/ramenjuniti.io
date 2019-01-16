import * as React from "react";

import { CareerContentData } from "../../pages/index";

import styles from "./CareerContent.module.scss";

export default ({ name, term, position }: CareerContentData) => (
  <section className={styles.container}>
    <h3>{name}</h3>
    <p>{term}</p>
    <p>{position}</p>
  </section>
);
