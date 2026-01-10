function MenuList({
  list,
  func,
  activeTab,
}: {
  list: string[];
  func: (val: string) => void;
  activeTab: string;
}) {
  return (
    <li className="flex space-x-3 px-10">
      {list.map((item, i) => (
        <button
          key={i}
          onClick={() => func(item)}
          className={`font-heading text-3xl ${
            activeTab == item
              ? "text-foreground"
              : "text-muted hover:text-hover"
          }`}
        >
          [{item}]
        </button>
      ))}
    </li>
  );
}

export default MenuList;
