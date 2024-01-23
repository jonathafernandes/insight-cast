import { PricingCard } from "./PricingCard";

export function Pricing() {
    return (
        <div>
            <span>Find your perfect fit</span>
            <h2>Choose your best plan</h2>
            <p>Select the plan that suits your needs and benefit from our analytics tools.</p>
            <div>
                <PricingCard plan="Basic" price="$29" />
                <PricingCard plan="Premium" price="$59" />
                <PricingCard plan="Enterprise" price="$99" />
            </div>
        </div>
    );
}