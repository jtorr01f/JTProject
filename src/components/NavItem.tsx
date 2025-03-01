import "@/styles/componentStyles/sidebar.styles.css";
import Link from "next/link";

const NavItem = ({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`link ${active ? 'activeLink' : ''}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
