import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import data from "../faker/faker";

export interface AnimalProps {
  id: number;
  description: string;
  image: string;
  title: string;
  type: string;
  url: string;
}

interface AnimalContextData {
  search: string;
  setSearch: (term: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchResult: () => AnimalProps[];
  showAnimalCard: boolean;
  setShowAnimalCard: Dispatch<SetStateAction<boolean>>;
  card: AnimalProps;
  setCard: ({ id, url, title, description, image, type }: AnimalProps) => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export const AnimalContext = createContext({} as AnimalContextData);

export const AnimalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [search, setSearch] = useState("");
  const [showAnimalCard, setShowAnimalCard] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const fullData = data;

  const [card, setCard] = useState({
    id: 0,
    url: "",
    title: "",
    description: "",
    image: "",
    type: "",
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const term = e.target.value;
      setSearch(term);
    }
  };

  useEffect(() => {
    if (search === "") {
      setShowAnimalCard(false);
    }
  }, [search]);

  const handleSearchResult = () => {
    let result = [];
    result = fullData.filter(
      (el) => el.type.toLowerCase() === search.toLowerCase()
    );
    if (result.length === 0) {
      result = fullData.filter(
        (el) => el.title.toLowerCase() === search.toLowerCase()
      );
    }

    return result;
  };

  return (
    <AnimalContext.Provider
      value={{
        search,
        setSearch,
        handleSearch,
        handleSearchResult,
        showAnimalCard,
        setShowAnimalCard,
        card,
        setCard,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
};
