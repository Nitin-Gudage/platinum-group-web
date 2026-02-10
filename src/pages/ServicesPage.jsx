import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ServiceSelector from "../components/ServiceSelector";
import ServiceFilter from "../components/ServiceFilter";
import BookService from "../components/BookService";

import { getMeta } from "../store/features/metaSlice";
import {
  getServices,
  setActiveAc,
  setActiveServiceType,
} from "../store/features/servicesSlice";

const slug = (t) => t.toLowerCase().trim().replace(/\s+/g, "-");

export default function ServicesPage() {
  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();

  const { acTypes, serviceTypes } = useSelector((s) => s.meta);

  const { activeAc, activeServiceType } = useSelector((s) => s.services);

  const acSlug = params.get("ac");

  /* Load meta */
  useEffect(() => {
    dispatch(getMeta());
  }, [dispatch]);

  /* Sync URL */
  useEffect(() => {
    if (!acTypes.length) return;

    const found = acTypes.find((a) => slug(a.name) === acSlug);

    const selected = found || acTypes[0];

    if (selected.id !== activeAc) {
      dispatch(setActiveAc(selected.id));
    }

    if (slug(selected.name) !== acSlug) {
      setParams({ ac: slug(selected.name) });
    }
  }, [acTypes, acSlug, activeAc, dispatch, setParams]);

  /* Load services */
  useEffect(() => {
    if (activeAc) {
      dispatch(getServices(activeAc));
    }
  }, [activeAc, dispatch]);

  /* Handlers */
  const changeAc = (ac) => {
    dispatch(setActiveAc(ac.id));
    setParams({ ac: slug(ac.name) });
  };

  const changeService = (s) => {
    dispatch(setActiveServiceType(s.name));

    const element = document.getElementById(`service-${s.id}`);
    if (element) {
      // Different offset for mobile vs desktop
      const isDesktop = window.innerWidth >= 1024;
      const offset = isDesktop ? 100 : 250; // Desktop: navbar only, Mobile: navbar + sticky filter
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const acName = acTypes.find((a) => a.id === activeAc)?.name || "AC Services";

  return (
    <div className="px-4 md:px-6 min-h-screen bg-gray-50 pt-[88px]">
      <main className="grid lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-20 h-fit">
          <ServiceSelector
            acName={acName}
            services={serviceTypes}
            selectedService={activeServiceType}
            onSelect={changeService}
          />
        </aside>

        {/* Main */}
        <section className="lg:col-span-9 col-span-12 space-y-5">
          <ServiceFilter
            acTypes={acTypes}
            services={serviceTypes}
            acName={acName}
            activeAc={activeAc}
            activeService={activeServiceType}
            onAcChange={changeAc}
            onServiceChange={changeService}
          />

          <BookService />
        </section>
      </main>
    </div>
  );
}
