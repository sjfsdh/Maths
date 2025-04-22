import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ToolCardProps {
  tool: {
    id: string
    title: string
    description: string
    longDescription?: string
    icon: LucideIcon
    color: string
    textColor: string
    image?: string
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  const { id, title, description, longDescription, icon: Icon, color, textColor, image } = tool

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 opacity-60 ${color}`}></div>
        <div className="absolute top-4 left-4 z-10">
          <div className={`rounded-full bg-white dark:bg-gray-800 p-2 ${textColor}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <CardHeader className="p-6">
        <h3 className={`text-xl font-semibold ${textColor.replace("text-", "text-")}`}>{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-muted-foreground">{longDescription || description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className={`w-full ${color.replace("bg-", "bg-").replace("dark:bg-", "dark:bg-").replace("-100", "-600").replace("-950", "-600")} hover:${color.replace("bg-", "bg-").replace("dark:bg-", "dark:bg-").replace("-100", "-700").replace("-950", "-700")} text-white`}
        >
          <Link href={`/tools/${id}`}>Launch Tool</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
