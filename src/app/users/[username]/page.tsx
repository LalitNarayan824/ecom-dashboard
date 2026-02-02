import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";

const SingleUserPage = () => {
  return (
    <div className="p-3">
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINERS */}

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold ">User Badges</h1>
            <div className="flex gap-4 mt-4">
              {/* list of badges */}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full p-2 bg-blue-400/50 border border-blue-400"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-sm">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full p-2 bg-red-400/50 border border-red-500"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-sm">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full p-2 bg-yellow-400/50 border border-yellow-500"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-sm">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full p-2 bg-green-400/50 border border-green-400"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-sm">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-xl font-semibold ">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser/>
                
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={33} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold"> Username :</span>
                <span> John Doe </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold"> Email :</span>
                <span> someting@gmail.com </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold"> Phone :</span>
                <span> +91 000 000 000 </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold"> Location :</span>
                <span> some locaion </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold"> Role :</span>
                <Badge>Admin</Badge>
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                Joined on 01.01.2026
              </p>
            </div>
          </div>
          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent transactions" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            user card info{" "}
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            {" "}
            chart container
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
