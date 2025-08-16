import worldCoverage from '@/assets/world-coverage.jpg';


const WorldMapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-brand-accent">Global</span> Visa Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We process visas for 50+ countries across all continents. Your dream destination is just an application away.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-large">
            <img 
              src={worldCoverage} 
              alt="World map showing global visa coverage" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
          </div>

          {/* Coverage stats overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-card/95 backdrop-blur rounded-xl p-6 border border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary">6</div>
                  <div className="text-sm text-muted-foreground">Continents</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Embassies</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular regions */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-brand-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🇪🇺</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Europe (Schengen)</h3>
            <p className="text-muted-foreground text-sm">26 countries, single visa access</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌏</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Asia Pacific</h3>
            <p className="text-muted-foreground text-sm">Business & tourist visas</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌎</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Americas</h3>
            <p className="text-muted-foreground text-sm">USA, Canada & Latin America</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;