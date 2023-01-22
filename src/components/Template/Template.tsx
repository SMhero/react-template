import { useQuery } from "@tanstack/react-query";
import cn from "classnames";
import { FC, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

import { getUsers, Users } from "api/users";
import TemplateIcon from "assets/images/react-template.svg";
import Spinner from "components/Spinner/Spinner";

import styles from "./styles.css";

const transitionClasses: Record<TransitionStatus, string> = {
  entering: styles.dataEntering,
  entered: styles.dataEntered,
  exiting: styles.dataExiting,
  exited: styles.dataExited,
  // @NOTE: unmounted doesnt' use but type is required. need to figure out.
  unmounted: "",
};

const ANIMATION_STEP = 80; // ms
const ANIMATION_TIMEOUT = 240; // ms
const DISTANCE = 8; // px
const OPACITY_TIMEOUT = ANIMATION_TIMEOUT - ANIMATION_STEP;
const TRANSITION_TYPE = "ease-in-out";

const Template: FC = () => {
  const [isDataShow, setIsDataShow] = useState<boolean>(false);
  const { data, isFetching, error, refetch, dataUpdatedAt } = useQuery<
    Users[],
    Error
  >(["users"], getUsers, {
    enabled: false,
    onSuccess: () => {
      setIsDataShow(true);
    },
  });
  const dataRef = useRef<HTMLDivElement | null>(null);

  const requestTime = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : "not requested yet";
  const isSubmitBtnDisabled = !!error;

  const getStyles = (state: TransitionStatus): React.CSSProperties => {
    const isExited = state === "exited" || state === "exiting";
    const transform = isExited
      ? `translateY(${-DISTANCE}px)`
      : "translateY(0px)";

    return {
      transform,
      transition: `transform 240ms ${TRANSITION_TYPE},
        opacity ${OPACITY_TIMEOUT}ms ${TRANSITION_TYPE} ${
        OPACITY_TIMEOUT - ANIMATION_STEP
      }ms`,
    };
  };

  const onClick = () => {
    refetch();
  };

  const renderContent = () => {
    if (error?.cause) {
      return (
        <div className={styles.error}>
          {String(error.cause)}
          <button
            className={cn(styles.button, styles.errorButton)}
            onClick={onClick}
            type="submit"
          >
            Try again
          </button>
        </div>
      );
    }

    if (isFetching) {
      return <Spinner className={styles.spinner} />;
    }

    return (
      <Transition
        nodeRef={dataRef}
        in={isDataShow}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
      >
        {state => (
          <div
            ref={dataRef}
            className={cn(styles.data, transitionClasses[state])}
            style={getStyles(state)}
          >
            {data ? (
              <pre className={styles.code}>{JSON.stringify(data, null, 4)}</pre>
            ) : (
              <div className={cn(styles.noData, styles.code)}>
                No data here... Try to push submit button!
              </div>
            )}
          </div>
        )}
      </Transition>
    );
  };

  return (
    <div>
      <div className={styles.title}>
        <TemplateIcon className={styles.logo} width={68} height={68} />
        <h1 className={styles.titleText}>React Template</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <span>The last request time: {requestTime}</span>
          <button className={styles.button} onClick={onClick} type="submit">
            Submit
          </button>
          <button
            className={styles.button}
            disabled={isSubmitBtnDisabled}
            onClick={() => setIsDataShow(!isDataShow)}
            type="submit"
          >
            {isDataShow ? "Hide data" : "Show data"}
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Template;
