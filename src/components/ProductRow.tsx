"use client";

import { MoreHorizontal, Edit3, Trash2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// shadcn components you'll need to install/import
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import EditProduct from "./EditProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ProductRow = ({
  id,
  name,
  latinName,
  category,
  stock,
  price,
}: any) => {

  const router = useRouter();

  const handleRoute = ()=>{
    router.push(`/products/${id}`)
  }


  return (
    
      <TableRow onClick={()=>handleRoute()} className="group border-white/5 hover:bg-white/[0.02] hover:cursor-pointer">
        <TableCell className="font-mono text-[11px] text-muted-foreground uppercase">
          {id}
        </TableCell>

        <TableCell>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-white/90">{name}</span>
            <span className="text-[10px] italic text-muted-foreground uppercase tracking-wider">
              {latinName}
            </span>
          </div>
        </TableCell>

        <TableCell className="text-[11px] font-mono uppercase text-muted-foreground">
          {category}
        </TableCell>
        <TableCell className="text-xs font-medium">{stock} Units</TableCell>
        <TableCell className="text-right font-mono text-sm font-semibold">
          Rs{price}
        </TableCell>

        <TableCell className="text-right">
          {/* We wrap the whole dropdown logic here */}
          <AlertDialog>
            <Sheet>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="bg-[#0a0a0a] border-white/10"
                >
                  {/* TRIGGER EDIT SHEET */}
                  <SheetTrigger asChild>
                    <DropdownMenuItem className="text-xs gap-2">
                      <Edit3 size={14} /> Edit Specimen
                    </DropdownMenuItem>
                  </SheetTrigger>

                  <DropdownMenuSeparator className="bg-white/5" />

                  {/* TRIGGER DELETE PROMPT */}
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem className="text-xs gap-2 text-red-500 focus:text-red-500">
                      <Trash2 size={14} /> Delete Entry
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ---------- EDIT SHEET CONTENT ---------- */}
              <SheetContent className="bg-[#0a0a0a] border-l-white/10 text-white sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="font-mono uppercase text-[#ecec25]">
                    Edit_Specimen
                  </SheetTitle>
                  <SheetDescription className="text-white/40">
                    Update registry data for {id}. Changes are permanent.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-4">
                  {/* Your Form Fields (Input, Select, etc.) would go here */}
                  <EditProduct
                    name={name}
                    latinName={latinName}
                    category={category}
                    price={price}
                    stock={stock}
                  />
                </div>
              </SheetContent>

              {/* ---------- DELETE ALERT CONTENT ---------- */}
              <AlertDialogContent className="bg-[#0a0a0a] border-white/10 text-white">
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <AlertCircle size={20} />
                    <AlertDialogTitle className="font-mono uppercase">
                      Confirm_Deletion
                    </AlertDialogTitle>
                  </div>
                  <AlertDialogDescription className="text-white/40">
                    Are you sure you want to remove{" "}
                    <span className="text-white font-medium">{name}</span> from
                    the registry? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-transparent border-white/10 hover:bg-white/5 text-white">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
                    Delete Specimen
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </Sheet>
          </AlertDialog>
        </TableCell>
      </TableRow>
    
  );
};
