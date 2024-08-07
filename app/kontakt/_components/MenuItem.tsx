export interface MenuItemProps {
  title: string;
  price: string;
  weight: string;
  ingredient?: string;
  imageSrc?: string;
}

export function MenuItem({
  title,
  price,
  weight,
  ingredient,
  imageSrc,
}: MenuItemProps) {
  return (
    <div>
      <p>
        {title},{price}
      </p>
      <p>{weight}</p>
      {ingredient && <p>{ingredient}</p>}
      {imageSrc && <img src={imageSrc} alt={title} />}
    </div>
  );
}
