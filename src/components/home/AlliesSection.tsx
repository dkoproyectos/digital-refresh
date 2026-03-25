const allies = [
  "Pentagrama", "Neolith", "Alfa", "Hunter Douglas",
  "Solattu", "3M", "Solar Gard", "Llanogrande"
];

const AlliesSection = () => (
  <section className="py-16 bg-background border-t border-border">
    <div className="container">
      <p className="text-center text-[10px] font-body font-semibold uppercase tracking-[4px] text-muted-foreground mb-10">
        Nuestros Aliados Estratégicos
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {allies.map((name) => (
          <span
            key={name}
            className="text-lg md:text-xl font-display font-bold text-muted-foreground/40 hover:text-accent transition-colors cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AlliesSection;
