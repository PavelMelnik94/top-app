import React from "react";
import styles from "./P.module.css";
import { PtagProps } from "./P.props";
import cn from "classnames";

export const P = ({
  size = "m",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  // switch (size) {
  //   case "14":
  //     return <p className={styles.p14}> {children} </p>;
  //   case "16":
  //     return <p className={styles.p16}> {children} </p>;
  //   case "18":
  //     return <p className={styles.p18}> {children} </p>;
  //   default:
  //     return <></>;
  // }

  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {" "}
      {children}
    </p>
  );
};
