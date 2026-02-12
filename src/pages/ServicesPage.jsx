"use client";

import { useEffect, useCallback, useMemo } from "react";
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

import useSEO from "../utils/SeoComponents/useSEO";

/* ================= HELPERS ================= */

const slugify = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

export default function ServicesPage() {
  useSEO({
    title: "AC Services India | AC Repair, Installation & Maintenance",
    description:
      "Complete AC services in India - repair, installation, gas refill, and maintenance for all brands. Book online for fast service.",
    ogImage: `${window.location.origin}/og/services.jpg`,
  });

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { acTypes, serviceTypes } = useSelector((s) => s.meta);
  const { activeAc, activeServiceType } = useSelector((s) => s.services);

  const acSlug = searchParams.get("ac");

  /* ================= FIND AC ================= */

  const findAcFromSlug = useCallback(
    (slugValue) => {
      if (!acTypes?.length || !slugValue) return null;

      return acTypes.find((a) => slugify(a.name) === slugValue) || null;
    },
    [acTypes],
  );

  /* ================= UPDATE URL ================= */

  const updateUrl = useCallback(
    (slugValue) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (params.get("ac") === slugValue) {
          return params;
        }

        params.set("ac", slugValue);
        return params;
      });
    },
    [setSearchParams],
  );

  /* ================= LOAD META ================= */

  useEffect(() => {
    dispatch(getMeta());
  }, [dispatch]);

  /* ================= SYNC URL → REDUX ================= */

  useEffect(() => {
    if (!acTypes?.length) return;

    const found = findAcFromSlug(acSlug);

    // ✅ Valid slug
    if (found) {
      if (found.id !== activeAc) {
        dispatch(setActiveAc(found.id));
      }
      return;
    }

    // Default AC
    const defaultAc = acTypes[0];

    if (!defaultAc) return;

    // ✅ Invalid slug
    if (acSlug) {
      dispatch(setActiveAc(defaultAc.id));
      updateUrl(slugify(defaultAc.name));
      return;
    }

    // ✅ First load (no slug)
    if (!activeAc) {
      dispatch(setActiveAc(defaultAc.id));
      updateUrl(slugify(defaultAc.name));
    }
  }, [acSlug, acTypes, activeAc, dispatch, findAcFromSlug, updateUrl]);

  /* ================= LOAD SERVICES ================= */

  useEffect(() => {
    if (activeAc) {
      dispatch(getServices(activeAc));
    }
  }, [activeAc, dispatch]);

  /* ================= HANDLERS ================= */

  const changeAc = useCallback(
    (ac) => {
      dispatch(setActiveAc(ac.id));
      updateUrl(slugify(ac.name));
    },
    [dispatch, updateUrl],
  );

  const changeService = useCallback(
    (service) => {
      dispatch(setActiveServiceType(service.name));

      const element = document.getElementById(`service-${service.id}`);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [dispatch],
  );

  /* ================= ACTIVE AC NAME ================= */

  const acName = useMemo(() => {
    return acTypes.find((a) => a.id === activeAc)?.name || "AC Services";
  }, [acTypes, activeAc]);

  /* ================= UI ================= */

  return (
    <div className="px-4 md:px-6 min-h-screen bg-gray-50 pt-[72px] md:pt-[88px]">
      <main className="grid lg:grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-20 h-fit">
          <ServiceSelector
            acName={acName}
            services={serviceTypes}
            selectedService={activeServiceType}
            onSelect={changeService}
          />
        </aside>

        {/* MAIN */}
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
