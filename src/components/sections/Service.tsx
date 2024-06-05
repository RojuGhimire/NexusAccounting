import React from "react";

const services = [
  { icon: "/green.png", text: "Remote Bookkeeping", color: "bg-cyan-500" },
  { icon: "/green.png", text: "Financial Reporting", color: "bg-orange-500" },
  { icon: "/green.png", text: "Audit assistance", color: "bg-red-500" },
  { icon: "/green.png", text: "Payroll Services", color: "bg-blue-500" },
  {
    icon: "/green.png",
    text: "Tax Preparation and Filing",
    color: "bg-yellow-500",
  },
  {
    icon: "/green.png",
    text: "Accounts receivable/payable",
    color: "bg-green-500",
  },
];

const benefits = [
  { icon: "🎧", text: "24/7 Customer Support" },
  { icon: "🔄", text: "Business Process Streamlining" },
  { icon: "⚙️", text: "Efficiency Maximization" },
  { icon: "👨‍💼", text: "Access Expert Talent" },
];

const ServicesComponent: React.FC = () => {
  return (
    <>
      <div className="w-[1237.07px]  h-[549px] left-10 gap-53">
        <div className="flex flex-row items-center gap-[195px]  ">
            <img src="/ser.png" alt="" />
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="text-zinc-500">Meet Our Professional Team</p>
            <div className="space-y-4 ">
            <div className="space-y-4 relative">
  {services.map((service, index) => (
    <div key={index} className="relative">
      <img src={service.icon} alt="" className="w-[340px] h-[55px]" /> {/* Service icon */}
      <span className="text-lg absolute top-3 left-16 px-2 py-1">{service.text}</span>
    </div>
  ))}
</div>


            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#DFF0EE] rounded-3xl w-[278px] h-[330px] gap-[26px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-4xl text-green-600">{benefit.icon}</div>
                <span className="text-lg text-green-900">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
