import { useState, useRef } from "react";

import * as S from "./styled";

import * as SearchServices from "./../../services/searchServices.js";

export default function SearchBar(props) {
  const [search, setSearch] = useState({ text: "", result: [], show: false });

  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSearch = async (e) => {
    const text = e.target.value;
    setSearch({ ...search, text });

    if (text.length > 2) {
      try {
        const users = await SearchServices.SearchByUsername(text);

        setSearch({
          ...search,
          text,
          result: users.data,
          show: true,
        });
      } catch (e) {
        console.log(e);
        setSearch({
          ...search,
          text,
          result: [{ id: -1, image: "", username: "Não encontrado" }],
          show: true,
        });
      }

      return;
    }

    setSearch({
      ...search,
      text,
      result: [],
      show: false,
    });
  };

  return (
    <S.Container mobile={props.mobile}>
      <S.SearchBar
        type="text"
        inputRef={(ref) => (inputRef.current = ref)}
        placeholder={props.placeholder}
        minLength={3}
        debounceTimeout={300}
        onBlur={() => setSearch({ ...search, show: false })}
        value={search.text}
        onChange={(e) => handleSearch(e)}
      />
      <S.SearchResult show={search.result.length > 0 && search.show}>
        {search.result.map((user) => (
          <S.Link to={`/user/${user.id}`} key={user.id}>
            {user.username !== "Não encontrado" && (
              <img src={user.image} alt={user.username} />
            )}
            <p>{user.username}</p>
          </S.Link>
        ))}
      </S.SearchResult>
      <S.Icon onClick={handleFocus} />
    </S.Container>
  );
}
