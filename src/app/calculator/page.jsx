import CalculatorPage from "@/components/calculator/CalculatorPage";
import { defaultCalculatorPage } from "../../data/calculators";

export const metadata = { title: "Calculators", description: defaultCalculatorPage.description };

// /calculator shows the first calculator (Personal Loan EMI); its tabs link to
// /calculator/<slug> for the others.
export default function CalculatorIndexPage() {
  return <CalculatorPage page={defaultCalculatorPage} />;
}
