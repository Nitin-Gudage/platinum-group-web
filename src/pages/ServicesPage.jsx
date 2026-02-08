import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ServiceSelector from "./ServiceSelector";

import { getMeta } from "../store/features/metaSlice";
import { getServices, setActiveAc } from "../store/features/servicesSlice";
import BookService from "../components/BookService";

const slug = (t) => t.toLowerCase().replace(/\s+/g, "-");

export default function ServicesPage() {
  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();

  const { acTypes } = useSelector((s) => s.meta);
  const { activeAc } = useSelector((s) => s.services);

  const acSlug = params.get("ac");

  /* Load meta */
  useEffect(() => {
    dispatch(getMeta());
  }, []);

  /* Sync AC */
  useEffect(() => {
    if (!acTypes.length) return;

    const found = acTypes.find((a) => slug(a.name) === acSlug);

    const ac = found || acTypes[0];

    dispatch(setActiveAc(ac.id));

    setParams({ ac: slug(ac.name) });
  }, [acTypes]);

  /* Load services */
  useEffect(() => {
    if (activeAc) dispatch(getServices(activeAc));
  }, [activeAc]);

  const changeAc = (ac) => {
    dispatch(setActiveAc(ac.id));
    setParams({ ac: slug(ac.name) });
  };

  return (
    <div className="pt-16 px-6">
      <main className="relative grid h-full md:grid-cols-12 gap-4">
        {/* LEFT */}
        <aside className="md:col-span-3 h-fit sticky top-16 self-start">
          <ServiceSelector />
        </aside>

        {/* RIGHT */}
        <aside className="md:col-span-9 space-y-6">
          {/* AC SELECTOR */}
          <ul className="flex gap-4 justify-center overflow-x-auto bg-white p-3 rounded-lg">
            {acTypes.map((ac) => (
              <li
                key={ac.id}
                onClick={() => changeAc(ac)}
                className={`p-3 border rounded cursor-pointer
                  ${
                    activeAc === ac.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }
                `}
              >
                <img src={ac.image} className="h-20 mx-auto" />

                <p className="text-sm mt-1 text-center">{ac.name}</p>
              </li>
            ))}
          </ul>

          <BookService />
        </aside>
      </main>
    </div>
  );
}
