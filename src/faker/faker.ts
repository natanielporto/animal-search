import { faker } from "@faker-js/faker";

type AnimalData = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

const getImage = (): string =>
  faker.image.urlLoremFlickr({ category: "animals" });
const getType = (): string => faker.animal.type();
const getUrl = (): string => faker.internet.url();
const getText = (): string => faker.lorem.sentences();
const getTitle = (type: string): string => faker.animal[type]();

const data: AnimalData[] = [...new Array(100)].map((_, index) => {
  const type = getType();
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  };
});

export default data;
