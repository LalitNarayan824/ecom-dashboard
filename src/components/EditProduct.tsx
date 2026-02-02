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

interface EditProductProps {
  name: string;
  latinName: string;
  category: string;
  price: number;
  stock: number;
}

const EditProduct = ({ name, latinName, category, price, stock }: EditProductProps) => {
  
  // This function would eventually call a Server Action to update the DB
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Saving changes to registry...");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4">
      <div className="space-y-4">
        {/* 1. Specimen Identity */}
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[10px] uppercase font-mono text-white/40">Specimen_Name</Label>
          <Input 
            id="name" 
            defaultValue={name} 
            className="bg-white/5 border-white/10 focus-visible:ring-[#004b23]" 
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="latin" className="text-[10px] uppercase font-mono text-white/40">Scientific_Classification</Label>
          <Input 
            id="latin" 
            defaultValue={latinName} 
            className="bg-white/5 border-white/10 italic" 
          />
        </div>
      </div>

      {/* 2. Classification & Notes */}
      <div className="grid gap-2">
        <Label className="text-[10px] uppercase font-mono text-white/40">Registry_Class</Label>
        <Select defaultValue={category.toLowerCase()}>
          <SelectTrigger className="bg-white/5 border-white/10">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
            <SelectItem value="flowers">Flowers</SelectItem>
            <SelectItem value="plants">Plants</SelectItem>
            <SelectItem value="pottery">Pottery</SelectItem>
            <SelectItem value="candles">Candles</SelectItem>
            <SelectItem value="seeds">Seeds</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="desc" className="text-[10px] uppercase font-mono text-white/40">Archive_Notes</Label>
        <Textarea 
          id="desc" 
          placeholder="Detailed specimen characteristics..." 
          className="bg-white/5 border-white/10 min-h-[100px] text-sm resize-none"
        />
      </div>

      {/* 3. Financial & Inventory Nodes */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
        <div className="grid gap-2">
          <Label htmlFor="price" className="text-[10px] uppercase font-mono text-white/40">Unit_Price ($)</Label>
          <Input 
            id="price" 
            type="number" 
            defaultValue={price} 
            className="bg-white/5 border-white/10 font-mono" 
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="stock" className="text-[10px] uppercase font-mono text-white/40">Stock_Count</Label>
          <Input 
            id="stock" 
            type="number" 
            defaultValue={stock} 
            className="bg-white/5 border-white/10 font-mono" 
          />
        </div>
      </div>

      {/* Save Button is now part of the component for better form handling */}
      <Button type="submit" className="w-full bg-[#004b23] hover:bg-[#003d1c] text-white mt-4 uppercase font-mono text-xs tracking-widest">
        Commit_Changes
      </Button>
    </form>
  )
}

export default EditProduct;