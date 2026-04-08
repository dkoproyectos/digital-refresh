import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, TrendingUp, Calendar, Percent, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { creditSimulatorContent as cms } from "@/lib/content/credit-simulator";

interface CreditSimulatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceContext?: string;
}

interface FormData {
  name: string;
  document: string;
  phone: string;
  email: string;
  income: string;
  employmentType: string;
}

interface SimulatedResult {
  maxAmount: string;
  monthlyPayment: string;
  term: string;
  rate: string;
}

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);

/**
 * Simulación local — a futuro reemplazar con llamada a Experian API
 * 🔌 Experian: POST /api/experian/simulate
 */
const simulateCredit = (income: number, employmentType: string): SimulatedResult => {
  const multiplier = employmentType === "independiente" ? 28 : employmentType === "pensionado" ? 22 : 36;
  const maxAmount = income * multiplier;
  const term = maxAmount > 30_000_000 ? 60 : maxAmount > 15_000_000 ? 48 : 36;
  const monthlyRate = 0.0125;
  const monthlyPayment = (maxAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

  return {
    maxAmount: formatCurrency(maxAmount),
    monthlyPayment: formatCurrency(monthlyPayment),
    term: `${term} meses`,
    rate: "1.25% M.V. (15% E.A.)",
  };
};

const CreditSimulatorModal = ({ open, onOpenChange, serviceContext }: CreditSimulatorModalProps) => {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [form, setForm] = useState<FormData>({
    name: "", document: "", phone: "", email: "", income: "", employmentType: "empleado",
  });
  const [result, setResult] = useState<SimulatedResult | null>(null);

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => { setStep("form"); setResult(null); }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    const incomeNum = parseInt(form.income.replace(/\D/g, ""), 10) || 0;

    // Simulate API call delay — reemplazar con fetch a Experian
    setTimeout(() => {
      const res = simulateCredit(incomeNum, form.employmentType);
      setResult(res);
      setStep("result");
    }, 2200);
  };

  const updateField = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (!open) return null;

  const f = cms.form.fields;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-card border border-border rounded-sm shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary px-6 py-5 border-b border-border flex items-center justify-between z-10">
              <div>
                <h2 className="font-display text-xl font-bold text-primary-foreground">{cms.form.title}</h2>
                <p className="text-primary-foreground/60 text-xs font-body mt-0.5">{cms.form.subtitle}</p>
              </div>
              <button onClick={handleClose} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* ─── FORM STEP ─── */}
                {step === "form" && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {serviceContext && (
                      <div className="bg-secondary/10 border border-secondary/20 rounded-sm px-4 py-2 mb-2">
                        <p className="text-xs font-body text-foreground">
                          <span className="font-semibold text-secondary">Servicio:</span> {serviceContext}
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.name.label}</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder={f.name.placeholder}
                        className="mt-1 w-full px-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.document.label}</label>
                        <input
                          type="text"
                          required
                          value={form.document}
                          onChange={(e) => updateField("document", e.target.value)}
                          placeholder={f.document.placeholder}
                          className="mt-1 w-full px-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.phone.label}</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder={f.phone.placeholder}
                          className="mt-1 w-full px-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.email.label}</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder={f.email.placeholder}
                        className="mt-1 w-full px-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.income.label}</label>
                        <div className="relative mt-1">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                          <input
                            type="text"
                            required
                            value={form.income}
                            onChange={(e) => updateField("income", e.target.value.replace(/[^0-9.]/g, ""))}
                            placeholder={f.income.placeholder}
                            className="w-full pl-8 pr-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">{f.employmentType.label}</label>
                        <select
                          value={form.employmentType}
                          onChange={(e) => updateField("employmentType", e.target.value)}
                          className="mt-1 w-full px-4 py-3 bg-muted/50 border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:border-secondary transition-colors"
                        >
                          {f.employmentType.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <p className="text-[10px] text-muted-foreground font-body leading-relaxed">{cms.form.disclaimer}</p>

                    <button
                      type="submit"
                      className="w-full btn-gold text-sm py-4 tracking-[2px] flex items-center justify-center gap-2"
                    >
                      <CreditCard size={16} />
                      {cms.form.submitLabel}
                    </button>
                  </motion.form>
                )}

                {/* ─── LOADING STEP ─── */}
                {step === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 flex flex-col items-center gap-6"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    >
                      <Loader2 size={48} className="text-secondary" />
                    </motion.div>
                    <div className="text-center">
                      <p className="font-display text-lg font-bold text-foreground mb-1">Analizando tu perfil...</p>
                      <p className="text-sm text-muted-foreground font-body">Consultando centrales de riesgo</p>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full max-w-xs h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ─── RESULT STEP ─── */}
                {step === "result" && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    {/* Success header */}
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center"
                      >
                        <CheckCircle size={32} className="text-accent" />
                      </motion.div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{cms.result.successTitle}</h3>
                      <p className="text-sm text-muted-foreground font-body mt-1">{cms.result.successSubtitle}</p>
                    </div>

                    {/* Result cards */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: TrendingUp, label: cms.result.labels.maxAmount, value: result.maxAmount, accent: true },
                        { icon: CreditCard, label: cms.result.labels.monthlyPayment, value: result.monthlyPayment, accent: false },
                        { icon: Calendar, label: cms.result.labels.term, value: result.term, accent: false },
                        { icon: Percent, label: cms.result.labels.rate, value: result.rate, accent: false },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`p-4 rounded-sm border ${item.accent ? "bg-secondary/10 border-secondary/30 col-span-2" : "bg-muted/30 border-border"}`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <item.icon size={14} className={item.accent ? "text-secondary" : "text-muted-foreground"} />
                            <span className="text-[10px] font-body font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</span>
                          </div>
                          <p className={`font-display text-lg font-bold ${item.accent ? "text-secondary" : "text-foreground"}`}>{item.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-primary rounded-sm p-5 text-center">
                      <p className="text-sm text-primary-foreground/80 font-body mb-3">{cms.result.ctaDescription}</p>
                      <a
                        href="#cotizar"
                        onClick={handleClose}
                        className="btn-gold text-xs py-3 px-8 inline-flex items-center gap-2"
                      >
                        {cms.result.ctaLabel}
                        <ArrowRight size={14} />
                      </a>
                    </div>

                    <p className="text-[9px] text-muted-foreground/60 font-body leading-relaxed text-center">{cms.result.disclaimerResult}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreditSimulatorModal;
