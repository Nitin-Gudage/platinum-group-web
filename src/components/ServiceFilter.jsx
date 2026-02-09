const ServiceFilter = ({
  acTypes,
  activeAc,
  activeService,
  onAcChange,
  onServiceChange,
  acName,
  services,
}) => {
  return (
    <div className="w-full rounded-xl bg-white p-4">
      {/* Desktop AC Selector */}
      <div className="hidden lg:block">
        <ul className="flex gap-4 justify-center overflow-x-auto bg-white p-3 rounded-lg shadow-sm">
          {acTypes.map((ac) => (
            <li
              key={ac.id}
              onClick={() => onAcChange(ac)}
              className={`p-3 border rounded-xl cursor-pointer transition
                ${
                  activeAc === ac.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <img src={ac.image} alt={ac.name} className="h-20 mx-auto" />

              <p className="text-sm mt-1 text-center font-medium">{ac.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        {/* Top */}
        <h1 className="font-semibold text-lg">{acName}</h1>

        <div className=" bg-slate-100 rounded-lg flex justify-between items-center w-full">
          <div className="flex gap-1">
            {acTypes.map((ac) => (
              <button
                key={ac.id}
                onClick={() => onAcChange(ac)}
                className={`px-4 py-1.5 rounded-full text-sm
                  ${
                    activeAc === ac.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {ac.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="mt-4 bg-slate-100 p-2 rounded-xl flex gap-2 overflow-x-auto">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => onServiceChange(s)}
              className={`px-5 py-2 rounded-lg text-sm whitespace-nowrap
                ${
                  activeService === s.name
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
