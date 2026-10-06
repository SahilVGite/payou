import { notFound } from "next/navigation";
import CalculatorPage from "@/components/calculator/CalculatorPage";
import { calculatorPages, getCalculatorPage } from "../../../data/calculators";

export function generateStaticParams() {
  return calculatorPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getCalculatorPage(slug);
  return page ? { title: page.label, description: page.description } : { title: "Calculators" };
}

export default async function CalculatorSlugPage({ params }) {
  const { slug } = await params;
  const page = getCalculatorPage(slug);
  if (!page) notFound();
  return <CalculatorPage page={page} />;
}
