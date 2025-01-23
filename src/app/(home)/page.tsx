"use client";

import { useSearchParams } from "@/hooks/use-search-params";

import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";


const HomePage = () => {
  const [search] = useSearchParams();
  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });


  return (
    <div className='min-h-screen flex flex-col'>
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          loadMore={loadMore}
          status={status}
          documents={results}
        />
      </div>
    </div>
  );
};

export default HomePage;