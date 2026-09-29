import { Fragment, isValidElement } from "react";
import Link from "next/link";
import HomeLoanIcon from "../../../public/icons/HomeLoanIcon";

/**
 * Breadcrumbs
 *
 * @param {Array<{ label: string, href?: string, icon?: React.ReactNode | React.ComponentType }>} items
 *   Pages after "Home". The last item is treated as the current page (not a link).
 *   `icon` is optional — pass an element (<Phone size={14} />) or a component (Phone).
 * @param {boolean} showHome   Show the fixed Home crumb (default true)
 * @param {string}  homeHref   Link for Home (default "/")
 * @param {string}  homeLabel  Text for Home (default "Home")
 * @param {React.ReactNode} separator  Divider between crumbs (default ">")
 * @param {string}  className  Extra classes for the outer wrapper
 */
export default function Breadcrumbs({
  items = [],
  showHome = true,
  homeHref = "/",
  homeLabel = "Home",
  separator = <>&gt;</>,
  className = "",
}) {
  const crumbs = [
    ...(showHome
      ? [{ label: homeLabel, href: homeHref, icon: <HomeLoanIcon size={14} color="#999999" /> }]
      : []),
    ...items,
  ];

  return (
    <div className={`border-b border-[#dce1e7] bg-white/10 px-[4%] lg:px-[3%] py-3 ${className}`}>
      <nav aria-label="Breadcrumb" className="mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[#5f6a7b]">
          {crumbs.map((item, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <Fragment key={`${item.label}-${index}`}>
                <li>
                  {isLast || !item.href ? (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={`flex items-center gap-1.5 ${isLast ? "text-primary" : ""}`}
                    >
                      {renderIcon(item.icon)}
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-[#999999] transition-colors hover:text-primary"
                    >
                      {renderIcon(item.icon)}
                      {item.label}
                    </Link>
                  )}
                </li>

                {!isLast && (
                  <li aria-hidden="true" className="select-none">
                    {separator}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

function renderIcon(icon) {
  if (!icon) return null;
  if (isValidElement(icon)) return icon;
  const Icon = icon; // component like Phone from lucide-react
  return <Icon size={14} />;
}