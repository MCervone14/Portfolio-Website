import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabItem = ({ icon, styles, children }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} className={`text-primary icon ${styles}`} />
      {children}
    </>
  );
};

export default TabItem;
