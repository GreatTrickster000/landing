import styles from "./SectionPricing.module.scss";
import Button from "../../components/Button/Button.jsx";
import PricingCard from "../../components/PricingCards/PricingCards.jsx";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import Row from "../../components/Row/Row.jsx";
import Text from "../../components/Text/Text.jsx";
import { useState } from "react";
import { pricingData } from "../../components/Pricing-data/pricingData.js";

export default function Pricing() {
  const [period, setPeriod] = useState("monthly");
  const isAnnually = period === "annually";

  const interval = isAnnually ? "/ year" : "/ month";
  const billing = isAnnually ? "Billed annually" : "Billed monthly";
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.text} id="pricing">
          <HeaderSecondary id={"SectionPricing"} />
        </div>
        <div className={styles.button}>
          <Button
            variant={"clear"}
            text={"Monthly"}
            onClick={() => setPeriod("monthly")}
            aria-pressed={period === "monthly"}
            active={period === "monthly"}
          />
          <Button
            variant={"clear"}
            text={"Annually"}
            onClick={() => setPeriod("annually")}
            aria-pressed={period === "annually"}
            active={period === "annually"}
          />
        </div>
      </div>
      <div className={styles.card}>
        {pricingData.map(({ plan, description, price, featured, features }) => (
          <PricingCard
            key={plan}
            plan={plan}
            description={description}
            price={price[period]}
            interval={interval}
            billingCycle={billing}
            featured={featured}
          >
            {features.map((feature, i) => (
              <Row key={i}>
                <Text size="sm" color="gray">
                  {feature}
                </Text>
              </Row>
            ))}
          </PricingCard>
        ))}
      </div>
    </section>
  );
}
