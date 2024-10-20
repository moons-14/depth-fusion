import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const Header = () => {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4 sticky">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Depth Fusion</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Depth Fusion</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
