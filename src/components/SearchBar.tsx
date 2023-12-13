"use client";
import React, { useEffect, useState } from "react";
import { Input, Kbd, Listbox, ListboxItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Link,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { ListboxWrapper } from "./ListboxWrapper";
import StockCard from "./Search-bar/StockCard";
import { debounce } from "@/helpers/debounce";

export default function SearchBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Create a debounced version of the function that makes API requests
  const debouncedFetchData = debounce((searchQuery) => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.coins);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  }, 2000); // Adjust the debounce delay (1 second in this case)
  const debouncedFetchTrendingData = () => {
    fetch(`https://api.coingecko.com/api/v3/search/trending`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.coins);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  } // Adjust the debounce delay (1 second in this case)

  // Effect to watch for changes in the 'query' state
  useEffect(() => {
    if (query.length ==0) {
      debouncedFetchTrendingData()
    }
    else{
      debouncedFetchData(query);
    }
  }, [query]);
  return (
    <>
      <Button onPress={onOpen} className="bg-opacity-50 ml-5">
        <SearchIcon />
        Search a Stock
        <Kbd keys={["ctrl"]}>K</Kbd>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex  items-center gap-2">
                  <SearchIcon />
                  <Input
                    variant="underlined"
                    placeholder="Search Stock"
                    className="text-2xl"
                    size="sm"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  ></Input>
                  <Kbd keys={["escape"]}>ESC</Kbd>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  {
                    data.map((item,i)=>{
                      if(i<8)
                      {
                         return (<StockCard stock={item}/>)
                      }
                   
                    })
                  }
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <ListboxWrapper>
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    </ListboxWrapper> */}
    </>
  );
}
