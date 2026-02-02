"use client"

import { ChevronLeft, Edit3, Trash2, Calendar, Package, Tag, DollarSign, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import EditProduct from "@/components/EditProduct"; 
import { useParams } from "next/navigation";
// Import Alert Components
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

export default function ProductDetailPage() {
  const params = useParams();

  const product = {
    id: params.id,
    name: "Obsidian Tulip",
    latinName: "Tulipa nightshade",
    category: "Flowers",
    price: 1200,
    stock: 42,
    description: "A rare, deep-pigmented specimen sourced from the volcanic regions. Known for its velvet-like petals and exceptional longevity in cool environments.",
    createdAt: "Jan 12, 2026",
  };

  return (
    <div className="w-full min-h-screen bg-background">
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b border-white/10 px-8 py-4 flex items-center justify-between bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/products" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Specimen_Node</span>
              <span className="text-[10px] font-mono text-emerald-500 uppercase">{product.id}</span>
            </div>
            <h1 className="text-xl font-medium">{product.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* EDIT SHEET */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2 border-white/10 hover:bg-white/5">
                <Edit3 size={16} /> Edit Specimen
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0a0a0a] border-l-white/10 text-white sm:max-w-md overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-mono uppercase text-[#ecec25]">Edit_Specimen</SheetTitle>
              </SheetHeader>
              <EditProduct {...product}  />
            </SheetContent>
          </Sheet>

          {/* DELETE ALERT DIALOG */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2 bg-red-600/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                <Trash2 size={16} /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#363636] border-white/10 text-white">
              <AlertDialogHeader>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <AlertTriangle size={20} />
                  <AlertDialogTitle className="font-mono uppercase">Confirm_Deletion</AlertDialogTitle>
                </div>
                <AlertDialogDescription className="text-white/40">
                  Are you sure you want to remove <span className="text-white font-medium">{product.name}</span> from the archive? 
                  This will permanently delete the specimen data and visual logs.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-transparent border-white/10 hover:bg-white/5">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">Confirm_Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* LEFT SIDE: Narrative */}
        <div className="lg:col-span-8 p-12 space-y-12 border-r border-white/10">
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-500 font-mono">Narrative_Report</h2>
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl font-serif">
              {product.description}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-500 font-mono">Visual_Archive</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/10 italic text-sm font-mono">Image_01</div>
              <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/10 italic text-sm font-mono">Image_02</div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE: Tech Specs */}
        <div className="lg:col-span-4 p-12 bg-white/[0.01] space-y-10">
          <div className="space-y-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-500 font-mono">Technical_Specifications</h2>
            <div className="space-y-6">
              <SpecItem icon={<Tag size={16}/>} label="Classification" value={product.category} />
              <SpecItem icon={<Package size={16}/>} label="Inventory_Level" value={`${product.stock} Units`} />
              <SpecItem icon={<DollarSign size={16}/>} label="Unit_Value" value={`$${product.price}`} />
              <SpecItem icon={<Calendar size={16}/>} label="Registered_On" value={product.createdAt} />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-4 font-mono">Market_Status</h2>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg flex items-center justify-between">
              <span className="text-sm text-emerald-500/80">Public Visibility</span>
              <Badge className="bg-emerald-500 text-white border-none">Live</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ icon, label, value }: { icon: any, label: string, value: string|number }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-white/5 rounded-lg text-white/40">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</p>
        <p className="text-sm font-medium text-white/90">{value}</p>
      </div>
    </div>
  );
}