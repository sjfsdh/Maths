import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler, Scale, Thermometer } from "lucide-react"

export default function CommonConversions() {
  return (
    <Card className="shadow-sm mt-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Common Conversion Factors</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="length">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="length" className="flex items-center gap-2">
              <Ruler className="h-4 w-4" />
              <span>Length</span>
            </TabsTrigger>
            <TabsTrigger value="mass" className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span>Mass</span>
            </TabsTrigger>
            <TabsTrigger value="temperature" className="flex items-center gap-2">
              <Thermometer className="h-4 w-4" />
              <span>Temperature</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="length" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Metric</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 km = 1000 m</li>
                  <li>1 m = 100 cm</li>
                  <li>1 cm = 10 mm</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Imperial/US</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 mile = 5280 feet</li>
                  <li>1 yard = 3 feet</li>
                  <li>1 foot = 12 inches</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Metric to Imperial</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 inch = 2.54 cm</li>
                  <li>1 foot = 0.3048 m</li>
                  <li>1 mile = 1.60934 km</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mass" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Metric</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 t = 1000 kg</li>
                  <li>1 kg = 1000 g</li>
                  <li>1 g = 1000 mg</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Imperial/US</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 US ton = 2000 pounds</li>
                  <li>1 stone = 14 pounds</li>
                  <li>1 pound = 16 ounces</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Metric to Imperial</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>1 kg = 2.20462 pounds</li>
                  <li>1 pound = 0.453592 kg</li>
                  <li>1 ounce = 28.3495 g</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="temperature" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Celsius to Fahrenheit</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>°F = (°C × 9/5) + 32</li>
                  <li>0°C = 32°F (freezing)</li>
                  <li>100°C = 212°F (boiling)</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Fahrenheit to Celsius</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>°C = (°F - 32) × 5/9</li>
                  <li>32°F = 0°C (freezing)</li>
                  <li>212°F = 100°C (boiling)</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Kelvin Conversions</div>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  <li>K = °C + 273.15</li>
                  <li>°C = K - 273.15</li>
                  <li>0 K = -273.15°C (absolute zero)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
