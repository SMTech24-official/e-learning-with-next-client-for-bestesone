import Link from "next/link";

interface FooterMenuItem {
  id: string | number;
  label: string;
  link: string;
}

interface FooterMenuTypes {
  label: string;
  items: FooterMenuItem[];
}

const FooterMenu = ({ label, items }: FooterMenuTypes) => {
  return (
    <>
      <h2 className="text-2xl mb-6 font-semibold">{label}</h2>
      <ul className="flex flex-col gap-2">
        {items?.map((item) => (
          <li key={item?.id}>
            <Link
              href={item?.link}
              className="relative after:content-[''] after:w-[0%] hover:after:w-[100%] after:ease-in-out after:transition-all after:duration-300 after:h-[1px] after:bg-white after:absolute after:bottom-[-3px] after:left-0"
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;
