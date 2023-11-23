import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  name: string;
  href: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, name, active }) => {
  return (
    <Link href={href}>
      <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
        {name}
      </div>
    </Link>
  )
}

export default NavbarItem;
