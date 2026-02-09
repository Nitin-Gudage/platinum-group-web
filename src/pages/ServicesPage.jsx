import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ServiceSelector from "./ServiceSelector";
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

    document.getElementById(`service-${s.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const acName = acTypes.find((a) => a.id === activeAc)?.name || "AC Services";

  return (
    <div className="pt-16 px-4 md:px-6 min-h-screen">
      <main className="grid md:grid-cols-12 gap-5">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-16 h-fit">
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
