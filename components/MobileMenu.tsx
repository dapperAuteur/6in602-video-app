import Link from 'next/link';
import React from 'react';

interface MobileMenuProps {
  menuItems?: {
    name: string;
    href: string;
  }[]
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {
          menuItems?.map((menuItem) => (
            <Link
              key={menuItem.name}
              href={menuItem.href}
              >
              <div className="px-3 text-center text-white hover:underline">
                {menuItem.name}
            </div>
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MobileMenu;
