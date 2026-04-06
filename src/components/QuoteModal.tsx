/**
 * ============================================================
 * FORMULARIO FLOTANTE DE COTIZACIÓN
 * ============================================================
 * Responsivo: Dialog (desktop) + Drawer (móvil).
 * Usa el mismo ContactForm CRM-ready para Bitrix24.
 * ============================================================
 */

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ContactForm from "@/components/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: string;
  productName?: string;
  productOptions?: string[];
  subOptionsMap?: Record<string, string[]>;
}

const QuoteModal = ({
  open,
  onOpenChange,
  context,
  productName,
  productOptions,
  subOptionsMap,
}: QuoteModalProps) => {
  const isMobile = useIsMobile();

  const formContent = (
    <div className="px-1">
      <ContactForm
        context={context}
        variant="sales"
        productOptions={productOptions || (productName ? [productName] : [])}
        subOptionsMap={subOptionsMap}
        onFormSubmit={() => onOpenChange(false)}
      />
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="text-left">
            <DrawerTitle className="font-display text-xl text-foreground">
              Cotiza tu proyecto
            </DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Completa el formulario y te contactamos por WhatsApp
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-6 overflow-y-auto">{formContent}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Cotiza tu proyecto
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Completa el formulario y te contactamos por WhatsApp
          </DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
