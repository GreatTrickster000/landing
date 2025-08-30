import styles from "./SectionPricing.module.scss";
import Button from "../../components/Button/Button.jsx";
import PricingCard from "../../components/PricingCards/PricingCards.jsx";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import Row from "../../components/Row/Row.jsx";
import Text from "../../components/Text/Text.jsx";
import { useState } from "react";

export default function Pricing() {
  const [period, setPeriod] = useState("monthly");
  const isAnnually = period === "annually";

  const prices = {
    monthly: { basic: "9.99", standard: "19.99", premium: "29.99" },
    annually: { basic: "99.99", standard: "189.99", premium: "289.99" },
  };

  const interval = isAnnually ? "/ year" : "/ month";
  const billing = isAnnually ? "Billed annually" : "Billed monthly";

  return (
    <section>
      <div className={styles.content}>
        <div className={styles.text} id="pricing">
          <HeaderSecondary
            text1={"Pricing Tiers"}
            headerText={"Fit for all your needs"}
            text2={
              "Pick the plan that suits you today and " +
              "step up as your demands grow - our flexible options\n have your journey mapped out."
            }
          />
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
        <PricingCard
          plan={"Basic Plan"}
          description={"Access to a curated selection of abstract\n images"}
          price={prices[period].basic}
          interval={interval}
          billing_cycle={billing}
        >
          <Row>
            <Text size="sm" color="gray">
              Standard quality images
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Limited to personal use
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Email support
            </Text>
          </Row>
        </PricingCard>
        <PricingCard
          plan={"Standard Plan"}
          description={"Next-level Integrations, priced economically"}
          price={prices[period].standard}
          interval={interval}
          billing_cycle={billing}
          featured={true}
        >
          <Row>
            <Text size="sm" color="gray">
              Expanded library with more diverse abstract images
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              High-resolution images available
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Suitable for commercial use
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Priority email support
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Advanced analytics
            </Text>
          </Row>
        </PricingCard>
        <PricingCard
          plan={"Premium Plan"}
          description={"Experience limitless living for power users"}
          price={prices[period].premium}
          interval={interval}
          billing_cycle={billing}
        >
          <Row>
            <Text size="sm" color="gray">
              Full access to the entire image library, including exclusive
              content
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Highest quality images, including premium collections
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Commercial and resale rights
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Dedicated customer support line
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              24/7 support response time
            </Text>
          </Row>
          <Row>
            <Text size="sm" color="gray">
              Advanced analytics and insights
            </Text>
          </Row>
        </PricingCard>
      </div>
    </section>
  );
}
