import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ToolCardProps {
  tool: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    color: string
    textColor: string
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  const { id, title, description, icon: Icon, color, textColor } = tool

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className={`${color} p-6`}>
        <div className="flex items-center gap-3">
          <div className={`rounded-full bg-white dark:bg-gray-800 p-2 ${textColor}`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/tools/${id}`} target="_blank">
            Launch Tool
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
