/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  search: z.any(),
});

interface ToggleModal {
  toggleModal: () => void;
}

export default function LocationSearchModal({ toggleModal }: ToggleModal) {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog open >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">
            Search Institute / Course near by you
          </DialogTitle>
          <Button
            onClick={() => toggleModal()}
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full"
          >
            X
          </Button>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="relative">
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full "}
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
            >
              <MyFormInput
                name={"search"}
                label="Your street number or area address"
                type="text"
                placeHolder="Search your location"
              />
            </MyFormWrapper>
          </div>
          <button className="inline-flex items-center gap-2 text-primary">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Use my current location</span>
          </button>
          <div className="h-[300px] w-full rounded-lg border bg-muted/50">
            {/* Map component would go here - you'll need to integrate your preferred mapping solution */}
            <div className="h-full w-full bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat opacity-50" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
