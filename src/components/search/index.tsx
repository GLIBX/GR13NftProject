import { useState, useEffect, useRef } from 'react'
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Stack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"


export interface SearchBoxProps extends UseSearchBoxProps {
  placeholder?: string
}


export function SearchBox(props: SearchBoxProps) {
  const { query, refine, isSearchStalled } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handleReset(event: React.FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    setInputValue('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // Track when the value coming from the React state changes to synchronize
  // it with InstantSearch.
  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
  }, [inputValue, refine]);

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  useEffect(() => {
    // Bypass the state update if the input is focused to avoid concurrent
    // updates when typing.
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
  }, [query]);

  return (
    <Box justifyContent={'center'} px={5}>
      <Stack as="form" onSubmit={handleSubmit} onReset={handleReset} >
        <InputGroup
          display="flex"
          w={'30vw'}
        >
          <InputLeftElement w='3em' h={'6vh'}>
            <SearchIcon />
          </InputLeftElement>
          <Input
            ref={inputRef}
            borderRadius='15px'
            bg={'#CFCFCF'}
            h={'6vh'}
            placeholder={props.placeholder}
            type="search"
            value={inputValue}
            onChange={(event) => setInputValue(event.currentTarget.value)}
          />
        </InputGroup>
      </Stack>
    </Box>
  );
}