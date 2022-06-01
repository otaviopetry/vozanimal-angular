import { HttpClient } from '@angular/common/http';
import { LoadPageService } from './load-page.service';

describe('[Unit] - LoadPageService', () => {
    let service: LoadPageService;

    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach((): void => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        service = new LoadPageService(httpClientSpy);
    });

    describe('loadPageBySlug', (): void => {
        it('should call the api passing the page slug', (): void => {
            const mockedSlug: string = 'randomSlug';

            service.loadPageBySlug(mockedSlug);

            expect(httpClientSpy.get).toHaveBeenCalledWith(
                jasmine.stringContaining(`slug=${mockedSlug}`)
            );
        });
    });
});
