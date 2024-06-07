import BigBlock from "./BigBlock";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div>
      <div>{`FFllYY's Journal`}</div>
      <div>
        <SearchBar />
        <button>setting icon</button>
      </div>
      <BigBlock>
        <span>icon</span> New Entry
      </BigBlock>
      <BigBlock>
        <span>icon</span> View All Entries
      </BigBlock>
      <BigBlock>
        <span>icon</span> View Starred Entries
      </BigBlock>
    </div>
  );
};
export default Sidebar;
