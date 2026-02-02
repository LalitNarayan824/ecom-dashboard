import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductRow } from "@/components/ProductRow";

// Example Registry Data
const registryData = [
  { id: "PROD-X1", name: "Obsidian Tulip", latinName: "Tulipa Nightshade", category: "Flowers", stock: 42, price: 120.00 },
  { id: "PROD-Y2", name: "Moonlight Fern", latinName: "Selaginella Willdenowii", category: "Plants", stock: 5, price: 85.00 },
  { id: "PROD-Z3", name: "Void Candle", latinName: "Cera Tenebris", category: "Candles", stock: 0, price: 45.00 },
];

export default function ProductsPage() {
  return (
    <div className="p-8 space-y-8 min-h-screen">
      
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-mono uppercase tracking-tighter text-[#ecec25]">
            Specimen_Archive
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Authorized Curator Access Only</p>
        </div>
        <Button className="bg-[#004b23] hover:bg-[#003d1c] text-white font-mono text-xs uppercase rounded-none">
          <Plus className="mr-2 h-4 w-4" /> New_Entry
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input 
          placeholder="Filter by ID or Name..." 
          className="pl-9 bg-white/5 border-white/10 font-mono text-xs focus:ring-[#004b23]"
        />
      </div>

      {/* Registry Table */}
      <div className="border border-white/10 bg-white/[0.02]">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="font-mono text-[10px] uppercase">ID_Ref</TableHead>
              <TableHead className="font-mono text-[10px] uppercase">Specimen_Details</TableHead>
              <TableHead className="font-mono text-[10px] uppercase">Class</TableHead>
              <TableHead className="font-mono text-[10px] uppercase">Inventory</TableHead>
              <TableHead className="font-mono text-[10px] uppercase text-right">Unit_Price</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registryData.map((specimen) => (
              <ProductRow key={specimen.id} {...specimen} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}