import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full flex items-center gap-10"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <img alt="logo" className="h-8 w-8" src="/logo.svg" />
            <div className="text-3xl font-light tracking-wide">
              Coin<span className="font-semibold">stick</span>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          <NavbarItem className="data-[active=true]:text-primary data-[active=true]:font-medium text-md tracking-wider hover:bg-slate-100 dark:hover:bg-primary hover:text-primary p-2 rounded-lg font-light flex items-center hover:cursor-pointer">
            Company
          </NavbarItem>
          <NavbarItem className="data-[active=true]:text-primary data-[active=true]:font-medium text-md tracking-wider hover:bg-slate-100 dark:hover:bg-primary hover:text-primary p-2 rounded-lg font-light flex items-center hover:cursor-pointer">
            Product
          </NavbarItem>
          <NavbarItem className="data-[active=true]:text-primary data-[active=true]:font-medium text-md tracking-wider hover:bg-slate-100 dark:hover:bg-primary hover:text-primary p-2 rounded-lg font-light flex items-center hover:cursor-pointer">
            Customers
          </NavbarItem>
          <NavbarItem className="data-[active=true]:text-primary data-[active=true]:font-medium text-md tracking-wider hover:bg-slate-100 dark:hover:bg-primary hover:text-primary p-2 rounded-lg font-light flex items-center hover:cursor-pointer">
            Careers
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-md tracking-wider font-semibold px-6 dark:bg-cyan-400 bg-cyan-600 text-white dark:text-black hover:bg-transparent hover:text-cyan-600 dark:hover:text-cyan-400 border-transparent hover:border-cyan-600 dark:hover:border-cyan-400"
            variant="ghost"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-5">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-black dark:text-cyan-400"
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <Button
          isExternal
          as={Link}
          className="text-lg mt-10 tracking-wider font-semibold px-6 dark:bg-cyan-400 bg-cyan-600 text-white dark:text-black hover:bg-transparent hover:text-cyan-600 dark:hover:text-cyan-400 border-transparent hover:border-cyan-600 dark:hover:border-cyan-400"
          variant="ghost"
        >
          Become an Ambassador
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
};
