import UnitConverter from "@/unit-converter"
import CommonConversions from "@/common-conversions"
import UnitConversionFormulas from "@/unit-conversion-formulas"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UnitConverterPage() {
  return (
    <>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Tabs defaultValue="converter" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="converter" className="flex-1">
              Unit Converter
            </TabsTrigger>
            <TabsTrigger value="formulas" className="flex-1">
              Conversion Formulas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="converter" className="pt-4">
            <UnitConverter />
            <div className="mt-8">
              <CommonConversions />
            </div>
          </TabsContent>
          <TabsContent value="formulas" className="pt-4">
            <UnitConversionFormulas />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
