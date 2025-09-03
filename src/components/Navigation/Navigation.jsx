import styles from "./Navigation.module.scss";
import cn from "classnames";

export default function Nav({ links, exclude = [], size }) {
  const visible = links.filter((l) => !exclude.includes(l.href));
  return (
    <nav className={cn(styles.nav, styles[size])}>
      {visible.map((l) => (
        <a key={l.href} href={l.href}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
