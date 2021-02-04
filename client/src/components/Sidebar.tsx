import * as React from 'react';

type Props = {
  term?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

 export const Sidebar: React.FC<Props> = ({ term, onChange, onSubmit}: Props) => {

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     onChange(event);
   };

  return (
    <div id='sidebar'>
      <h1>Sidebar</h1>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

  