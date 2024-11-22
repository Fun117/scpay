"use server";

import { Metadata } from "next";
import React from "react";
import DocsTermsOfUseContent from "./getContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Use",
  };
}

function DocsTermsOfUse() {
  return (
    <div className="flex flex-col items-start max-w-[1024px] ml-0 mr-auto mb-10">
      <div className="flex flex-col justify-center items-start w-full mb-5">
        <h1 className="font-bold text-xl md:!text-2xl lg:!text-3xl">
          利用規約
        </h1>
      </div>
      <DocsTermsOfUseContent />
    </div>
  );
}

export default DocsTermsOfUse;
