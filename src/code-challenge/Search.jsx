export const Search = ({ searchText, onChange, ...rest }) => (
  <div className="search">
    <label>Search</label>
    <input
      type="text"
      name="Search"
      value={searchText}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  </div>
);