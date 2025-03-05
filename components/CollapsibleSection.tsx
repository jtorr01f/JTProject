import "@/styles/componentStyles/collapsibleSection.styles.css";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

const CollapsibleSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <button onClick={onToggle} className="collapsible-button ">
        <div>
          {title}
        </div>
        <div>
        {isOpen ? <IconChevronDown /> : <IconChevronRight />}
        </div>
      </button>
      <ul className={`subNavList ${isOpen ? "openCollapsibleItem" : "closedCollapsibleItem"}`}>{children}</ul>
    </li>
  );
};

export default CollapsibleSection;
