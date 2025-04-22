import PercentageCalculator from "@/percentage-calculator"
import PercentageExamples from "@/percentage-examples"

export default function PercentageCalculatorPage() {
  return (
    <>
      <PercentageCalculator />
      <div className="container max-w-4xl mx-auto px-4 pb-8">
        <PercentageExamples />
      </div>
    </>
  )
}
