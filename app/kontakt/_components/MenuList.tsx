import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";

interface MenuListProps {
  items: ComponentProps<typeof MenuItem>[];
}

export function MenuList({ items }: MenuListProps) {
  return (
    <div>
      {items.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          price={item.price}
          weight={item.weight}
          imageSrc={item.imageSrc}
          ingredient={item.ingredient}
        />
      ))}
    </div>
  );
}
