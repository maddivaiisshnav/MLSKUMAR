const ClientsSection = () => {
  const clients = [
    { icon: '🏭', name: 'Food Manufacturers' },
    { icon: '🌍', name: 'International Exporters' },
    { icon: '🍽️', name: 'Restaurant Chains' },
    { icon: '🏪', name: 'Wholesale Distributors' }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h2>
          <div className="h-1 w-24 bg-emerald-600 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center hover:border-emerald-600 transition"
            >
              <div className="text-5xl mb-3">{client.icon}</div>
              <h4 className="font-semibold text-white text-sm">{client.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ClientsSection