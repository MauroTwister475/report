import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { LogoutLink } from "./LogoutLink";

export function Avatar() {
  return (
    <Menu>
      <MenuButton
        as='button'
        className='w-10 h-10 rounded-full bg-main-500 border-gray-400 border-2 fixed right-10'
      >
        <span className='font-semibold text-md text-white'>
          M
        </span>
      </MenuButton>
      <MenuList className='w-48 rounded-md py-2 bg-white shadowHeader'>
        <MenuItem className='py-2 px-4 hover:bg-zinc-100 text-sm'>
          <LogoutLink />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}