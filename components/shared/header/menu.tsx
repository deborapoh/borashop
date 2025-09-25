import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeToggle />
        <CartButton />
        <SignInButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ThemeToggle />
            <CartButton />
            <SignInButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

const CartButton = () => {
  return (
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCart /> Cart
      </Link>
    </Button>
  )
}

const SignInButton = () => {
  return (
    <Button asChild>
      <Link href="/sign-in">
        <UserIcon /> Sign In
      </Link>
    </Button>
  )
}

export default Menu
