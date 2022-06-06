import { AnimalSelectors } from "src/app/infra/store/animal";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

describe('[Unit] - AnimalsSelectors', (): void => {
    const mockedSlug: string = 'some-animal';
    const mockedAnimalPage: IPageData = {
        id: 55,
        content: {
            rendered: 'random words',
        },
        excerpt: {
            rendered: 'random words',
        },
        slug: mockedSlug,
        title: {
            rendered: 'random words',
        }
    };
    const mockedAnimals: IPageData[] = [mockedAnimalPage];

    describe('selectAnimals', (): void => {
        it('should select the animals array from redux', (): void => {
            const animalPage: IPageData | null = AnimalSelectors.selectAnimal(
                mockedSlug
            ).projector(mockedAnimals);

            expect(animalPage).toEqual(mockedAnimalPage);
        });
    });
});

