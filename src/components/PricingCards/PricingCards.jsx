import styles from "./PricingCards.module.scss";
import Button from "../Button/Button.jsx";
import Text from "../Text/Text.jsx";

import cn from "classnames";

export default function PricingCard({
  featured = false,
  badgeText = "Most Popular",
  plan,
  description,
  interval,
  price,
  billing_cycle,
  children,
}) {
  return (
    <div className={cn(styles.card, { [styles.featured]: featured })}>
      {featured && (
        <div className={styles.badge} role="status" aria-live="polite">
          {badgeText}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.header}>
              <h3 className={featured ? styles.accent : undefined}>{plan}</h3>
            </div>

            <div className={styles.description}>
              <Text size="sm" color="gray">
                {description}
              </Text>
            </div>
          </div>
          <div className={styles.textPair}>
            <div className={styles.price}>
              <div className={styles.numbers}>
                <h2 className={cn(styles.h2, { [styles.blue]: featured })}>
                  {price}
                </h2>
              </div>
              <div className={styles.interval}>
                <Text size="sm" color={featured ? "blue" : "gray"}>
                  {interval}
                </Text>
              </div>
            </div>
            <div className={styles.billingCycle}>
              <Text size="sm" color="gray">
                {billing_cycle}
              </Text>
            </div>
          </div>

          <div className={styles.cards}>{children}</div>
        </div>

        <div className={styles.button}>
          <Button
            variant={featured ? "primary" : "secondary"}
            text="Buy now"
            size="pricing"
          />
        </div>
      </div>
    </div>
  );
}
