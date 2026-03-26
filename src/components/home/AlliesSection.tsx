import { allies } from "@/lib/content/home";

const AlliesSection = () => (
  <section className="py-16 bg-background border-t border-border">
    <div className="container">
      <p className="text-center text-[10px] font-body font-semibold uppercase tracking-[4px] text-muted-foreground mb-10">
        Nuestros Aliados Estratégicos
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {allies.map((ally) => (
          <span
            key={ally.name}
            className="text-lg md:text-xl font-display font-bold text-muted-foreground/40 hover:text-accent transition-colors cursor-default"
          >
            {/* 🔌 Sanity: Reemplazar con <img src={ally.logo?.src} /> cuando haya logos */}
            {ally.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AlliesSection;
