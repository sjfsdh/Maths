import { redirect } from "next/navigation"

export default function NotFound() {
  // Redirect to the custom 404 page in the pages directory
  redirect("/404")
}
