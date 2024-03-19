"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from "./ui/avatar"

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Neural Networks",
      href: "/docs/machine-learning/neural-networks",
      description:
        "A computational model inspired by the structure and function of the human brain.",
    },
    {
      title: "Regression Analysis",
      href: "/docs/machine-learning/regression-analysis",
      description:
        "A statistical technique used to model the relationship between a dependent variable and one or more independent variables.",
    },
    {
      title: "Classification Algorithms",
      href: "/docs/machine-learning/classification-algorithms",
      description:
        "Algorithms used to categorize data points into discrete classes or categories.",
    },
    {
      title: "Clustering Methods",
      href: "/docs/machine-learning/clustering-methods",
      description:
        "Techniques used to group similar data points together based on their characteristics or features.",
    },
    {
      title: "Dimensionality Reduction",
      href: "/docs/machine-learning/dimensionality-reduction",
      description: "The process of reducing the number of random variables under consideration.",
    },
    {
      title: "Reinforcement Learning",
      href: "/docs/machine-learning/reinforcement-learning",
      description:
        "A type of machine learning where an agent learns to take actions in an environment to maximize some notion of cumulative reward.",
    },
  ];
  

export function Navbar() {
  return (
    <NavigationMenu className=" p-4 z-10 bg-secondary  w-screen  sm:px-0  mx-auto ">
      
        
      <NavigationMenuList>
       
        <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-secondary">GPT-4 </NavigationMenuTrigger>
<NavigationMenuContent className="ease-in">
  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    <li className="row-span-3 animate-pulse">
      
      <NavigationMenuLink asChild>
      
        <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        ><Avatar>
          <AvatarImage src="avatars/01.png"></AvatarImage>
        </Avatar>
          <div className="mb-2 mt-4 text-lg font-medium">
            GPT-4
          </div>
          <p className="text-sm leading-tight text-muted-foreground">
            The latest iteration of the Generative Pre-trained Transformer, pushing the boundaries of natural language understanding and generation.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    <ListItem href="/" title="Introduction">
      Overview of GPT-4 and its capabilities.
    </ListItem>
    <ListItem href="/" title="Installation">
      Instructions on how to install and use GPT-4.
    </ListItem>
    <ListItem href="/" title="Usage">
      Examples and use cases demonstrating GPT-4&lsquo;s capabilities.
    </ListItem>
  </ul>
</NavigationMenuContent>
</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-secondary " >Machine Learning</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  gap-3 p-3 md:w-[300px] md:grid-cols-2 lg:w-[600px]  ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="hidden  sm:block">
              Models
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem  className="px-4 sm:px-6 lg:px-10" >
            <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
      
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
