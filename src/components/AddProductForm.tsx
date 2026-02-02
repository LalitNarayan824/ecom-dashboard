"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload, ChevronLeft, Save, X } from "lucide-react"
import Link from "next/link"

export default function AddProductPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. STICKY TOP BAR: Actions are always visible */}
      <div className="sticky top-0 z-10 w-full border-b border-white/10 bg-black/50 backdrop-blur-md px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/curator/products" className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-medium leading-none">New Product</h1>
              <p className="text-xs text-muted-foreground mt-1">Products / Create</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm">Discard</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 px-6">
              <Save size={16} /> Save Specimen
            </Button>
          </div>
        </div>
      </div>

      {/* 2. TWO-COLUMN FULL WIDTH CONTENT */}
      <form className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* LEFT SECTION (Main Content - 65% width) */}
        <div className="lg:col-span-8 p-8 space-y-8 border-r border-white/10">
          
          {/* Section: Basic Details */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="e.g. Obsidian Tulip" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="latin">Scientific Name</Label>
                <Input id="latin" placeholder="e.g. Tulipa nightshade" className="h-11 italic" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Product Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe the specimen's unique characteristics..." 
                className="min-h-[250px] text-base leading-relaxed" 
              />
            </div>
          </div>

          {/* Section: Media */}
          <div className="space-y-6 pt-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Gallery Assets</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* The Upload Trigger */}
              <div className="aspect-[3/4] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-muted-foreground hover:bg-white/5 transition-all cursor-pointer group">
                <Upload size={24} className="group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] mt-2 font-medium">Add Image</span>
              </div>
              
              {/* Placeholder for uploaded image slots */}
              <div className="aspect-[3/4] bg-white/5 rounded-xl border border-white/10 animate-pulse"></div>
              <div className="aspect-[3/4] bg-white/5 rounded-xl border border-white/10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Settings & Logistics - 35% width) */}
        <div className="lg:col-span-4 p-8 bg-white/[0.02] space-y-10">
          
          {/* Organization */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Inventory Setup</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select classification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flowers">Flowers</SelectItem>
                    <SelectItem value="plants">Plants</SelectItem>
                    <SelectItem value="pottery">Pottery</SelectItem>
                    <SelectItem value="candles">Candles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" placeholder="0.00" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Initial Stock</Label>
                  <Input id="stock" type="number" placeholder="0" className="h-11" />
                </div>
              </div>
            </div>
          </div>

          {/* Meta Information / Status */}
          <div className="space-y-6 pt-8 border-t border-white/10">
             <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Visibility</h2>
             <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
               <span className="text-sm">Published Status</span>
               <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10 border-none">Active</Badge>
             </div>
             <p className="text-[11px] text-muted-foreground leading-normal">
               Note: Once saved, this specimen will immediately appear in the public Shop Archive under the selected category.
             </p>
          </div>

        </div>
      </form>
    </div>
  )
}

// Simple Badge component if not using shadcn/badge
function Badge({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-bold ${className}`}>
      {children}
    </span>
  )
}