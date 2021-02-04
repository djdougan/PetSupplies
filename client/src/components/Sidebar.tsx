import * as React from 'react';

type Props = {
  searchTerm: (term: string)=> void;
};


export const Sidebar: React.FC<Props> = ({ searchTerm}: Props) => {
  const [term, setTerm] = React.useState<string>();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) ={
    setTerm({...term, [e.currentTarget.id]: e.currentTarget.value,}) 
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e);
  };



  return (
    <div id="sidebar">
      <h1>Sidebar</h1>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={setTerm} />
        <button>Search</button>
      </form>
    </div>
  );
};
  