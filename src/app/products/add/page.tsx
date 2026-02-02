import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import AddProductForm from "@/components/AddProductForm";

export default function AddProductPage() {
  return (
    <div className="p-8  mx-auto space-y-8">
      {/* Back Link */}
      <Link 
        href="/products" 
        className="flex items-center gap-2 text-xs font-mono uppercase text-white/40 hover:text-[#ecec25] transition-colors"
      >
        <ChevronLeft size={14} /> Back_to_Registry
      </Link>

      <header>
        <h1 className="text-3xl font-mono uppercase tracking-tighter text-[#ecec25]">
          New_Specimen_Entry
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Input required data nodes to register a new botanical specimen.
        </p>
      </header>

      <div className="bg-white/[0.02] border border-white/10 p-8 rounded-none">
        <AddProductForm />
      </div>
    </div>
  );
}