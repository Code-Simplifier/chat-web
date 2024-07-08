"use client"

import { bold, secondary } from "@/components/providers/font-provider"
import { ChevronsRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const Register = () => {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl uppercase">Create an <span className="text-primary">account</span> </CardTitle>
      </CardHeader>
      <CardContent className={cn(secondary.className, "grid gap-4")}>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-muted-foreground">
              Or <span className={cn(bold.className, "text-primary hover:underline")}>login</span>
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className={cn(bold.className)}>Email</Label>
          <Input id="email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className={cn(bold.className)}>Name</Label>
          <Input id="password" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className={cn(bold.className)}>Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"><ChevronsRight /></Button>
      </CardFooter>
    </Card>
  )
}

export default Register