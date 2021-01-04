import { InlineIcon } from "@iconify/react";
import rocketIcon from "@iconify-icons/noto/rocket";

export const Header = () => {
  return (
    <div className="header">
      <h2>
        Earth Observatory Natural Event Tracker — Powered by NASA{" "}
        <InlineIcon icon={rocketIcon} className="rocket-icon" />
      </h2>
    </div>
  );
};
