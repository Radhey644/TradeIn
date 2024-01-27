"use client";
import React, { useEffect, useState } from "react";
import { Input, Kbd, Listbox, ListboxItem, Spinner } from "@nextui-org/react";
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
import { ListboxWrapper } from "../SideDashboard/ListboxWrapper";
import StockCard from "./StockCard";
import { debounce } from "@/helpers/debounce";

export default function SearchBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setIsloading] = useState(true);

  // Create a debounced version of the function that makes API requests
  const debouncedFetchData = debounce((searchQuery: string) => {
    setIsloading(true);
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.coins);
        setIsloading(false);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  }, 3000); // Adjust the debounce delay (1 second in this case)
  const debouncedFetchTrendingData = () => {
    setIsloading(true);
    fetch(`https://api.coingecko.com/api/v3/search/trending`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.coins);
        setIsloading(false);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  }; // Adjust the debounce delay (1 second in this case)

  // Effect to watch for changes in the 'query' state
  useEffect(() => {
    if (query.length > 0) {
      debouncedFetchData(query);
    }
  }, [query]);

  useEffect(() => {
    debouncedFetchTrendingData();
  }, []);

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
        className="min-h-[500px] bg-gray-900 p-1"
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
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  {loading ? (
                    <Spinner
                      label="Fteching coins..."
                      color="default"
                      className="relative top-[5rem]"
                    />
                  ) : (
                    data.map((coin, i) => {
                      if (i < 8) {
                        return <StockCard stock={coin} />;
                      }
                    })
                  )}
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
