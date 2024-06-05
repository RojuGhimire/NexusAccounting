
        import React from 'react';
        
        const services = [
          { icon: '📞', text: 'Remote Bookkeeping', color: 'bg-cyan-500' },
          { icon: '📋', text: 'Financial Reporting', color: 'bg-orange-500' },
          { icon: '🕵️', text: 'Audit assistance', color: 'bg-red-500' },
          { icon: '💵', text: 'Payroll Services', color: 'bg-blue-500' },
          { icon: '🧾', text: 'Tax Preparation and Filing', color: 'bg-yellow-500' },
          { icon: '📑', text: 'Accounts receivable/payable', color: 'bg-green-500' },
        ];
        
        const benefits = [
          { icon: '🎧', text: '24/7 Customer Support' },
          { icon: '🔄', text: 'Business Process Streamlining' },
          { icon: '⚙️', text: 'Efficiency Maximization' },
          { icon: '👨‍💼', text: 'Access Expert Talent' },
        ];
        
        const ServicesComponent: React.FC = () => {
          return (
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative flex items-center justify-center w-40 h-40 bg-teal-500 rounded-full text-white text-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold ">OUR SERVICES</span>
                    <span className="text-sm">WHAT WE DO</span>
                  </div>
                  <div className="absolute flex space-x-2 ">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-bold">Our Services</h2>
                <p className="text-zinc-500">Meet Our Professional Team</p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
                      <div className={`w-10 h-10 flex items-center justify-center text-white rounded-full ${service.color}`}>
                        {service.icon}
                      </div>
                      <span className="text-lg">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 p-4 bg-zinc-100 rounded-lg">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        
        export default ServicesComponent;
      