import { Button, Menu,  MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order:by relevance
      </MenuButton>
      <MenuList>
       <MenuItem>time and date</MenuItem>
          
      </MenuList>
    </Menu>
  )
}

export default SortSelector
