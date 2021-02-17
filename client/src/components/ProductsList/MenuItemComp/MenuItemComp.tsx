import React from 'react';
import './MenuItemComp.css'

type Props = {
  category: string;
  name: string;
  dataId: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {};
};

const MenuItemComp: React.FC<Props> = ({
  category,
  name,
  dataId,
  onClick,
}: Props) => {
  // const dispatch = useDispatch();

  // const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   onClick(event);
  // };

  return (
    <button
      name={category}
      data-id={dataId}
      value={name}
      className='MenuItemComp'
      data-testid='MenuItemComp'
      onClick={onClick}>
      {name}
    </button>
  );
};

export default MenuItemComp;
