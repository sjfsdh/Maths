import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Percent, DivideIcon, Calculator } from "lucide-react"

export default function PercentageExamples() {
  return (
    <Card className="shadow-sm mt-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-4 w-4 text-amber-500" />
          Common Examples
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="percentage">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="percentage" className="flex items-center gap-2">
              <Percent className="h-4 w-4" />
              <span>Percentages</span>
            </TabsTrigger>
            <TabsTrigger value="ratio" className="flex items-center gap-2">
              <DivideIcon className="h-4 w-4" />
              <span>Ratios</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="percentage" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Sales Tax</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Item cost: $50</p>
                  <p>Sales tax: 8%</p>
                  <p>Tax amount: $50 × 0.08 = $4</p>
                  <p>Total cost: $50 + $4 = $54</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Discount</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Original price: $80</p>
                  <p>Discount: 25%</p>
                  <p>Discount amount: $80 × 0.25 = $20</p>
                  <p>Sale price: $80 - $20 = $60</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Tip Calculation</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Bill amount: $45</p>
                  <p>Tip percentage: 15%</p>
                  <p>Tip amount: $45 × 0.15 = $6.75</p>
                  <p>Total payment: $45 + $6.75 = $51.75</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ratio" className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Recipe Scaling</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Original recipe (serves 4):</p>
                  <p>2 cups flour, 1 cup sugar</p>
                  <p>To serve 6 people:</p>
                  <p>Flour: 2 × (6÷4) = 3 cups</p>
                  <p>Sugar: 1 × (6÷4) = 1.5 cups</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Aspect Ratio</div>
                <div className="mt-1 text-muted-foreground">
                  <p>16:9 aspect ratio</p>
                  <p>If width = 1920 pixels</p>
                  <p>Height = 1920 × (9÷16) = 1080 pixels</p>
                  <p>If height = 720 pixels</p>
                  <p>Width = 720 × (16÷9) = 1280 pixels</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Mixing Solutions</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Mix ratio of 3:1 (water:concentrate)</p>
                  <p>For 4 total parts:</p>
                  <p>Water: 3 parts (75%)</p>
                  <p>Concentrate: 1 part (25%)</p>
                  <p>For 2 liters total:</p>
                  <p>Water: 2 × 0.75 = 1.5 liters</p>
                  <p>Concentrate: 2 × 0.25 = 0.5 liters</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="font-medium">Financial Ratio</div>
                <div className="mt-1 text-muted-foreground">
                  <p>Debt-to-equity ratio = Total Debt ÷ Total Equity</p>
                  <p>Total Debt: $50,000</p>
                  <p>Total Equity: $200,000</p>
                  <p>Ratio = 50,000 ÷ 200,000 = 0.25 or 1:4</p>
                  <p>This means $1 of debt for every $4 of equity</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
